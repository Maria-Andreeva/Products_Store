import React, { useEffect, useState } from 'react';
import apiClient from '../api/apiClient';

type LocationData = {
    ip: string;
    city: string;
    region_name: string;
    country_name: string;
};

const IpLocationCard: React.FC = () => {
    const [data, setData] = useState<LocationData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await apiClient.get('/134.201.250.155');
                setData(response.data);
            } catch (error) {
                console.error('Ошибка при получении геоданных', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLocation();
    }, []);

    if (loading) return <p>Загрузка...</p>;
    if (!data) return <p>Нет данных</p>;

    return (
        <div className="border p-4 rounded shadow-md bg-white">
            <h3 className="text-lg font-bold">Информация об IP</h3>
            <p><strong>IP:</strong> {data.ip}</p>
            <p><strong>Город:</strong> {data.city}</p>
            <p><strong>Регион:</strong> {data.region_name}</p>
            <p><strong>Страна:</strong> {data.country_name}</p>
        </div>
    );
};

export default IpLocationCard;
