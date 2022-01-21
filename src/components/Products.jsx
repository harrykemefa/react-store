import styled from 'styled-components';
import ProductItem from './ProductItem';
import {featuredProducts} from '../data';


const Container = styled.div`
 display: flex;
 padding: 20px;
 flex-wrap: wrap;
 position: relative;
`;




 const Products = () =>   {
  
        return (
            <Container>

         
               {featuredProducts.map(item => (
                   <ProductItem item={item} key={item.id} />
               ))}

             
            </Container>
           
        )
    
}

export default Products;
