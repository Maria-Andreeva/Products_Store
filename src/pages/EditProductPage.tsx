import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { updateProduct } from '../redux/productSlice';
import ProductForm from '../components/ProductForm';

const EditProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const product = useSelector((state: RootState) =>
        state.products.products.find(p => p.id === id)
    );

    if (!product) {
        return <div className="p-4">Product not found</div>;
    }

    const handleUpdate = (data: any) => {
        const updatedProduct = {
            ...product,
            name: data.title,
            description: data.description,
            image: data.imageUrl,
        };

        dispatch(updateProduct(updatedProduct));
        navigate('/products');
    };

    return (
        <div className="max-w-xl mx-auto mt-10">
            <h1 className="text-2xl font-semibold mb-4">Edit Product</h1>
            <ProductForm
                defaultValues={{
                    title: product.name,
                    description: product.description,
                    imageUrl: product.image
                }}
                onSubmit={handleUpdate}
            />
        </div>
    );
};

export default EditProductPage;
