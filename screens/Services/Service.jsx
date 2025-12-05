"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHero from './ServiceHero';
import ServiceCards from './ServiceCards';
import ServiceGallery from './ServiceGallery';

const Service = () => {
    return (
        <>
            <Navbar />
            <ServiceHero />
            <ServiceGallery/>
            <ServiceCards />
            <Footer />
        </>
    );
};

export default Service;