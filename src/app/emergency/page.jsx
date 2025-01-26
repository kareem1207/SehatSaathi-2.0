"use client";

import { useState } from "react";

const EmergencyPage = () => {
    const handleCall = (number) => {
        window.location.href = `tel:${number}`;
    };
    
    const [number,setNumber]=useState();

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>
                Testing
            </h1>
            <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)} />
            <button onClick={()=>handleCall(number)}>Call</button>
            <h1>Emergency</h1>
            <p>If you are in an emergency, please contact the numbers below immediately.</p>
            <button 
                onClick={() => handleCall(number)} 
                style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
            >
                Call 100
            </button>
            <button 
                onClick={() => handleCall(number)} 
                style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
            >
                Call 108
            </button>
        </div>
    );
};

export default EmergencyPage;