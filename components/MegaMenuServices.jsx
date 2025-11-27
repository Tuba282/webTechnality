"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
    FaDraftingCompass, FaGlobe, FaTrademark, FaShareAlt,
    FaPalette, FaLaptopCode, FaServer, FaCogs, FaPuzzlePiece, FaDatabase, FaCloudUploadAlt, FaBug, FaSearch, FaBullseye, FaRegNewspaper,
    FaEnvelopeOpenText, FaApple, FaAndroid, FaTabletAlt, FaMobile, FaVial, FaFileAlt, FaBlog, FaPen, FaFileCode, FaRobot,
} from "react-icons/fa";

const data = {
    Design: [
        { title: "UI/UX Design", desc: "Create intuitive user experiences.", link: "/ui-ux-design", icon: FaDraftingCompass },
        { title: "Web Design", desc: "Craft visually appealing websites.", link: "/web-design", icon: FaGlobe },
        { title: "Brand Design", desc: "Build memorable brand identities.", link: "/brand-design", icon: FaTrademark },
        { title: "Graphic Design", desc: "Design impactful visual content.", link: "/graphic-design", icon: FaPalette },
    ],

    AI_Solutions: [
        { title: "AI Integration ", desc: "Implement AI solutions effectively.", link: "/ai", icon: FaRobot },
    ],

    ContentWriting: [
        { title: "SEO Content", desc: "Write content optimized for search engines.", link: "/seo-content", icon: FaFileAlt },
        { title: "Blog Writing", desc: "Create engaging blog posts.", link: "/blog", icon: FaBlog },
        { title: "Copywriting", desc: "Craft persuasive marketing copy.", link: "/copywriting", icon: FaPen },
        { title: "Technical Writing", desc: "Produce clear technical documents.", link: "/technical", icon: FaFileCode },
    ],

    DigitalMarketing: [
        { title: "SEO", desc: "Optimize website ranking.", link: "/seo", icon: FaSearch },
        { title: "Paid Ads", desc: "Run targeted ad campaigns.", link: "/ads", icon: FaBullseye },
        { title: "Content Marketing", desc: "Engage audiences with content.", link: "/content", icon: FaRegNewspaper },
        { title: "Social Media", desc: "Grow presence on social platforms.", link: "/social", icon: FaShareAlt },
        { title: "Email Marketing", desc: "Reach clients via email.", link: "/email", icon: FaEnvelopeOpenText },
    ],

    Web_Development: [
        { title: "Frontend", desc: "Develop interactive web interfaces.", link: "/frontend", icon: FaLaptopCode },
        { title: "Backend", desc: "Implement robust server systems.", link: "/backend", icon: FaServer },
        { title: "Fullstack", desc: "Handle complete web solutions.", link: "/fullstack", icon: FaCogs },
        { title: "API Integration", desc: "Integrate APIs efficiently.", link: "/api", icon: FaPuzzlePiece },
        { title: "Database", desc: "Manage data effectively.", link: "/database", icon: FaDatabase },
        { title: "DevOps", desc: "Automate deployment pipelines.", link: "/devops", icon: FaCloudUploadAlt },
        { title: "Testing", desc: "Ensure reliable software quality.", link: "/testing", icon: FaBug },
    ],

    Mobile_Development: [
        { title: "iOS App", desc: "Build apps for Apple devices.", link: "/ios", icon: FaApple },
        { title: "Android App", desc: "Develop apps for Android.", link: "/android", icon: FaAndroid },
        { title: "Cross Platform", desc: "Deploy apps on multiple platforms.", link: "/cross", icon: FaTabletAlt },
        { title: "App Design", desc: "Design user-friendly mobile apps.", link: "/app-design", icon: FaMobile },
        { title: "App Testing", desc: "Test apps for smooth performance.", link: "/app-testing", icon: FaVial },
    ],
};

export default function MegaMenuServices() {
    const [activeTab, setActiveTab] = useState("Design");
    const [hoverItem, setHoverItem] = useState(null);
    const tabs = Object.keys(data);

    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 py-5">
            {/* LEFT IMAGE */}
            <div className="rounded-xl overflow-hidden lg:p-5 p-3 bg-[#9e9c9c]">
                <h2 className="md:text-4xl text-[20px] font-bold uppercase mb-2">
                    Explore Wide Range of Services Offered by WebTechnality
                </h2>
                <img
                    src="/megaservice.jpg"
                    alt="services"
                    className="w-full lg:h-[350px] h-full rounded shadow-md object-cover"
                />
            </div>

            {/* CENTER BUTTONS */}
            <div className="flex flex-col lg:w-[55%] w-full lg:gap-4 gap-2 mt-4">
                {tabs.map((t) => (
                    <button
                        key={t}
                        // ✅ Mobile: click to change tab
                        onClick={() => setActiveTab(t)}
                        // ✅ Desktop: hover to change tab
                        onMouseEnter={() => window.innerWidth >= 1024 && setActiveTab(t)}
                        className={`but lg:py-3 py-2 px-10 rounded-full border border-[#838383] text-left transition-all
              ${activeTab === t ? "bg-[#838383] text-white" : "bg-white text-black"}`}
                    >
                        {t.replace(/([A-Z])/g, " $1")}
                    </button>
                ))}
            </div>

            {/* RIGHT SIDE CONTENT */}
            {/* Desktop: show description */}
            <div className="hidden lg:block">
                <div className="mb-2 text-[20px] text-[#838383] font-semibold">Services</div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {data[activeTab].map((item) => {
                            const Icon = item.icon;
                            const isHover = hoverItem === item.title;

                            return (
                                <motion.div
                                    key={item.title}
                                    onMouseEnter={() => setHoverItem(item.title)}
                                    onMouseLeave={() => setHoverItem(null)}
                                    onClick={() => (window.location.href = item.link)}
                                    className={`cursor-pointer p-4 rounded-2xl flex items-start gap-3 transition-all ${isHover ? "bg-white text-black shadow-lg" : "bg-white text-black"}`}>

                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${isHover ? "bg-[#838383] text-gray-100" : "bg-gray-100 text-[#838383]"}`}>
                                        <Icon size={23} />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-[15px]">{item.title}</h3>
                                        <p className="hidden lg:block text-[13px] mt-1 text-gray-600">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Mobile: only headings */}
            <div className="block lg:hidden mt-4">
                <div className="mb-2 text-[18px] text-gray-500 font-semibold">Services</div>
                <div className="flex flex-col gap-3">
                    {data[activeTab].map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.title}
                                onClick={() => (window.location.href = item.link)}
                                className="flex items-center gap-3 p-3 rounded-lg bg-gray-500 text-white transition-all"
                            >
                                <Icon size={20} />
                                <span className="font-semibold">{item.title}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}