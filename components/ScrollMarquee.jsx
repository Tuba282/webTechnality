"use client";
import { motion } from "framer-motion";
import { ThreeDMarquee } from "./ui/3d-marquee";
import { BsFolderFill } from "react-icons/bs";

export function HeroMarquee() {
    const images = [
        "https://framerusercontent.com/images/Wrpx7jqyDzGYbiuov4cHcUHj4g.png?width=3000&height=1962",
        "https://framerusercontent.com/images/TVT3v1ul3h6FAtJlI3flGmdpYu4.png?width=3000&height=1962",
        "https://framerusercontent.com/images/wBujN6Jqq5gmLPPESy5QQT3Lo.png?width=3000&height=1962",
        "https://framerusercontent.com/images/InUuP3vJ6bwlMJD62dnM1zvVs4o.png?width=3000&height=1962",
        "https://framerusercontent.com/images/yW3vhBEse3OhmH5EUnCgwXWBLsM.png?width=3000&height=1962",
        "https://framerusercontent.com/images/TVT3v1ul3h6FAtJlI3flGmdpYu4.png?width=3000&height=1962",
        "https://framerusercontent.com/images/OkY3eXwJRQov4wGiuOmAecwVEk.png?width=3000&height=1962",
        "https://framerusercontent.com/images/Wrpx7jqyDzGYbiuov4cHcUHj4g.png?width=3000&height=1962",
        "https://framerusercontent.com/images/TVT3v1ul3h6FAtJlI3flGmdpYu4.png?width=3000&height=1962",
        "https://framerusercontent.com/images/wBujN6Jqq5gmLPPESy5QQT3Lo.png?width=3000&height=1962",
        "https://framerusercontent.com/images/yW3vhBEse3OhmH5EUnCgwXWBLsM.png?width=3000&height=1962",
        "https://framerusercontent.com/images/hSwT5bZsymf6RUhRvIEtNbSbEo.png?width=3000&height=1962",
        "https://framerusercontent.com/images/wBujN6Jqq5gmLPPESy5QQT3Lo.png?width=3000&height=1962",
        "https://framerusercontent.com/images/InUuP3vJ6bwlMJD62dnM1zvVs4o.png?width=3000&height=1962",
        "https://framerusercontent.com/images/hSwT5bZsymf6RUhRvIEtNbSbEo.png?width=3000&height=1962",
        "https://framerusercontent.com/images/TVT3v1ul3h6FAtJlI3flGmdpYu4.png?width=3000&height=1962",
        "https://framerusercontent.com/images/yW3vhBEse3OhmH5EUnCgwXWBLsM.png?width=3000&height=1962",
        "https://framerusercontent.com/images/wBujN6Jqq5gmLPPESy5QQT3Lo.png?width=3000&height=1962",
        "https://framerusercontent.com/images/Wrpx7jqyDzGYbiuov4cHcUHj4g.png?width=3000&height=1962",
        "https://framerusercontent.com/images/InUuP3vJ6bwlMJD62dnM1zvVs4o.png?width=3000&height=1962",
        "https://framerusercontent.com/images/TVT3v1ul3h6FAtJlI3flGmdpYu4.png?width=3000&height=1962",
        "https://framerusercontent.com/images/OkY3eXwJRQov4wGiuOmAecwVEk.png?width=3000&height=1962",
        "https://framerusercontent.com/images/W0KN6eyCdaypgPX6vr9siFG5c.png?width=3000&height=1962",
        "https://framerusercontent.com/images/yW3vhBEse3OhmH5EUnCgwXWBLsM.png?width=3000&height=1962",
        "https://framerusercontent.com/images/TVT3v1ul3h6FAtJlI3flGmdpYu4.png?width=3000&height=1962",
        "https://framerusercontent.com/images/InUuP3vJ6bwlMJD62dnM1zvVs4o.png?width=3000&height=1962",
        "https://framerusercontent.com/images/OkY3eXwJRQov4wGiuOmAecwVEk.png?width=3000&height=1962",
        "https://framerusercontent.com/images/wBujN6Jqq5gmLPPESy5QQT3Lo.png?width=3000&height=1962",
        "https://framerusercontent.com/images/Wrpx7jqyDzGYbiuov4cHcUHj4g.png?width=3000&height=1962",
        "https://framerusercontent.com/images/Wrpx7jqyDzGYbiuov4cHcUHj4g.png?width=3000&height=1962",
        "https://framerusercontent.com/images/TVT3v1ul3h6FAtJlI3flGmdpYu4.png?width=3000&height=1962",
        "https://framerusercontent.com/images/wBujN6Jqq5gmLPPESy5QQT3Lo.png?width=3000&height=1962",
        "https://framerusercontent.com/images/InUuP3vJ6bwlMJD62dnM1zvVs4o.png?width=3000&height=1962",
        "https://framerusercontent.com/images/yW3vhBEse3OhmH5EUnCgwXWBLsM.png?width=3000&height=1962",
        "https://framerusercontent.com/images/TVT3v1ul3h6FAtJlI3flGmdpYu4.png?width=3000&height=1962",

    ];
    return (
        <div
            className="relative mx-auto my-10 flex w-full max-w-7xl min-h-[400px] px-1 max-h-screen flex-col items-center bg-amber-600 justify-center overflow-hidden rounded-4xl">

            <div className="z-20 bg-amber-600 flex flex-col justify-center items-center">
                <motion.p
                    initial={{ opacity: 0, rotate: 12 }}
                    animate={{ opacity: 1, rotate: -12 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ clipPath: `100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%` }}
                    className="relative mb-5 drop-shadow-sm flex justify-between gap-2 md:font-semibold items-center p-2 px-4 md:py-2.5 md:px-4 bg-black text-white rounded-full ">
                    Avaible to work
                    <span className="bg-black top-6.5 md:top-7.5 left-[25%] z-10 absolute h-6 w-6" style={{ clipPath: `polygon(100% 50%, 50% 100%, 0 50%)` }}></span>
                </motion.p>
                <button
                    className="w-15 h-15 md:w-30 md:h-30 flex justify-center items-center rounded-full  backdrop-blur-xs bg-black/10 border border-white/20  px-6 py-2.5 text-sm font-medium text-white  transition-colors hover:bg-black/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
                    <BsFolderFill className="text-white drop-shadow-sm text-3xl" />
                </button>
            </div>
            {/* overlay */}
            {/* <div
                className="absolute inset-0 z-10 h-full w-full bg-black/30 dark:bg-black/40" /> */}
            <ThreeDMarquee
                className="pointer-events-none border-black border-8 md:border-15 absolute inset-0 h-full w-full"
                images={images} />
        </div>
    );
}
