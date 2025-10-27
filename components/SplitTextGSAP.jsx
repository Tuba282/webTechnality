"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

const SplitByWords = ({ text, className = "" }) => {
    const textRef = useRef(null);

    useEffect(() => {
        if (!textRef.current) return;

        gsap.registerPlugin(SplitText);
        const segmenter = new Intl.Segmenter("zh", { granularity: "word" });

        document.fonts.ready.then(() => {
            const el = textRef.current;
            gsap.set(el, { opacity: 1 });

            const split = SplitText.create(el, {
                type: "words",
                wordsClass: "word",
                prepareText: (text) => {
                    return [...segmenter.segment(text)]
                        .map((s) => s.segment)
                        .join(String.fromCharCode(8204));
                },
                wordDelimiter: { delimiter: /\u200c/, replaceWith: " " },
                autoSplit: true,
                onSplit: (self) => {
                    gsap.from(self.words, {
                        y: 50,
                        opacity: 0,
                        stagger: 0.1,
                        ease: "back.out(1.7)",
                        duration: 1.2,
                    });
                },
            });

            return () => split && split.revert();
        });
    }, [text]);

    return (
        <span
            ref={textRef}
            className={`split opacity-0 text-3xl sm:text-4xl md:text-5xl font-bold ${className}`}
        >
            {text}
        </span>
    );
};



const AnimatedLetters = ({ text, className = "" ,delay}) => {
    const textRef = useRef(null);

    useEffect(() => {
        if (!textRef.current) return;

        gsap.registerPlugin(SplitText);

        document.fonts.ready.then(() => {
            const el = textRef.current;
            gsap.set(el, { opacity: 1 });

            // Split text into characters
            const split = SplitText.create(el, {
                type: "chars",
                charsClass: "char",
                onSplit: (self) => {
                    // Animate characters
                    gsap.from(self.chars, {
                        y: 80,
                        opacity: 0,
                        stagger: 0.03,
                        ease: "back.out(1.7)",
                        duration: 1.6,
                        delay: delay,
                    });
                },
            });

            return () => split && split.revert();
        });
    }, [text]);

    return (
        <span
            ref={textRef}
            className={`split opacity-0 text-3xl sm:text-4xl md:text-5xl font-bold ${className}`}
        >
            {text}
        </span>
    );
};

export { AnimatedLetters, SplitByWords };