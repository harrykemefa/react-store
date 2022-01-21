import styled from 'styled-components';
import Announce from '../components/Announce';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';


const Container = styled.div`

`;

const Heading =  styled.div`
margin: 35px 50px;

`;

const HeadingText = styled.h2`
   font-weight: 700;
   text-align: left;
   line-height: 1.5;
   font-size: 24px;
   color: #000;

   &:before{
       display: inline-block;
       content: ' ';
       width: 44px;
       margin-right: 13px;
       background-color: #000;
       vertical-align: middle;
       height: 1px;
   }
`;

const FilterContainer = styled.div`
   display: flex;
   justify-content: space-between;
`;


const Filter = styled.div`
margin: 20px;
`;

const FilterText = styled.span`
 font-size: 20px;
 font-weight: 600;
 margin-right: 20px;
`;

const Select = styled.select`
   padding: 10px;
   margin-right: 20px;
   
`;

const Option = styled.option`

`

const ProductList = () => {
    return (
        <Container>
        <Navbar />
        <Announce />
        <Heading>
            <HeadingText>
                EXPLORE PRODUCTS
            </HeadingText>
        </Heading>
        <FilterContainer>
            <Filter>
               <FilterText>
                   Filter Products:
               </FilterText > 
               <Select>
                   <Option disabled selected>color</Option>
                   <Option>White</Option>
                   <Option>Black</Option>
                   <Option>Red</Option>
                   <Option>Blue</Option>
                   <Option>Yellow</Option>
               </Select>
               <Select>
               <Option disabled selected>size</Option>
                   <Option>XS</Option>
                   <Option>S</Option>
                   <Option>M</Option>
                   <Option>L</Option>
                   <Option>XL</Option>
                   <Option>XXL</Option>
              </Select >
            </Filter>
            <Filter>
            <FilterText>
                   Sort Products:
               </FilterText > 
               <Select>
               <Option disabled selected>Newest</Option>
                   <Option>Price (Asc)</Option>
                   <Option>Price (Desc)</Option>
                  
              </Select >
            </Filter>
        </FilterContainer>
         <Products />
         <NewsLetter />
         <Footer />
        </Container>
    )
}

export default ProductList;
