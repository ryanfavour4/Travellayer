import React, { useEffect, useState } from "react";

export default function useNavbar() {
    //!!======= SCROLL PASS THE NAVBAR =========!!//
    //!!======= SCROLL PASS THE NAVBAR =========!!//
    //!!======= SCROLL PASS THE NAVBAR =========!!//
    const [isScrolled, setIsScrolled] = useState(false);
    const scrollDistance = 100;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY >= scrollDistance);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    //!!======= OPEN AND CLOSE NAVBAR =========!!//
    //!!======= OPEN AND CLOSE NAVBAR =========!!//
    //!!======= OPEN AND CLOSE NAVBAR =========!!//
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return { isScrolled, isNavOpen, toggleNav };
}
