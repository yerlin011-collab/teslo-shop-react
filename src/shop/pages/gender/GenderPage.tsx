import React from 'react'
import { CustomJumboTrom } from '../../components/CustomJumboTrom'
import { CustomPagination } from '../../../components/custom/CustomPagination'
import { ProductsGrid } from '../../components/ProductsGrid'
import { useParams } from 'react-router'
import { usePrefetchQuery } from '@tanstack/react-query'
import { useProducts } from '../../hooks/useProducts'

export const GenderPage = () => {


  const {gender} = useParams();

  const {data} = useProducts();


  const genderLabel = gender === 'men' ? 'Hombres' : gender === 'women' ? 'Mujeres' : 'Niños';
  // let genderLabel2;

  // switch(gender){

  //   case 'men':
  //     genderLabel2 = 'Hombres'
  //     break;
  //   case 'women':
  //     genderLabel2 = 'Mujeres'
  //     break;
  //   default:
  //     genderLabel2 = 'Niños'

  // }

  return (

  <>

  <CustomJumboTrom title={`Productos  para ${genderLabel}`}/>

      <ProductsGrid products={data?.products || []}/>
            
  <CustomPagination totalPages={data?.pages || 1}/>  

 </>

  )
  
 
}
