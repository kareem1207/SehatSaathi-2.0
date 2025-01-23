'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaRobot, FaTimes, FaExpandAlt, FaCompress, FaInfoCircle } from 'react-icons/fa'
import { useIsMobile } from "@/Components/Mobile"

export const Chatbot = ({ isFullPage = false }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [showDisclaimer, setShowDisclaimer] = useState(false)
    const isMobile = useIsMobile()

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000)
        return () => clearTimeout(timer)
    }, [])

    // Return null for mobile popup version
    if (isMobile && !isFullPage) return null;

    // Determine container classes
    const containerClasses = isFullPage 
        ? 'w-full min-h-screen'
        : `fixed ${isFullscreen 
            ? 'top-0 left-0 right-0 bottom-0 w-full h-screen' 
            : 'bottom-4 right-4 w-96 h-[600px]'}`

    if (isMobile && !isFullPage) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${containerClasses} bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 z-50`}
        >
            <div className="flex items-center justify-between p-4 bg-blue-600 text-white">
                <div className="flex items-center gap-2">
                    <FaRobot className="text-2xl" />
                    <h2 className="font-semibold">SehatSaathi Bot</h2>
                </div>
                {/* Only show controls for desktop popup version */}
                {!isFullPage && !isMobile && (
                    <div className="flex gap-2">
                        <button
                            onClick={() => setShowDisclaimer(!showDisclaimer)}
                            className="p-2 hover:bg-blue-700 rounded-full transition-colors"
                            title="Show Disclaimer"
                        >
                            <FaInfoCircle />
                        </button>
                        <button
                            onClick={() => setIsFullscreen(!isFullscreen)}
                            className="p-2 hover:bg-blue-700 rounded-full transition-colors"
                        >
                            {isFullscreen ? <FaCompress /> : <FaExpandAlt />}
                        </button>
                    </div>
                )}
            </div>
            {/* Disclaimer Toast */}
            <AnimatePresence>
                {showDisclaimer && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-16 right-4 left-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow-lg z-50"
                    >
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <FaInfoCircle className="text-yellow-400" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-yellow-700">
                                    Sometimes health bot can give errors. It is suggested to contact your local doctors if you feel like the results are not satisfactory.
                                </p>
                            </div>
                            <button
                                onClick={() => setShowDisclaimer(false)}
                                className="ml-auto pl-3"
                            >
                                <FaTimes className="text-yellow-400" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Loading Spinner */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-900">
                    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                </div>
            )}

            {/* Chat Interface */}
            <div className={`w-full ${isFullscreen ? 'h-[calc(100vh-64px)]' : isFullPage ? 'h-[calc(100vh-64px)]' : 'h-[536px]'}`}>
                <iframe
                    src={process.env.CHATBOT_URL}  
                    className="w-full h-full border-none"
                    style={{ height: isFullscreen ? 'calc(100vh - 64px)' : '100%' }}
                    title="SehatSaathi ChatBot"
                />
            </div>
        </motion.div>
    )
}