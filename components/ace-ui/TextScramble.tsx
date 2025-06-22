"use client"
import React, { useEffect, useRef, useState } from "react";

interface TextScrambleProps {
    children: string;
    speed?: number; 
    duration?: number; 
    className?: string;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";

export const TextScramble = ({
    children,
    speed = 50,
    duration = 800,
    className = ""
} : TextScrambleProps) => {
    const [displayText, setDisplayText] = useState(children);
    const originalTextRef = useRef(children);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const scramble = () => {
        const original = originalTextRef.current;
        const iterations = Math.floor(duration / speed);
        let currentIteration = 0;

        const scrambleStep = () => {
            const newText = original
                .split("")
                .map((char, i) => {
                    if (Math.random() < (currentIteration / iterations)) {
                        return char;
                    }
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                })
                .join("");

            setDisplayText(newText);
            currentIteration++;

            if (currentIteration < iterations) {
                timeoutRef.current = setTimeout(scrambleStep, speed);
            } else {
                setDisplayText(original);
            }
        };

        scrambleStep();
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <span
            className={`cursor-pointer transition-colors ${className}`}
            onMouseEnter={scramble}
        >
            {displayText}
        </span>
    );
};
