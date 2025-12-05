"use client";
import { motion } from "framer-motion";

const items = [
    { id: "0", cover: "/services-img-(1).jpg", link: "#", img: "/services-img-(1).jpg", title: 'Web Design', desc: 'Modern and responsive web interfaces that captivate users. We create stunning websites that work seamlessly across all devices, ensuring your brand stands out in the digital landscape.', type: 'discount' },
    { id: "2", cover: "/services-img-(1).webp", link: "#", img: "/services-img-(1).webp", title: 'UI/UX Design', desc: 'User-centered design approach that prioritizes experience. We craft intuitive interfaces that delight users and drive engagement through thoughtful design decisions.', type: 'sign' },
    { id: "10", cover: "/services-img-(2).webp", link: "#", img: "/services-img-(2).webp", title: '24/7 Support', desc: 'Round-the-clock customer support and maintenance. We are always here to help you with any issues, updates, or questions to keep your digital presence running smoothly.', type: 'logo' },
    { id: "3", cover: "/services-img-(2).jpg", link: "#", img: "/services-img-(2).jpg", title: 'Development', desc: 'Cutting-edge web development using the latest technologies. We build robust, scalable applications that perform flawlessly and exceed expectations.', type: 'app' },
    { id: "4", cover: "/services-img-(2).webp", link: "#", img: "/services-img-(2).webp", title: 'Mobile Apps', desc: 'Native and hybrid mobile solutions for iOS and Android. We create powerful mobile experiences that keep users engaged and coming back.', type: 'pattern' },
    { id: "5", cover: "/services-img-(3).webp", link: "#", img: "/services-img-(3).webp", title: 'E-Commerce', desc: 'Powerful online stores that drive sales and growth. From product catalogs to secure checkout, we build complete e-commerce solutions that convert visitors into customers.', type: 'billboard' },
    { id: "1", cover: "/services-img-(1).png", link: "#", img: "/services-img-(1).png", title: 'Branding', desc: 'Unique brand identity solutions that tell your story. From logo design to complete brand guidelines, we help you create a memorable presence that resonates with your target audience.', type: 'font' },
    { id: "6", cover: "/services-img-(4).webp", link: "#", img: "/services-img-(4).webp", title: 'Digital Marketing', desc: 'Strategic digital marketing campaigns that deliver results. We help you reach your audience through SEO, social media, content marketing, and paid advertising.', type: 'bottle' },
    { id: "7", cover: "/services-img-(5).webp", link: "#", img: "/services-img-(5).webp", title: 'SEO Optimization', desc: 'Search engine optimization that boosts your visibility. We implement proven strategies to improve your rankings and drive organic traffic to your website.', type: 'bottle' },
    { id: "8", cover: "/services-img-(6).webp", link: "#", img: "/services-img-(6).webp", title: 'Analytics & Insights', desc: 'Data-driven insights that inform better decisions. We track, analyze, and report on key metrics to help you understand your audience and optimize performance.', type: 'slogan' },
    { id: "9", cover: "/services-img-(7).webp", link: "#", img: "/services-img-(7).webp", title: 'Tech Consulting', desc: 'Expert technology consulting for your business needs. We provide strategic guidance to help you leverage technology effectively and stay ahead of the competition.', type: 'logo' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

const ServiceGallery = () => {
    return (
        <div className="flex flex-col justify-center bg-[#252525] items-center min-h-screen  p-20">
            <div className="max-w-[90%] sm:max-w-[70%] text-center py-10">
                <div className="flex items-center justify-center gap-5 my-6">
                    <div className="h-px w-16 bg-[#898989] opacity-40"></div>
                    <span
                        className="text-white text-2xl font-[Charm-Regular] italic tracking-wide"
                        style={{ wordSpacing: "3px" }}
                    >
                        show cases
                    </span>
                    <div className="h-px w-16 bg-[#898989] opacity-40"></div>
                </div>

                <h3 className="text-5xl sm:text-6xl lg:text-8xl leading-tight font-light">
                    <span className="text-white">Our Creative </span>
                    <span className="text-[#898989]">Work</span>
                </h3>
            </div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 w-full max-w-[1550px]"
                style={{ gridAutoRows: 'minmax(200px, auto)' }}
            >
                {items.map((item, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className={`
                            relative group border-[1px] border-gray-300 flex flex-col justify-between rounded-xl overflow-hidden border border-white/10 bg-neutral-900/50 backdrop-blur-sm
                            ${item.type === 'billboard' ? 'lg:col-span-2 lg:row-span-2' : ''}
                            ${item.type === 'logo' ? 'lg:col-span-2' : ''}
                            min-h-[200px]
                        `}
                    > <div className="absolute inset-0 bg-black/70 w-full h-full z-10 group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
                        <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                            {/* Cover Image (Visible initially) */}
                            <img
                                src={item.cover}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                            />

                            {/* Hover Image (Visible on hover) */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                            />

                            {/* Dark Overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                        </div>

                        <a className="absolute inset-0 z-10 group-hover:opacity-100 opacity-0 transition-opacity duration-300   transform translate-y-0 transition-transform duration-300 group-hover:-translate-y-1    ">
                            <div className="absolute inset-0 flex flex-col justify-start p-6 opacity-100 transition-all duration-300">
                                <h3 className="text-white text-xl md:text-3xl mb-2 font-bold text-shadow-xs text-shadow-white transform translate-y-0 transition-transform duration-300 group-hover:-translate-y-1">
                                    {item.title}
                                </h3>
                                <p className="text-gray-200 line-clamp-2 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                    {item.desc}
                                </p>
                            </div>
                        </a>
                    </motion.div>
                ))}
            </motion.div>

        </div>
    );
};

export default ServiceGallery;