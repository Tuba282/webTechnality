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
            className="relative mx-auto my-10 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-4xl">

            <motion.p
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{clipPath: `100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%`}}
                className="z-20 h-20  flex justify-between gap-2 font-semibold items-center py-2.5 px-4 bg-black text-white rounded-3xl ">
                Avaible to work
            </motion.p>
            <button
                className="w-30 h-30 z-20 flex justify-center items-center rounded-full  backdrop-blur-sm bg-white/20 border border-white/20  px-6 py-2.5 text-sm font-medium text-white  transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
                <BsFolderFill size={40} className="text-black" />
            </button>
            {/* overlay */}
            <div
                className="absolute inset-0 z-10 h-full w-full bg-black/30 dark:bg-black/40" />
            <ThreeDMarquee
                className="pointer-events-none border-black border-19 absolute inset-0 h-full w-full"
                images={images} />
        </div>
    );
}
