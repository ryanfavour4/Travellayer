/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import style from "./CurrencySelect.module.css";

export default function CurrencySelect() {
    const [selectedOption, setSelectedOption] = useState({
        text: "Currency type",
        image: "/svg/Nigeria.svg",
    });

    const options = [
        { text: "Nigeria", image: "/svg/Nigeria.svg" },
        { text: "Ghana", image: "/svg/Ghana (GH).svg" },
        { text: "Cameroon", image: "/svg/Cameroon (CM).svg" },
        { text: "Dubai", image: "/svg/United Arab Emirates (AE).svg" },
        {
            text: "United States",
            image: "/svg/United States of America (US).svg",
        },
        { text: "United Kingdom", image: "/svg/United Kingdom (GB).svg" },
        // Add more options as needed
    ];

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: any) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const handleOptionClick = (option: any) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
        console.log(option);
    };

    return (
        <div className={style.customSelect} ref={dropdownRef}>
            <div
                className={style.selected}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                <span className="selected-text">{"Currency Type"}</span>
                <Image
                    src={selectedOption.image}
                    className={style.selectedImage}
                    width={24}
                    height={24}
                    priority
                    alt={selectedOption.text}
                />
                <img
                    className={style.chevronDropDown}
                    src="/svg/chevron-drop-down.svg"
                    alt="drop"
                />
            </div>
            {isDropdownOpen && (
                <div className={style.options}>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className={style.option}
                            onClick={() => handleOptionClick(option)}
                        >
                            <Image
                                src={option.image}
                                alt={option.text}
                                width={24}
                                height={24}
                                priority
                                className="option-image"
                            />
                            <span>{option.text}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
