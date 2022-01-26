import styled from 'styled-components';
import { Remove, Add } from "@material-ui/icons";
import Announce from '../components/Announce';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import {mobile} from '../responsive';
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

const Wrapper = styled.div`
padding: 20px;
`;

const ProductInfo = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 text-align: center;
 margin: 20px 0;
 border-top: 1px solid rgba(0,0,0,.05);
 border-bottom: 1px solid rgba(0,0,0,.05);

`;

const Product = styled.div`
 flex: 2;
 display: flex;
 justify-content: center;
 align-items: center;
`;

const Image = styled.img`
margin: 15px;
max-width: 60px;
`;


const Price = styled.div`
flex: 1;
`;

const Quantity = styled.div`
 flex: 1;
 display: flex;
 justify-content: center;
`;

const SubTotal = styled.div`
flex:1;
`;
const CartHeader = styled.div`
display: flex;
font-weight: 600;
width: 100%;
justify-content: center;
align-items: center;
text-align: center;
`;
const ProductHeader = styled.h4`
flex:2;
`;
const TotalHeader = styled.h4`
flex:1;
`;

const PriceHeader = styled.h4`
flex:1;
`;

const QuantityHeader = styled.h4`
flex:1;
`;

const AddWrapper = styled.div`
display: flex;
width: 60%;
align-items: center;
justify-content: space-around;
margin: 10px 0;
`;

const AmountWrapper = styled.div`
display:flex;
align-items:center;
font-weight: 600;
border: 1px solid #000;
padding: 10px 20px;
cursor: pointer;

${mobile({padding: "10px 10px", margin: "0 5px"})}
`;

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid #000;
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;


`;


const Details = styled.div`

`;

const Summary = styled.div`
 display: flex;
 flex-direction: column;
 padding: 20px;
 width: 30%;
`;

const SumTitle = styled.h6`
 font-weight: 600;
 margin: 5px 0;
`;

const Total = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 10px 0;

`;

const Sub = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 0;

`;

const Title = styled.div`
 margin-right: 40px;
`;

const Num = styled.div`

`;

 const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2em;
  ${mobile({padding: "0", justifyContent: "space-around"})}
 `;

const Button1 = styled.button`
width: auto;
padding: 16px 50px;
color: #fff;
background: #000;
border-color: #000;
font-weight: 400;
cursor: pointer;

&:hover{
   transition: all 0.5s ease;
   background-color : transparent;
   color: #000;
   border: 1px solid gray;
};

${mobile({padding: "13px 25px"})}
`;

const Button2 = styled.button`
width: auto;
padding: 16px 50px;
color: #000;
border-color: #000;
font-weight: 400;
cursor: pointer;

&:hover{
   transition: all 0.5s ease;
   background-color : #000;
   color: #fff;
   border: 1px solid gray;
};

${mobile({padding: "13px 25px"})}
`;






const Cart = props => {
    return (
        <Container>
             <Navbar />
        <Announce />
        <Heading>
            <HeadingText>
               CART
            </HeadingText>
        </Heading>
         <Wrapper>
             <CartHeader>
                 <ProductHeader>
                     Product
                    </ProductHeader>
                    <PriceHeader>
                     Price
                    </PriceHeader>
                    <QuantityHeader>
                     Quantity
                    </QuantityHeader>
                    <TotalHeader>
                     Subtotal
                    </TotalHeader>
            </CartHeader>
             <ProductInfo>
              <Product>
                  <Image src="./img/product2.jpg" />
                  <Details>
                Jacket
                </Details>
             </Product>
                <Price>
                    $245.99
                </Price>
                <Quantity>
                   
            <AddWrapper>
                <AmountWrapper>
                    <Remove />
                    <Amount>1</Amount>
                    <Add />
                </AmountWrapper>
            </AddWrapper >
                </Quantity>
                <SubTotal>
                $245.99
                </SubTotal>
            </ProductInfo>

            <ProductInfo>
              <Product>
                  <Image src="./img/product5.jpg" />
                  <Details>
                Rolex
                </Details>
             </Product>
                <Price>
                    $999.00
                </Price>
                <Quantity>
                   
            <AddWrapper>
                <AmountWrapper>
                    <Remove />
                    <Amount>1</Amount>
                    <Add />
                </AmountWrapper>
            </AddWrapper >
                </Quantity>
                <SubTotal>
                $999.00
                </SubTotal>
            </ProductInfo>
            <Summary>
                <SumTitle>
                    CART TOTAL
                </SumTitle>
                <Sub>
                <Title>Subtotal</Title>
                <Num>  1,244.99</Num>
                </Sub>
                <Total>
                    <Title>Total</Title>
                        <Num>  1,244.99</Num>
                  
                </Total>
            </Summary>
            <ButtonWrapper>
            <Button1>CHECKOUT</Button1>
            <Button2>CONTINUE SHOPPING</Button2>
            </ButtonWrapper>
            </Wrapper>
        <NewsLetter />
         <Footer />

        </Container>
    )
}



export default Cart;
