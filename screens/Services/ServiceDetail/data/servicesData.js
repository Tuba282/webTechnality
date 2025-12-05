
export const servicesData = [
    {
        slug: 'web-development',
        category: 'WEB DEVELOPMENT',

        hero: {
            title: 'Web Development',
            subtitle: 'Building Interactive Experiences',
            description: 'Transform your vision into stunning, high-performance web applications that captivate users and drive results.',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop',
            cta: {
                text: 'Start Your Project',
                link: '/contact'
            }
        },

        digitalExcellence: {
            title: 'Redefining Digital Excellence',
            description: 'The frontend is what your users see, touch, and interact with. It needs to be flawless. We specialize in building state-of-the-art frontend architectures using React, Next.js, and Tailwind CSS. We obsess over performance metrics like Core Web Vitals, ensuring your site loads instantly and runs smoothly at 60fps. Our code is clean, modular, and scalable, making future updates a breeze.',
            features: [
                {
                    icon: 'FaBolt',
                    title: 'Lightning Fast',
                    description: 'Optimized for Core Web Vitals and 60fps performance'
                },
                {
                    icon: 'FaPalette',
                    title: 'Pixel Perfect',
                    description: 'Designs that look stunning on every device'
                },
                {
                    icon: 'FaUniversalAccess',
                    title: 'Accessible',
                    description: 'WCAG compliant for all users'
                },
                {
                    icon: 'FaMobileAlt',
                    title: 'Responsive',
                    description: 'Seamless experience across all screen sizes'
                }
            ]
        },

        valueDelivery: {
            title: 'The Value We Deliver',
            subtitle: 'Tangible impact for your business',
            benefits: [
                {
                    icon: 'FaBolt',
                    title: 'Blazing Speed',
                    description: 'Sub-second load times that keep users engaged and boost conversions'
                },
                {
                    icon: 'FaSearch',
                    title: 'SEO Ready',
                    description: 'Server-side rendering and optimization for maximum visibility'
                },
                {
                    icon: 'FaChartLine',
                    title: 'Scalable',
                    description: 'Architecture that grows with your business needs'
                },
                {
                    icon: 'FaTools',
                    title: 'Maintainable',
                    description: 'Clean, documented code that\'s easy to update and extend'
                }
            ]
        },

        howWeWork: {
            title: 'How We Work',
            subtitle: 'Our proven process ensures transparency, efficiency, and exceptional results at every step',
            steps: [
                {
                    number: 1,
                    title: 'Plan',
                    description: 'We analyze requirements, define architecture, and create a detailed roadmap'
                },
                {
                    number: 2,
                    title: 'Code',
                    description: 'We build with best practices, clean code, and modern frameworks'
                },
                {
                    number: 3,
                    title: 'Test',
                    description: 'We ensure quality through comprehensive testing and optimization'
                },
                {
                    number: 4,
                    title: 'Deploy',
                    description: 'We launch your application with monitoring and support'
                }
            ]
        },

        toolsOfTrade: {
            title: 'Tools of the Trade',
            subtitle: 'We use the latest and most robust technologies to ensure your project is future-proof, scalable, and secure',
            categories: [
                {
                    name: 'Frontend Frameworks',
                    tools: [
                        { name: 'React', icon: 'FaReact' },
                        { name: 'Next.js', icon: 'SiNextdotjs' },
                        { name: 'Vue.js', icon: 'FaVuejs' },
                        { name: 'TypeScript', icon: 'SiTypescript' }
                    ]
                },
                {
                    name: 'Styling',
                    tools: [
                        { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
                        { name: 'CSS Modules', icon: 'FaCss3Alt' },
                        { name: 'Sass', icon: 'FaSass' },
                        { name: 'Styled Components', icon: 'SiStyledcomponents' }
                    ]
                },
                {
                    name: 'Animation',
                    tools: [
                        { name: 'Framer Motion', icon: 'SiFramer' },
                        { name: 'GSAP', icon: 'FaCode' },
                        { name: 'Three.js', icon: 'SiThreedotjs' },
                        { name: 'Lottie', icon: 'FaPlay' }
                    ]
                },
                {
                    name: 'Build Tools',
                    tools: [
                        { name: 'Vite', icon: 'SiVite' },
                        { name: 'Webpack', icon: 'SiWebpack' },
                        { name: 'Turbopack', icon: 'FaRocket' },
                        { name: 'ESBuild', icon: 'FaCog' }
                    ]
                }
            ]
        },

        pricing: {
            title: 'Invest in Your Growth',
            subtitle: 'Choose the perfect plan that aligns with your business goals. No hidden fees, just exceptional value',
            plans: [
                {
                    name: 'Standard',
                    price: '$2,999',
                    duration: 'per project',
                    description: 'Perfect for small to medium projects',
                    features: [
                        'Responsive Design',
                        'Up to 5 Pages',
                        'Basic SEO',
                        'Performance Optimization',
                        '30 Days Support',
                        'Source Code Included'
                    ],
                    highlighted: false
                },
                {
                    name: 'Professional',
                    price: '$5,999',
                    duration: 'per project',
                    description: 'Ideal for complex applications',
                    features: [
                        'Everything in Standard',
                        'Unlimited Pages',
                        'Advanced SEO',
                        'Custom Animations',
                        'API Integration',
                        '90 Days Support',
                        'Priority Updates'
                    ],
                    highlighted: true
                },
                {
                    name: 'Enterprise',
                    price: 'Custom',
                    duration: 'contact us',
                    description: 'For large-scale solutions',
                    features: [
                        'Everything in Professional',
                        'Custom Architecture',
                        'Dedicated Team',
                        'Advanced Analytics',
                        'Performance Monitoring',
                        '1 Year Support',
                        'White-Label Option'
                    ],
                    highlighted: false
                }
            ]
        },

        faqs: {
            title: 'Frequently Asked Questions',
            questions: [
                {
                    q: 'What technologies do you use for web development?',
                    a: 'We primarily use React, Next.js, and TypeScript for building modern web applications. We also leverage Tailwind CSS for styling and Framer Motion for animations.'
                },
                {
                    q: 'How long does a typical web project take?',
                    a: 'Project timelines vary based on complexity. A standard website takes 2-4 weeks, while complex applications can take 8-12 weeks. We provide detailed timelines during the planning phase.'
                },
                {
                    q: 'Do you provide ongoing support after launch?',
                    a: 'Yes! All our plans include post-launch support. Standard includes 30 days, Professional includes 90 days, and Enterprise includes 1 year of dedicated support.'
                },
                {
                    q: 'Can you work with existing designs?',
                    a: 'Absolutely! We can implement designs from Figma, Adobe XD, Sketch, or any other design tool. We ensure pixel-perfect implementation with responsive behavior.'
                },
                {
                    q: 'What about performance optimization?',
                    a: 'Performance is our priority. We optimize for Core Web Vitals, implement lazy loading, code splitting, and ensure your site achieves 90+ scores on Google PageSpeed Insights.'
                }
            ]
        },

        cta: {
            title: 'Ready to Transform Your Vision?',
            description: 'Let\'s build something extraordinary together. Get in touch and let\'s discuss how we can bring your ideas to life.',
            buttonText: 'Start Your Project',
            buttonLink: '/contact'
        }
    },

    {
        slug: 'ui-ux-design',
        category: 'UI/UX DESIGN',

        hero: {
            title: 'UI/UX Design',
            subtitle: 'Crafting Experiences That Convert',
            description: 'Design that doesn\'t just look good—it drives results. We create intuitive, beautiful interfaces that users love.',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop',
            cta: {
                text: 'Start Your Project',
                link: '/contact'
            }
        },

        digitalExcellence: {
            title: 'Redefining Digital Excellence',
            description: 'In today\'s digital landscape, a great product isn\'t just about functionality; it\'s about the experience. Our UI/UX design process goes beyond pixels. We dive deep into understanding your users, their pain points, and their motivations. By combining behavioral science with cutting-edge aesthetics, we craft digital experiences that are not only beautiful but also intuitive and conversion-driven.',
            features: [
                {
                    icon: 'FaBullseye',
                    title: 'User-Centered',
                    description: 'Designs based on real user research and behavior'
                },
                {
                    icon: 'FaGem',
                    title: 'Premium Quality',
                    description: 'Pixel-perfect interfaces that stand out'
                },
                {
                    icon: 'FaSyncAlt',
                    title: 'Iterative Process',
                    description: 'Continuous refinement based on feedback'
                },
                {
                    icon: 'FaChartBar',
                    title: 'Data-Driven',
                    description: 'Decisions backed by analytics and testing'
                }
            ]
        },

        valueDelivery: {
            title: 'The Value We Deliver',
            subtitle: 'Tangible impact for your business',
            benefits: [
                {
                    icon: 'FaChartLine',
                    title: 'Higher Conversion Rates',
                    description: 'Optimized user flows that turn visitors into customers'
                },
                {
                    icon: 'FaHeart',
                    title: 'Increased Retention',
                    description: 'Engaging experiences that keep users coming back'
                },
                {
                    icon: 'FaDollarSign',
                    title: 'Reduced Development Costs',
                    description: 'Clear designs that minimize revisions and rework'
                },
                {
                    icon: 'FaTrophy',
                    title: 'Brand Loyalty',
                    description: 'Memorable experiences that build lasting relationships'
                }
            ]
        },

        howWeWork: {
            title: 'How We Work',
            subtitle: 'Our proven process ensures transparency, efficiency, and exceptional results at every step',
            steps: [
                {
                    number: 1,
                    title: 'Discover',
                    description: 'Understanding your goals, users, and competitive landscape'
                },
                {
                    number: 2,
                    title: 'Define',
                    description: 'Creating user personas, journeys, and information architecture'
                },
                {
                    number: 3,
                    title: 'Design',
                    description: 'Crafting wireframes, prototypes, and high-fidelity designs'
                },
                {
                    number: 4,
                    title: 'Deliver',
                    description: 'Handing over pixel-perfect assets and design systems'
                }
            ]
        },

        toolsOfTrade: {
            title: 'Tools of the Trade',
            subtitle: 'We use industry-leading design tools to create exceptional experiences',
            categories: [
                {
                    name: 'Design Tools',
                    tools: [
                        { name: 'Figma', icon: 'SiFigma' },
                        { name: 'Adobe XD', icon: 'SiAdobexd' },
                        { name: 'Sketch', icon: 'SiSketch' },
                        { name: 'Framer', icon: 'SiFramer' }
                    ]
                },
                {
                    name: 'Prototyping',
                    tools: [
                        { name: 'Principle', icon: 'FaLayerGroup' },
                        { name: 'ProtoPie', icon: 'FaPuzzlePiece' },
                        { name: 'InVision', icon: 'SiInvision' },
                        { name: 'Marvel', icon: 'FaMagic' }
                    ]
                },
                {
                    name: 'Research',
                    tools: [
                        { name: 'Hotjar', icon: 'FaFire' },
                        { name: 'Maze', icon: 'FaRoute' },
                        { name: 'UserTesting', icon: 'FaUsers' },
                        { name: 'Optimal Workshop', icon: 'FaTools' }
                    ]
                },
                {
                    name: 'Collaboration',
                    tools: [
                        { name: 'Miro', icon: 'FaDrawPolygon' },
                        { name: 'FigJam', icon: 'SiFigma' },
                        { name: 'Notion', icon: 'SiNotion' },
                        { name: 'Slack', icon: 'FaSlack' }
                    ]
                }
            ]
        },

        pricing: {
            title: 'Invest in Your Growth',
            subtitle: 'Choose the perfect plan that aligns with your business goals',
            plans: [
                {
                    name: 'Standard',
                    price: '$1,999',
                    duration: 'per project',
                    description: 'Perfect for startups and small projects',
                    features: [
                        'User Research',
                        'Wireframes',
                        'High-Fidelity Designs',
                        'Up to 10 Screens',
                        'Basic Prototyping',
                        '2 Revision Rounds'
                    ],
                    highlighted: false
                },
                {
                    name: 'Professional',
                    price: '$4,999',
                    duration: 'per project',
                    description: 'Ideal for growing businesses',
                    features: [
                        'Everything in Standard',
                        'Advanced User Testing',
                        'Interactive Prototypes',
                        'Up to 30 Screens',
                        'Design System',
                        'Unlimited Revisions',
                        'Developer Handoff'
                    ],
                    highlighted: true
                },
                {
                    name: 'Enterprise',
                    price: 'Custom',
                    duration: 'contact us',
                    description: 'For complex applications',
                    features: [
                        'Everything in Professional',
                        'Unlimited Screens',
                        'Advanced Analytics',
                        'A/B Testing Strategy',
                        'Dedicated Designer',
                        'Ongoing Support',
                        'Brand Guidelines'
                    ],
                    highlighted: false
                }
            ]
        },

        faqs: {
            title: 'Frequently Asked Questions',
            questions: [
                {
                    q: 'What\'s the difference between UI and UX design?',
                    a: 'UI (User Interface) focuses on the visual elements—colors, typography, buttons. UX (User Experience) focuses on the overall feel and usability. We excel at both, ensuring your product is beautiful AND functional.'
                },
                {
                    q: 'Do you conduct user research?',
                    a: 'Yes! User research is fundamental to our process. We conduct interviews, surveys, and usability testing to ensure our designs meet real user needs.'
                },
                {
                    q: 'Can you redesign an existing product?',
                    a: 'Absolutely! We specialize in product redesigns. We analyze your current product, identify pain points, and create improved designs that enhance user satisfaction.'
                },
                {
                    q: 'What deliverables do we receive?',
                    a: 'You\'ll receive high-fidelity designs, interactive prototypes, design system documentation, and developer-ready assets. Everything needed for seamless implementation.'
                },
                {
                    q: 'How do you measure design success?',
                    a: 'We track metrics like conversion rates, task completion time, user satisfaction scores, and engagement metrics. We believe in data-driven design decisions.'
                }
            ]
        },

        cta: {
            title: 'Ready to Transform Your Vision?',
            description: 'Let\'s create experiences that users love and that drive real business results.',
            buttonText: 'Start Your Project',
            buttonLink: '/contact'
        }
    },

    {
        slug: 'digital-marketing',
        category: 'DIGITAL MARKETING',

        hero: {
            title: 'Digital Marketing',
            subtitle: 'Amplify Your Brand Voice',
            description: 'Build a powerful digital presence that engages your audience and drives measurable business growth.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop',
            cta: {
                text: 'Start Your Campaign',
                link: '/contact'
            }
        },

        digitalExcellence: {
            title: 'Redefining Digital Excellence',
            description: 'Digital marketing isn\'t just about posting content—it\'s about building relationships, fostering communities, and driving conversions. We create data-driven marketing strategies that align with your business goals. From content creation to community management, we handle everything to ensure your brand stands out in the crowded digital landscape.',
            features: [
                {
                    icon: 'FaMobileAlt',
                    title: 'Multi-Platform',
                    description: 'Expertise across all major digital platforms'
                },
                {
                    icon: 'FaChartBar',
                    title: 'Analytics-Driven',
                    description: 'Decisions based on real performance data'
                },
                {
                    icon: 'FaPalette',
                    title: 'Creative Content',
                    description: 'Engaging content that stops the scroll'
                },
                {
                    icon: 'FaComments',
                    title: 'Community Focus',
                    description: 'Building authentic connections with your audience'
                }
            ]
        },

        valueDelivery: {
            title: 'The Value We Deliver',
            subtitle: 'Tangible impact for your business',
            benefits: [
                {
                    icon: 'FaChartLine',
                    title: 'Increased Engagement',
                    description: 'Higher likes, shares, comments, and meaningful interactions'
                },
                {
                    icon: 'FaUsers',
                    title: 'Audience Growth',
                    description: 'Organic follower growth with targeted strategies'
                },
                {
                    icon: 'FaDollarSign',
                    title: 'Better ROI',
                    description: 'Optimized ad spend and improved conversion rates'
                },
                {
                    icon: 'FaBullseye',
                    title: 'Brand Awareness',
                    description: 'Increased visibility and recognition in your market'
                }
            ]
        },

        howWeWork: {
            title: 'How We Work',
            subtitle: 'Our proven process ensures transparency, efficiency, and exceptional results',
            steps: [
                {
                    number: 1,
                    title: 'Strategy',
                    description: 'We analyze your audience, competitors, and define clear objectives'
                },
                {
                    number: 2,
                    title: 'Create',
                    description: 'We develop engaging content calendars and creative assets'
                },
                {
                    number: 3,
                    title: 'Engage',
                    description: 'We manage communities and respond to audience interactions'
                },
                {
                    number: 4,
                    title: 'Optimize',
                    description: 'We analyze performance and continuously improve results'
                }
            ]
        },

        toolsOfTrade: {
            title: 'Tools of the Trade',
            subtitle: 'We leverage powerful tools to maximize your digital marketing impact',
            categories: [
                {
                    name: 'Platforms',
                    tools: [
                        { name: 'Instagram', icon: 'FaInstagram' },
                        { name: 'Facebook', icon: 'FaFacebook' },
                        { name: 'Twitter/X', icon: 'FaTwitter' },
                        { name: 'LinkedIn', icon: 'FaLinkedin' }
                    ]
                },
                {
                    name: 'Management',
                    tools: [
                        { name: 'Hootsuite', icon: 'SiHootsuite' },
                        { name: 'Buffer', icon: 'SiBuffer' },
                        { name: 'Sprout Social', icon: 'FaSeedling' },
                        { name: 'Later', icon: 'FaCalendar' }
                    ]
                },
                {
                    name: 'Analytics',
                    tools: [
                        { name: 'Google Analytics', icon: 'SiGoogleanalytics' },
                        { name: 'Meta Business Suite', icon: 'FaChartBar' },
                        { name: 'Brandwatch', icon: 'FaEye' },
                        { name: 'Socialbakers', icon: 'FaBullseye' }
                    ]
                },
                {
                    name: 'Design',
                    tools: [
                        { name: 'Canva', icon: 'SiCanva' },
                        { name: 'Adobe Creative Suite', icon: 'SiAdobe' },
                        { name: 'Figma', icon: 'SiFigma' },
                        { name: 'CapCut', icon: 'FaVideo' }
                    ]
                }
            ]
        },

        pricing: {
            title: 'Invest in Your Growth',
            subtitle: 'Choose the perfect plan for your digital marketing needs',
            plans: [
                {
                    name: 'Starter',
                    price: '$999',
                    duration: 'per month',
                    description: 'Perfect for small businesses',
                    features: [
                        '2 Digital Platforms',
                        '12 Posts per Month',
                        'Basic Graphics',
                        'Community Management',
                        'Monthly Reports',
                        'Email Support'
                    ],
                    highlighted: false
                },
                {
                    name: 'Growth',
                    price: '$2,499',
                    duration: 'per month',
                    description: 'Ideal for growing brands',
                    features: [
                        '4 Digital Platforms',
                        '24 Posts per Month',
                        'Custom Graphics & Videos',
                        'Advanced Community Management',
                        'Paid Ad Management',
                        'Weekly Reports',
                        'Priority Support'
                    ],
                    highlighted: true
                },
                {
                    name: 'Enterprise',
                    price: 'Custom',
                    duration: 'contact us',
                    description: 'For established brands',
                    features: [
                        'All Platforms',
                        'Unlimited Posts',
                        'Premium Content Creation',
                        'Dedicated Account Manager',
                        'Advanced Analytics',
                        'Influencer Partnerships',
                        '24/7 Support'
                    ],
                    highlighted: false
                }
            ]
        },

        faqs: {
            title: 'Frequently Asked Questions',
            questions: [
                {
                    q: 'Which digital marketing platforms should my business use?',
                    a: 'It depends on your target audience and business goals. We conduct audience research to identify where your customers spend their time and recommend the most effective platforms for your brand.'
                },
                {
                    q: 'How often should we post content?',
                    a: 'Posting frequency varies by platform and industry. Generally, we recommend 3-5 posts per week on Instagram, daily on Twitter, and 2-3 times per week on LinkedIn. We create custom schedules based on your audience engagement patterns.'
                },
                {
                    q: 'Do you create the content or do we provide it?',
                    a: 'We handle complete content creation including graphics, videos, captions, and hashtags. However, we also welcome any content you\'d like to share and can incorporate it into the strategy.'
                },
                {
                    q: 'How do you measure marketing success?',
                    a: 'We track metrics like engagement rate, reach, follower growth, website traffic, and conversions. We provide detailed monthly reports showing performance against your specific business objectives.'
                },
                {
                    q: 'Can you help with paid advertising?',
                    a: 'Absolutely! Our Growth and Enterprise plans include paid ad management. We create, optimize, and manage campaigns across platforms to maximize your ROI.'
                }
            ]
        },

        cta: {
            title: 'Ready to Amplify Your Brand?',
            description: 'Let\'s build a digital presence that drives real business results.',
            buttonText: 'Start Your Campaign',
            buttonLink: '/contact'
        }
    },

    {
        slug: 'mobile-app-development',
        category: 'MOBILE APP DEVELOPMENT',

        hero: {
            title: 'Mobile App Development',
            subtitle: 'Native Apps for Modern Platforms',
            description: 'Build powerful, elegant mobile applications that leverage the full potential of iOS and Android ecosystems.',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&h=1080&fit=crop',
            cta: {
                text: 'Start Your App',
                link: '/contact'
            }
        },

        digitalExcellence: {
            title: 'Redefining Digital Excellence',
            description: 'Mobile users expect premium experiences. We build native mobile applications using Swift, Kotlin, and React Native that feel right at home on any device. Our apps are fast, secure, and follow platform guidelines to ensure they meet the high standards of app stores and your users.',
            features: [
                {
                    icon: 'FaApple',
                    title: 'Native Performance',
                    description: 'Built with Swift and Kotlin for optimal speed'
                },
                {
                    icon: 'FaPalette',
                    title: 'Platform Design',
                    description: 'Following iOS and Android design guidelines'
                },
                {
                    icon: 'FaLock',
                    title: 'Secure',
                    description: 'Enterprise-grade security and data protection'
                },
                {
                    icon: 'FaMobileAlt',
                    title: 'Universal',
                    description: 'Optimized for iPhone, iPad, and Android devices'
                }
            ]
        },

        valueDelivery: {
            title: 'The Value We Deliver',
            subtitle: 'Tangible impact for your business',
            benefits: [
                {
                    icon: 'FaBolt',
                    title: 'Superior Performance',
                    description: 'Native code ensures smooth, responsive user experience'
                },
                {
                    icon: 'FaGem',
                    title: 'Premium Users',
                    description: 'Access to mobile users with higher engagement'
                },
                {
                    icon: 'FaShieldAlt',
                    title: 'Enhanced Security',
                    description: 'Built-in platform security features protect user data'
                },
                {
                    icon: 'FaRocket',
                    title: 'App Store Success',
                    description: 'Optimized for approval and discoverability'
                }
            ]
        },

        howWeWork: {
            title: 'How We Work',
            subtitle: 'Our proven process ensures transparency, efficiency, and exceptional results',
            steps: [
                {
                    number: 1,
                    title: 'Ideate',
                    description: 'We define features, user flows, and technical requirements'
                },
                {
                    number: 2,
                    title: 'Design',
                    description: 'We create platform-native designs following guidelines'
                },
                {
                    number: 3,
                    title: 'Develop',
                    description: 'We build with Swift, Kotlin, and mobile best practices'
                },
                {
                    number: 4,
                    title: 'Launch',
                    description: 'We handle app store submission and post-launch support'
                }
            ]
        },

        toolsOfTrade: {
            title: 'Tools of the Trade',
            subtitle: 'We use the latest technologies to build exceptional mobile apps',
            categories: [
                {
                    name: 'Languages',
                    tools: [
                        { name: 'Swift', icon: 'SiSwift' },
                        { name: 'Kotlin', icon: 'SiKotlin' },
                        { name: 'React Native', icon: 'FaReact' },
                        { name: 'Flutter', icon: 'SiFlutter' }
                    ]
                },
                {
                    name: 'Development',
                    tools: [
                        { name: 'Xcode', icon: 'SiXcode' },
                        { name: 'Android Studio', icon: 'SiAndroidstudio' },
                        { name: 'TestFlight', icon: 'FaPlane' },
                        { name: 'Firebase', icon: 'SiFirebase' }
                    ]
                },
                {
                    name: 'Backend',
                    tools: [
                        { name: 'Firebase', icon: 'SiFirebase' },
                        { name: 'AWS', icon: 'FaAws' },
                        { name: 'MongoDB', icon: 'SiMongodb' },
                        { name: 'PostgreSQL', icon: 'SiPostgresql' }
                    ]
                },
                {
                    name: 'APIs',
                    tools: [
                        { name: 'ARKit', icon: 'FaCube' },
                        { name: 'CoreML', icon: 'FaBrain' },
                        { name: 'HealthKit', icon: 'FaHeartbeat' },
                        { name: 'MapKit', icon: 'FaMapMarkedAlt' }
                    ]
                }
            ]
        },

        pricing: {
            title: 'Invest in Your Growth',
            subtitle: 'Choose the perfect plan for your mobile app',
            plans: [
                {
                    name: 'MVP',
                    price: '$9,999',
                    duration: 'per project',
                    description: 'Perfect for startups',
                    features: [
                        'Single Platform (iOS or Android)',
                        'Up to 5 Screens',
                        'Basic Features',
                        'App Store Submission',
                        '60 Days Support',
                        'Source Code'
                    ],
                    highlighted: false
                },
                {
                    name: 'Professional',
                    price: '$24,999',
                    duration: 'per project',
                    description: 'Ideal for businesses',
                    features: [
                        'Both iOS & Android',
                        'Unlimited Screens',
                        'Advanced Features',
                        'Backend Integration',
                        'Push Notifications',
                        '6 Months Support',
                        'App Store Optimization'
                    ],
                    highlighted: true
                },
                {
                    name: 'Enterprise',
                    price: 'Custom',
                    duration: 'contact us',
                    description: 'For complex solutions',
                    features: [
                        'Everything in Professional',
                        'Wearable App Support',
                        'AR/ML Features',
                        'Dedicated Team',
                        'Advanced Security',
                        '1 Year Support',
                        'White-Label Option'
                    ],
                    highlighted: false
                }
            ]
        },

        faqs: {
            title: 'Frequently Asked Questions',
            questions: [
                {
                    q: 'Should I build a native app or cross-platform?',
                    a: 'Native apps offer superior performance and better user experience. Cross-platform (React Native, Flutter) is cost-effective for simpler apps. We recommend based on your specific requirements and budget.'
                },
                {
                    q: 'How long does mobile app development take?',
                    a: 'A simple app takes 8-12 weeks, while complex apps can take 16-24 weeks. We provide detailed timelines during the planning phase based on your specific requirements.'
                },
                {
                    q: 'Do you help with app store submission?',
                    a: 'Yes! We handle the entire app store submission process, including preparing assets, writing descriptions, and ensuring compliance with Apple and Google guidelines.'
                },
                {
                    q: 'Can you add features to an existing app?',
                    a: 'Absolutely! We can enhance existing apps with new features, improve performance, update designs, or migrate to the latest platform versions.'
                },
                {
                    q: 'What about app maintenance and updates?',
                    a: 'All our plans include post-launch support. We also offer ongoing maintenance packages to keep your app updated with the latest OS versions and features.'
                }
            ]
        },

        cta: {
            title: 'Ready to Build Your Mobile App?',
            description: 'Let\'s create an app that users will love and that drives real business value.',
            buttonText: 'Start Your App',
            buttonLink: '/contact'
        }
    }
];

// Helper function to get service by slug
export const getServiceBySlug = (slug) => {
    return servicesData.find(service => service.slug === slug);
};

// Helper function to get all service slugs (useful for static generation)
export const getAllServiceSlugs = () => {
    return servicesData.map(service => service.slug);
};
