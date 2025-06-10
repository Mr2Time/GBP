'use client'

import { useEffect } from "react";

const Error = async ({error}) => {
    useEffect(() => {
        console.log(error);
    },[error])
    return (
        <div>
            <h4>Error fetch users data.</h4>
        </div>
    );
}

export default Error;
