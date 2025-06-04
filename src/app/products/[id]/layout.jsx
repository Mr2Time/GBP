import React from 'react';

const ProductsLayout = ({children}) => {
    return (
        <div>
            {children}
            <h2>
                This is the products layout. You can add a sidebar or other components here.
            </h2>
        </div>
    );
}

export default ProductsLayout;
