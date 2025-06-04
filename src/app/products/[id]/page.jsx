import React from 'react';

const Page = async ({params}) => {

    const {id} = await params;
    return (
        <div>
            <h1>Product {id}</h1>
        </div>
    );
}

export default Page;
