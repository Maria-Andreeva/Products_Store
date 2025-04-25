import React from 'react';
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeartIcon, TrashIcon } from '@heroicons/react/24/solid';
import { PencilIcon } from '@heroicons/react/24/outline';
import { Product } from '../types/Product';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleLike, deleteProduct } from '../redux/productSlice';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLikeToggle = () => {
        dispatch(toggleLike(product.id));
    };

    const handleDelete = () => {
        dispatch(deleteProduct(product.id));
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <Link to={`/products/${product.id}`} className="flex-1">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">{product.name}</h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
            </Link>

            <div className="flex justify-between items-center mt-4">
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

                <button
                    onClick={handleDelete}
                    className="text-gray-600 hover:text-red-500 transition duration-300"
                >
                    <TrashIcon className="w-6 h-6" />
                </button>

                <button
                    onClick={() => navigate(`/edit/${product.id}`)}
                    className="text-gray-600 hover:text-blue-500 transition duration-300"
                >
                    <PencilIcon className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default ProductCard;