import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/project_test">
                    <h1 className="text-white text-2xl font-semibold">Product App</h1>
                </Link>
                <div>
                    <Link
                        to="/project_test"
                        className="text-white px-4 py-2 hover:bg-blue-700 rounded-md transition duration-300"
                    >
                        Главная страница
                    </Link>
                    <Link
                        to="/project_test/products"
                        className="text-white px-4 py-2 hover:bg-blue-700 rounded-md transition duration-300"
                    >
                        Список товаров
                    </Link>
                    <Link
                        to="/project_test/create-product"
                        className="text-white px-4 py-2 hover:bg-blue-700 rounded-md transition duration-300"
                    >
                        Добавить товар
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;