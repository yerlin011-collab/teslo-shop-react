// https://github.com/Klerith/bolt-product-editor

import { AdminTitle } from '@/admin/components/AdminTitle';
import { Navigate, useNavigate, useParams } from 'react-router';

import { useState } from 'react';
import { X, Plus, Upload, Tag, SaveAll } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import { useProduct } from '../../hooks/useProduct';
import { CustomFullScreenLoading } from '../../../components/custom/CustomFullScreenLoading';
import { ProductForm } from './ui/ProductForm';
import type { Product } from '../../../interfaces/product.interface';
import { toast } from 'sonner';



export const AdminProductPage = () => {
  
  
  const { id } = useParams();

  const {isLoading, isError, data: product, mutation} = useProduct(id || '');
  const navigate = useNavigate();


  const productTitle = id === 'new' ? 'Nuevo producto' : 'Editar producto';
  const productSubtitle =
    id === 'new'
      ? 'Aquí puedes crear un nuevo producto.'
      : 'Aquí puedes editar el producto.';


  
  const handleSubmit = async(productLike: Partial<Product>)=>{

    await mutation.mutateAsync(productLike,{

      onSuccess: (data)=>{

        toast.success('Producto actualizado correctamente',{
          position: 'top-right'
        });

        navigate(`/admin/products/${data.id}`);
        
      },

      onError: (error)=>{
        console.log(error);
        toast.error('Error al actualizar el producto');

      },

    });

  }

  const btnIsPending = mutation.isPending;

  if(isError){

    return <Navigate to="/admin/products"/>
  }

  if(isLoading){

    return <CustomFullScreenLoading/>
  }

  if(!product){

  return <Navigate to="/admin/products"/>

  }

  return (
    <>
    
     <ProductForm productTitle={productTitle} productSubtitle={productSubtitle} product={product} onSubmit={handleSubmit} btnIsPending={btnIsPending}/>

    </>
  );
};