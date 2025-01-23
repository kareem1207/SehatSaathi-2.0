"use client";

import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const DarkMode = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, systemTheme } = useTheme();
    
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-5 h-5" />; // Placeholder to prevent layout shift
    }

    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <button
            aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        >
            {currentTheme === "dark" ? (
                <FaSun className="w-5 h-5 text-yellow-500 hover:text-yellow-600 transition-colors duration-200" />
            ) : (
                <FaMoon className="w-5 h-5 text-gray-700 hover:text-gray-800 transition-colors duration-200" />
            )}
        </button>
    );
};