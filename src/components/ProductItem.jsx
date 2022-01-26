import styled from 'styled-components';
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@material-ui/icons';
import {mobile} from '../responsive';

const Container = styled.div`
 flex: 1;
 margin: 5px;
 max-width: 280px;
 height: 350px;
 display: flex;
 align-items: center;
 justify-content: center;
 border: 1px solid rgba(0,0,0,.05);

 ${mobile({maxWidth: "380px", height: "400px"})}

`;


const IconWrap = styled.div`
 display: flex;
 flex-direction: row;
 z-index: 2;
`;

const Image = styled.img`
 height: 75%;
 transition: all 0.5s ease;
 &:hover{
     transform: scale(1.1);
 }
`;

const Icon = styled.div`
  margin-bottom: 5px;
  background-color: #fcebeb;
  border: 1px solid rgba(0,0,0,.05);
  padding: 5px 0;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover{
      transform: scale(1.1);
  }
`;
 const ProductItem = ({item}) =>   {
   
        return (
            <Container>
                 
                   <Image src={item.img}  />
                   <IconWrap>
                   <Icon>
                       <ShoppingCartOutlined />
                 </Icon>    
                 <Icon>
                       <SearchOutlined />
                 </Icon>  
                 <Icon>
                       <FavoriteBorderOutlined />
                 </Icon>   
                 </IconWrap >      
            </Container>
        )
    
}

export default ProductItem;
