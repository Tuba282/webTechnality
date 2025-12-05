"use client";

import { useEffect, useState } from "react";
import { getServiceBySlug } from "./data/servicesData";
import HeroBanner from "./sections/HeroBanner";
import DigitalExcellence from "./sections/DigitalExcellence";
import ValueDelivery from "./sections/ValueDelivery";
import HowWeWork from "./sections/HowWeWork";
import ToolsOfTrade from "./sections/ToolsOfTrade";
import PricingSection from "./sections/PricingSection";
import FAQSection from "./sections/FAQSection";
import FeatureGrid from '@/components/FeatureGrid';
import { Faq } from '@/components/Faq';
import CTASection from "./sections/CTASection";
import Loader from "@/components/loader";
import PricingCardDark from "@/components/PricingCardDark";
import CTASection1 from "./sections/CTASection1";

export default function ServiceDetailPage({ slug }) {
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch service data based on slug
        const serviceData = getServiceBySlug(slug);
        setService(serviceData);
        setLoading(false);
    }, [slug]);

    // Loading state
    if (loading) {
        return (
            <Loader />
        );
    }

    // 404 - Service not found
    if (!service) {
        return (
            <Loader />
        );
    }

    // Render service detail page with all sections
    return (
        <div className="w-full">
            {/* Hero Banner */}
            <HeroBanner data={service.hero} />

            {/* Digital Excellence */}
            <DigitalExcellence data={service.digitalExcellence} />

            {/* Value Delivery */}
            <ValueDelivery data={service.valueDelivery} />

            <HowWeWork data={service.howWeWork} />

            <ToolsOfTrade data={service.toolsOfTrade} />

            <PricingCardDark />

            <Faq />
            <br /><br />
            <CTASection data={service.cta} />

            <FeatureGrid />

        </div>
    );
}
