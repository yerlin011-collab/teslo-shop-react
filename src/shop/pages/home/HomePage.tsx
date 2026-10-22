import { CustomJumboTrom } from '../../components/CustomJumboTrom'
import { CustomPagination } from '../../../components/custom/CustomPagination'
import { ProductsGrid } from '../../components/ProductsGrid'
import { useProducts } from '../../hooks/useProducts'

export const HomePage = () => {

  const {data} = useProducts();


  return (
    <div>

      <CustomJumboTrom title='Todos los productos' subTitle='Ropa minimalista y elegante inspirada en el diseño futurista de Tesla. 
            Calidad premium para un estilo atemporal.'/>

      <ProductsGrid products={ data?.products || []}/>
            
      <CustomPagination totalPages={data?.pages || 1}/>


    </div>
  )
}
