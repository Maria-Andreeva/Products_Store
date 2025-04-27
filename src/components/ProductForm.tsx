import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';


interface FormData {
    title: string;
    description: string;
    imageUrl: string;
}

interface ProductFormProps {
    defaultValues?: FormData;
    onSubmit: (data: FormData) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ defaultValues, onSubmit }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormData>();

    useEffect(() => {
        if (defaultValues) {
            reset(defaultValues);
        }
    }, [defaultValues, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 border rounded shadow">
            <TextField
                {...register('title', { required: 'Title is required' })}
                label="Название продукта"
                variant="outlined"
                fullWidth
                error={!!errors.title}
                helperText={errors.title?.message}
                sx={{ mb: 2 }}
            />

            <TextField
                {...register('description', { required: 'Description is required' })}
                label="Описание продукта"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                error={!!errors.description}
                helperText={errors.description?.message}
                sx={{ mb: 2 }}
            />

            <TextField
                {...register('imageUrl', { required: 'Image URL is required' })}
                label="URL-адрес изображения продукта"
                variant="outlined"
                fullWidth
                error={!!errors.imageUrl}
                helperText={errors.imageUrl?.message}
                sx={{ mb: 2 }}
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
            >
                {defaultValues ? 'Изменить продукт' : 'Создать продукт'}
            </Button>
        </form>
    );
};

export default ProductForm;
