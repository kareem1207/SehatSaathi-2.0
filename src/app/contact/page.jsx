'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    MdLocationOn, 
    MdPhone, 
    MdEmail, 
    MdMessage, 
    MdSend,
    MdAccessTime,
    MdPerson,
    MdSubject
} from 'react-icons/md';
import { FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import   Map   from '@/Components/Map';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', subject: '', message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return <>
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500"
        >
            <div className="container text-center text-white z-10">
                <motion.div
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <RiCustomerService2Fill className="text-6xl mx-auto mb-4" />
                    <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl">We're here to help 24/7</p>
                </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                          className="fill-white dark:fill-black"></path>
                </svg>
            </div>
        </motion.section>

        <section className="py-1">
            <div className="container mx-auto px-4   ">
                <div className="grid md:grid-cols-2 gap-12 ">
                    <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-lg shadow-xl p-8 dark:bg-black">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 dark:text-white">
                            <MdMessage className="text-blue-600 " /> Get in Touch
                        </h2>
                        <div className="space-y-6">
                            <div className="flex items-center hover:transform hover:scale-105 transition-transform">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                    <MdLocationOn className="text-2xl text-blue-600" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="font-semibold">Location</h3>
                                    <p className="text-gray-600">Telangana, India</p>
                                </div>
                            </div>
                            <div className="flex items-center hover:transform hover:scale-105 transition-transform">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                    <MdPhone className="text-2xl text-blue-600" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="font-semibold">Phone</h3>
                                    <p className="text-gray-600">+91 123 456 7890</p>
                                </div>
                            </div>
                            <div className="flex items-center hover:transform hover:scale-105 transition-transform">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                    <MdEmail className="text-2xl text-blue-600" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="font-semibold">Email</h3>
                                    <p className="text-gray-600">support@sehatsaathi.com</p>
                                </div>
                            </div>
                            <div className="flex items-center hover:transform hover:scale-105 transition-transform">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                    <MdAccessTime className="text-2xl text-blue-600" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="font-semibold">Working Hours</h3>
                                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                            
                            {/* Social Media Icons */}
                            <div className="flex gap-4 mt-6 justify-center">
                                {[
                                    { icon: <FaWhatsapp />, color: 'green' },
                                    { icon: <FaFacebook />, color: 'blue' },
                                    { icon: <FaTwitter />, color: 'sky' },
                                    { icon: <FaLinkedin />, color: 'blue' }
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href="#"
                                        whileHover={{ scale: 1.2 }}
                                        className={`w-10 h-10 rounded-full bg-${social.color}-100 flex items-center justify-center text-${social.color}-600 hover:bg-${social.color}-200 transition-colors`}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-lg shadow-xl p-8 dark:bg-black">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative">
                                <MdPerson className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input 
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full pl-10 px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 transition"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input 
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full pl-10 px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 transition"
                                    required
                                />
                            </div>                            <div className="relative">
                                <MdSubject className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input 
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full pl-10 px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 transition"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <MdMessage className="absolute left-3 top-4 text-gray-400" />
                                <textarea 
                                    placeholder="Your Message"
                                    rows="4"
                                    className="w-full pl-10 px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 transition"
                                    required
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2"
                            >
                                <MdSend className="text-xl" /> Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>

        <div className="relative h-[400px]">
            <Map />
            <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
                <h3 className="font-bold">Visit Us</h3>
                <p className="text-gray-600">Telangana, India</p>
            </div>
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-8 right-8 flex flex-col gap-4">
            <motion.a 
                href="tel:+911234567890"
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            >
                <MdPhone className="text-white text-2xl" />
            </motion.a>
            <motion.a 
                href="https://wa.me/911234567890"
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition-colors"
            >
                <FaWhatsapp className="text-white text-2xl" />
            </motion.a>
        </div>
    </>;
}

export default ContactPage;