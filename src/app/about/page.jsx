"use client";
import React from 'react';
import {useRouter} from 'next/navigation';

const Page = () => {
    const router = useRouter();
    return (
        <div>
            <h1>About</h1>
            <p>This is the about page of the application.</p>
            <button
            onClick={() => router.push("/")}
            >Go Home</button>
        </div>
    );
}

export default Page;
