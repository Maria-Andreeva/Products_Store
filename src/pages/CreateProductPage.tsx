import React from 'react';
import ProductForm from '../components/ProductForm';
import { addProduct } from '../redux/productSlice';
import { useNavigate } from 'react-router-dom';
import {useAppDispatch} from "../store/useAppDispatch";

interface ProductFormData {
    title: string;
    description: string;
    imageUrl: string;
}

const CreateProductPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleCreate = (data: ProductFormData) => {
        const newProduct = {
            id: Date.now().toString(),
            name: data.title,
            description: data.description,
            image: data.imageUrl,
            liked: false,
        };

        dispatch(addProduct(newProduct));
        navigate('/products');
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold text-center mb-6">Карточка нового продукта</h1>
            <ProductForm onSubmit={handleCreate} />
        </div>
    );
};

export default CreateProductPage;
