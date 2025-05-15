'use client'

import Footer from '@/components/Footer/Footer';
import Menu from '@/components/Header/Menu/Menu';
import TopNav from '@/components/Header/TopNav/TopNav';
import Partner from '@/components/Partner/Partner';
import AboutSection from '@/components/Section/AboutSection';
import Breadcrumb from '@/components/Section/Breadcrumb';
import Counter from '@/components/Section/Counter';
import Service from '@/components/Service/Service';
import React, { useState } from 'react'; 
import * as Icon from '@phosphor-icons/react/dist/ssr'
import { API_BASE_URL } from '@/config/config';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        message: '' 
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.subject) errors.subject = 'Subject is required';
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }
        if (!formData.message) errors.message = 'Message is required';
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setIsSubmitting(true);
        setSuccessMessage('');
        setErrorMessage('');

        try {
            const response = await fetch(`${API_BASE_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error ? JSON.stringify(errorData.errors) : 'Something went wrong');
            }

            setSuccessMessage('Message sent successfully');
            setFormData({ name: '', subject: '', email: '', message: '' });
            setFormErrors({});

        } catch (error) {
            setErrorMessage('Failed to send message! Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="overflow-x-hidden bg-gradient-to-b from-black to-gray-800">
            <header id="header">
                <TopNav />
                <Menu />
            </header>

            <main className="content">
                <Breadcrumb link="Contact Us" img="/images/header.webp" title="Contact Us" desc="Get In touch with us" />

                <div className="form-contact lg:py-[100px] sm:py-16 py-10">
                    <div className="container flex items-center justify-center">
                        <div className="xm:w-5/6 w-full flex max-lg:flex-col xl:items-center gap-y-8 mr-4 ml-4">
                            <div className="w-full xl:w-2/5">
                                <div className="infor bg-blue-500 rounded-xl p-10 hover:bg-blue-600 transition-all duration-300">
                                    <div className="group transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                        <div className="heading5 text-white flex items-center gap-2">
                                            <Icon.Handshake weight="bold" className="text-white group-hover:text-yellow-300 transition duration-300" />
                                            <span className="transition-all duration-300 group-hover:text-yellow-300">Get in Touch</span>
                                        </div>
                                        <div className="body3 text-white mt-3 transition-all duration-300 group-hover:text-slate-100 group-hover:tracking-wide">
                                            We will get back to you soon...
                                        </div>
                                    </div>

                                    <div className="list-social flex flex-wrap items-center gap-3 md:mt-10 mt-6">
                                        <a className="item rounded-full w-12 h-12 flex items-center justify-center bg-slate-200 hover:bg-blue-500 transition-all duration-200" href="https://facebook.com/" target="_blank">
                                            <i className="icon-facebook text-black"></i>
                                        </a>

                                        <a className="item rounded-full w-12 h-12 flex items-center justify-center bg-slate-200 hover:bg-blue-500 transition-all duration-200" href="https://linkedin.com/" target="_blank">
                                            <i className="icon-in text-black"></i>
                                        </a>

                                        <a className="item rounded-full w-12 h-12 flex items-center justify-center bg-slate-200 hover:bg-blue-500 transition-all duration-200" href="https://twitter.com/" target="_blank">
                                            <i className="icon-twitter text-black"></i>
                                        </a>

                                        <a className="item rounded-full w-12 h-12 flex items-center justify-center bg-slate-200 hover:bg-blue-500 transition-all duration-200" href="https://youtube.com/" target="_blank">
                                            <i className="icon-youtube text-black"></i>
                                        </a>
                                    </div>

                                    <div className="list-more-infor md:mt-10 mt-6">
                                        <div className="item flex items-center gap-3">
                                            <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                                                <Icon.Clock weight="bold" className="text-black text-2xl" />
                                            </div>
                                            <div className="line-y"></div>
                                            <div className="text-button normal-case text-white">8AM - 6PM</div>
                                        </div>

                                        <div className="item flex items-center gap-3 mt-5">
                                            <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                                                <Icon.Phone weight="bold" className="text-black text-2xl" />
                                            </div>
                                            <div className="line-y"></div>
                                            <div className="text-button normal-case text-white">454-454-545</div>
                                        </div>

                                        <div className="item flex items-center gap-3 mt-5">
                                            <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                                                <Icon.EnvelopeSimple weight="bold" className="text-black text-2xl" />
                                            </div>
                                            <div className="line-y"></div>
                                            <div className="text-button normal-case text-white">support@easylearningbd.com</div>
                                        </div>

                                        <div className="item flex items-center gap-3 mt-5">
                                            <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                                                <Icon.MapPin weight="bold" className="text-black text-2xl" />
                                            </div>
                                            <div className="line-y"></div>
                                            <div className="text-button normal-case text-white">57 R, India, USA</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full xl:w-3/5 xl:pl-20">
                                <form onSubmit={handleSubmit} className="form-block flex flex-col justify-between gap-5">
                                    <div className="heading">
                                        <div className="heading5">Request a message</div>
                                        <div className="body3 text-secondary mt-2">
                                            We will get back to you within 24 hours.
                                        </div>
                                    </div>

                                    {successMessage && <p className="text-green-800">{successMessage}</p>}
                                    {errorMessage && <p className="text-red-800">{errorMessage}</p>}

                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div className="w-full">
                                            <label htmlFor="name" className="text-secondary">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Name"
                                                className="w-full bg-slate-100 text-secondary caption1 px-4 py-3 rounded-lg"
                                            />
                                            {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
                                        </div>

                                        <div className="w-full">
                                            <label htmlFor="subject" className="text-secondary">Subject</label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="Subject"
                                                className="w-full bg-slate-100 text-secondary caption1 px-4 py-3 rounded-lg"
                                            />
                                            {formErrors.subject && <p className="text-red-500 text-sm">{formErrors.subject}</p>}
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <label htmlFor="email" className="text-secondary">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-slate-100 text-secondary caption1 px-4 py-3 rounded-lg"
                                        />
                                        {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                                    </div>

                                    <div className="w-full">
                                        <label htmlFor="message" className="text-secondary">Message</label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Your Message"
                                            className="w-full bg-slate-100 text-secondary caption1 px-4 py-3 rounded-lg"
                                        />
                                        {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
                                    </div>

                                    <div className="w-full">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-blue-600 text-white py-3 px-5 rounded-lg transition-all duration-300 hover:bg-blue-500 w-full"
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <Partner />
                <AboutSection />
                <Counter />
                <Service />
            </main>

            <footer id="footer">
                <Footer />
            </footer>
        </div>
    );
}

export default ContactPage;
