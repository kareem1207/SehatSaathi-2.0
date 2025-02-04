'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaUserMd, FaHandHoldingMedical } from 'react-icons/fa';
import { MdHealthAndSafety, MdGroups } from 'react-icons/md';

const AboutPage = () => {
    const features = [
        { icon: <FaHeartbeat />, title: "Health First", description: "Putting your health as our top priority" },
        { icon: <FaUserMd />, title: "Expert Team", description: "Qualified healthcare professionals" },
        { icon: <MdHealthAndSafety />, title: "24/7 Support", description: "Round-the-clock medical assistance" },
        { icon: <FaHandHoldingMedical />, title: "Quality Care", description: "Best-in-class medical services" }
    ];

    const stats = [
        { count: "10K+", label: "Happy Patients" },
        { count: "100+", label: "Medical Experts" },
        { count: "50+", label: "Medical Centers" },
        { count: "15+", label: "Years Experience" }
    ];

    return (
        <>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500"
            >
                <div className="text-center text-white z-10">
                    <motion.h1 
                        initial={{ y: 20 }} 
                        animate={{ y: 0 }}
                        className="text-5xl font-bold mb-4"
                    >
                        About Sehat Saathi
                    </motion.h1>
                    <p className="text-xl">Your Trusted Healthcare Companion</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                              className="fill-white dark:fill-black"></path>
                    </svg>
                </div>
            </motion.div>

            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-6 ">Our Mission</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            At Sehat Saathi, we're committed to revolutionizing healthcare access through innovative technology and personalized care solutions. Our mission is to make quality healthcare accessible to everyone, anywhere, anytime.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow dark:bg-black"
                            >
                                <div className="text-4xl text-blue-600 mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white ">
                        <div className="grid md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-4xl font-bold mb-2">{stat.count}</div>
                                    <div className="text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto max-w-6xl px-4">
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="grid md:grid-cols-2 gap-12 items-center"
                    >
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
                            <ul className="space-y-4">
                                {[
                                    "24/7 Medical Support",
                                    "Experienced Healthcare Professionals",
                                    "State-of-the-art Technology",
                                    "Personalized Care Plans"
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ x: -50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.7 + index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <img 
                                src="/about-image.jpg" 
                                alt="Healthcare professionals" 
                                className="rounded-lg shadow-xl"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg">
                                <MdGroups className="text-4xl" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="container mx-auto max-w-6xl px-4">
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="grid md:grid-cols-2 gap-16 items-center"
                    >
                        <div>
                            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Technologies Used
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                Powered by industry-leading technologies to deliver the best healthcare experience
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-6 relative">
                            {[
                                { src: "/Technologies/azure.png", alt: "Azure", title: "Microsoft Azure" },
                                { src: "/Technologies/react.png", alt: "React", title: "React.js" },
                                { src: "/Technologies/nextjs.png", alt: "Next.js", title: "Next.js" },
                                { src: "/Technologies/tailwind.png", alt: "Tailwind", title: "Tailwind CSS" },
                                { src: "/Technologies/github.png", alt: "GitHub", title: "GitHub" },
                                { src: "/Technologies/vercel.png", alt: "Vercel", title: "Vercel" },
                            ].map((tech, index) => (
                                <motion.div
                                    key={tech.alt}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 * index }}
                                    className="group relative"
                                >
                                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                                        <img 
                                            src={tech.src} 
                                            alt={tech.alt}
                                            className="w-16 h-16 object-contain mx-auto mb-4"
                                        />
                                        <p className="text-center text-sm font-medium text-gray-600 dark:text-gray-300">
                                            {tech.title}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
                            <div className="absolute -z-10 -top-8 -left-8 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;