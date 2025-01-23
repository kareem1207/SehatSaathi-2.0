'use client'

import { motion } from 'framer-motion'
import { FaArrowRight, FaHeartbeat } from 'react-icons/fa'

export const HeroCard = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm font-semibold tracking-wide">
              Your Health Companion
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
              Welcome to
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Sehat</span>
              <span className="text-amber-500"> Saathi</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Healthcare re-imagined for the modern age. Get 24/7 access to medical expertise, personalized care plans, and instant health insights at your fingertips.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold flex items-center gap-2 transition-all transform hover:scale-105">
                Get Started <FaArrowRight />
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-white rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-blue-900 transition-all">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
                <p className="text-gray-600 dark:text-gray-400">Support</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">100+</h3>
                <p className="text-gray-600 dark:text-gray-400">Experts</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">50k+</h3>
                <p className="text-gray-600 dark:text-gray-400">Users</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <img
              src="/main 3.jpg"
              alt="Healthcare Professional"
              className="w-full h-auto rounded-full shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}