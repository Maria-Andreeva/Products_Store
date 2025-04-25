import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import {deleteProduct, toggleLike} from '../../redux/productSlice';
import { Trash2, Pencil } from 'lucide-react';
import {HeartIcon as SolidHeartIcon} from "@heroicons/react/24/solid";
import {HeartIcon as OutlineHeartIcon} from "@heroicons/react/24/outline";

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const product = useSelector((state: RootState) =>
        state.products.products.find(p => p.id === id)
    );

    if (!product) {
        return <div className="text-center mt-12 text-xl">Продукт не найден</div>;
    }

    const handleDelete = () => {
        if (window.confirm('Удалить этот продукт?')) {
            dispatch(deleteProduct(product.id));
            navigate('/products');
        }
    };
    const handleLikeToggle = () => {
        dispatch(toggleLike(product.id));
    };

    return (
        <div className="container mx-auto p-6">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-contain mb-6"
                />

                <div className="flex justify-between items-start">
                    <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

                    <button
                        onClick={handleLikeToggle}
                        className={`transition duration-300 ${product.liked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}
                    >
                        {product.liked ? (
                            <SolidHeartIcon className="w-6 h-6" />
                        ) : (
                            <OutlineHeartIcon className="w-6 h-6" />
                        )}
                    </button>
                </div>

                <p className="text-gray-600 mt-4 mb-6 text-lg whitespace-pre-line">{product.description}</p>

                <div className="flex gap-4 mt-4">
                    <button
                        onClick={() => navigate('/products')}
                        className="px-5 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
                    >
                        Назад
                    </button>

                    <button
                        onClick={() => navigate(`/edit/${product.id}`)}
                        className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition flex items-center gap-2"
                    >
                        <Pencil size={18} /> Редактировать
                    </button>

                    <button
                        onClick={handleDelete}
                        className="px-5 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition flex items-center gap-2"
                    >
                        <Trash2 size={18} /> Удалить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;

