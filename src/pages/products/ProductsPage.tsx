import React from 'react';
import ProductList from '../../components/ProductList';

const ProductsPage: React.FC = () => {

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold text-center mb-6">Наша продукция</h1>

            <ProductList/>

        </div>
    );
};

export default ProductsPage;

