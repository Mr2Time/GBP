"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navigation = () => {

    const pathname = usePathname();

    return (
        <nav>
            <Link href="/" className={pathname === "/" ? "active" : "not-active"}>
                Home
            </Link>
            <Link href="/about" className={pathname === "/about" ? "active" : "not-active"}>
                About
            </Link>
            <Link href="/login" className={pathname === "/login" ? "active" : "not-active"}>
                Login
            </Link>
            <Link href="/forgot-password"   className={pathname === "/forgot-password" ? "active" : "not-active"}>
                Forgot Password 
            </Link>
            <Link href="/register" className={pathname === "/register" ? "active" : "not-active"}>
                Register
            </Link>
            <Link href="/products/iphones" className={pathname.startsWith("/products/iphones") ? "active" : "not-active"}>
                Product 1
            </Link>
            <Link href="/products/laptops" className={pathname.startsWith("/products/laptops") ? "active" : "not-active"}>
                Product 2
            </Link>
            <Link href="/products/smartwatches" className={pathname.startsWith("/products/smartwatches") ? "active" : "not-active"}>
                Product 3
            </Link>
        </nav>
    );
}

