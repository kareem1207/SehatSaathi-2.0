"use client"
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const DEFAULT_CENTER = [78.9629, 20.5937]; // India center

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    // Initialize map with default center
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: DEFAULT_CENTER,
      zoom: 4
    });
    mapRef.current = map;

    // Get user location
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([longitude, latitude]);

          // Add user marker
          new mapboxgl.Marker({ color: '#FF0000' })
            .setLngLat([longitude, latitude])
            .setPopup(new mapboxgl.Popup().setHTML('Your Location'))
            .addTo(map);

          // Center map on user location
          map.flyTo({
            center: [longitude, latitude],
            zoom: 14,
            essential: true
          });

          // Search for nearby hospitals
          const searchNearbyHospitals = async () => {
            try {
              const response = await fetch(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/hospital.json?` +
                `proximity=${longitude},${latitude}&` +
                `limit=5&` +
                `access_token=${mapboxgl.accessToken}`
              );

              const data = await response.json();

              if (data.features.length > 0) {
                data.features.forEach(async (hospital, index) => {
                  // Add hospital marker
                  new mapboxgl.Marker({ color: '#00AF54' })
                    .setLngLat(hospital.center)
                    .setPopup(
                      new mapboxgl.Popup().setHTML(`
                        <h3 class="font-bold">${hospital.text}</h3>
                        <p>${hospital.place_name}</p>
                      `)
                    )
                    .addTo(map);

                  // Get route to hospital
                  const routeRes = await fetch(
                    `https://api.mapbox.com/directions/v5/mapbox/driving/` +
                    `${longitude},${latitude};${hospital.center[0]},${hospital.center[1]}?` +
                    `steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`
                  );

                  const routeJson = await routeRes.json();
                  
                  if (routeJson.routes?.length > 0) {
                    const route = routeJson.routes[0];

                    map.addSource(`route-${index}`, {
                      type: 'geojson',
                      data: {
                        type: 'Feature',
                        properties: {},
                        geometry: route.geometry
                      }
                    });

                    map.addLayer({
                      id: `route-${index}`,
                      type: 'line',
                      source: `route-${index}`,
                      layout: {
                        'line-join': 'round',
                        'line-cap': 'round'
                      },
                      paint: {
                        'line-color': '#00AF54',
                        'line-width': 4,
                        'line-opacity': 0.75
                      }
                    });
                  }
                });

                // Fit bounds to show all markers
                const bounds = new mapboxgl.LngLatBounds();
                bounds.extend([longitude, latitude]);
                data.features.forEach(hospital => bounds.extend(hospital.center));
                map.fitBounds(bounds, { padding: 50 });
              }
            } catch (err) {
              console.error('Error finding hospitals:', err);
              setError('Failed to find nearby hospitals');
            }
          };

          map.on('load', searchNearbyHospitals);
        },
        (err) => {
          console.error('Geolocation error:', err);
          setError('Please enable location services');
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }
      );
    }

    setLoading(false);
    return () => map.remove();
  }, []);

  return (
    <div className="relative w-full max-w-full mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden" style={{ height: '400px' }}>
        <div className="relative w-full h-full">
          {loading && (
            <div className="absolute inset-0 bg-white/75 backdrop-blur-sm z-20 flex items-center justify-center">
              <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent" />
            </div>
          )}
          
          {error && (
            <div className="absolute top-4 left-0 right-0 mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg z-10 max-w-md">
              {error}
            </div>
          )}

          <div 
            ref={mapContainerRef} 
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              borderRadius: '1rem'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Map;