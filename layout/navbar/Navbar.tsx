/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import useNavbar from "./Navbar.controller";
import CurrencySelect from "@/components/navbar/CurrencySelect";

export default function Navbar() {
    const { isScrolled, isNavOpen, toggleNav } = useNavbar();

    return (
        <>
            <div
                className={`${style.navbar} ${
                    isScrolled && style.scrolledPast
                }`}
            >
                <div className="wrapper">
                    <Link className={style.logoLink} href={"/"}>
                        <Image
                            className={style.logo}
                            src={
                                isScrolled && style.scrolledPast
                                    ? "/svg/logo.svg"
                                    : "/svg/blue-logo.svg"
                            }
                            alt="Logo"
                            width={300}
                            height={72}
                            priority
                        />
                    </Link>

                    <nav className={style.navList}>
                        <ul className={style.upperLink}>
                            <li>
                                <CurrencySelect />
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <img src="/svg/account.svg" alt="" />
                                    <span>My Account</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <img src="/svg/ticket.svg" alt="" />
                                    <span>My Bookings</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className={style.lowerLink}>
                            <li>
                                <Link href={"/"}>Flight</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Hotel</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Flight + Hotel</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Car Hire</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Contact Us</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className={style.mobileNav}>
                        <ul className={style.lowerLink}>
                            <li>
                                <Link href={"/"}>Flight</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Hotel</Link>
                            </li>
                            <li onClick={toggleNav} className={style.more}>
                                More
                                <img src="/svg/chevron-down-black.svg" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
                className={`${style.overlay} ${
                    !isNavOpen && style.closeOverlay
                }  ${isScrolled && style.scrolledPastSideNav}`}
            >
                <div className={style.overlayWrapper}>
                    <ul className={style.moreNavLinks}>
                        <li onClick={toggleNav}>
                            <Link href={"/"}>Flight</Link>
                        </li>
                        <li onClick={toggleNav}>
                            <Link href={"/"}>Hotel</Link>
                        </li>
                        <li onClick={toggleNav}>
                            <Link href={"/"}>Flight + Hotel</Link>
                        </li>
                        <li onClick={toggleNav}>
                            <Link href={"/"}>Car Hire</Link>
                        </li>
                        <li onClick={toggleNav}>
                            <Link href={"/"}>Contact Us</Link>
                        </li>
                    </ul>
                    <footer>
                        <ul className={style.paleFooterLinks}>
                            <li>
                                <Link onClick={toggleNav} href={"/"}>
                                    <img src="/svg/account.svg" alt="" />
                                    <span>My Account</span>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={toggleNav} href={"/"}>
                                    <img src="/svg/ticket.svg" alt="" />
                                    <span>My Bookings</span>
                                </Link>
                            </li>
                            <li>
                                <CurrencySelect />
                            </li>
                        </ul>
                    </footer>
                </div>
            </div>
        </>
    );
}

