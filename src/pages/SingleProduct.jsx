import {useState} from 'react';
import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined, Remove, Add } from "@material-ui/icons";

import Announce from '../components/Announce';
import Navbar from '../components/Navbar';
import ProductSlider from '../components/ProductSlider';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import {mobile} from '../responsive';

const Container = styled.div`
  
`;


const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #f5fafd;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.8;
z-index: 2;
`;

const BreadCrumbs = styled.div`
    padding: 20px 70px;
    background-color: #f7f7f7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "20px 20px"})}

`;

const Heading = styled.h2`
    font-weight: 700;
    text-align: left;
    line-height: 1.5;
    font-size: 18px;

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

const BreadCrumbsLinks = styled.div`
display: flex;

 
`;

const BreadCrumbText = styled.a`

margin: 5px;

`;
const Wrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: flex-start;
 padding: 20px;
 ${mobile({display: "block"})}
 
`;

const ImgContainer = styled.div`
flex: 1;
display: flex;
overflow: hidden;
position: relative;
`;



const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 40px 0;
`;

const Title = styled.h1`
 font-weight: 500;
 padding: 20px 0;
 font-size: large;
`;

const Desc = styled.p`
  padding: 10px 0;
  line-height: 1.4;
`;

const Price = styled.h3`
 padding: 10px 0;
`;
const SlideWrapper = styled.div`
display: flex;
transform: translateX(${(props) => props.slideIndex * -50}vw);
transition: all 1.5s ease;
`;
const Image = styled.img`
    width: 45vw;
    height: 100vh;
    object-fit: cover;
    margin: 20px;
    ${mobile({width: "80vw", height: "60vh"})}
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;


const Filter = styled.div`
margin: 20px;
`;

const FilterText = styled.span`
font-size: 15px;
margin-right: 20px;
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;

`;

const Option = styled.option`

`;

 const AddWrapper = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0;
  ${mobile({width: "100%"})}
 `;

 const AmountWrapper = styled.div`
  display:flex;
  align-items:center;
  font-weight: 600;
  border: 1px solid #000;
  padding: 10px 20px;
  cursor: pointer;
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

 const Button = styled.button`
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
}
 `;



 const SingleProduct = () =>  {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {

        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 1);
        }else{
            setSlideIndex(slideIndex < 1 ? slideIndex+1 : 0);
        }
    };
   
        return (
            <Container>
                <Navbar />
                <Announce />
             
                    <BreadCrumbs>
                        <Heading >
                            Single Product
                        </Heading >
                        <BreadCrumbsLinks>
                            <BreadCrumbText>
                              Home -
                            </BreadCrumbText>

                            <BreadCrumbText>
                              Shop -
                            </BreadCrumbText>

                            <BreadCrumbText>
                              Watches
                            </BreadCrumbText>
                        </BreadCrumbsLinks>
                    </BreadCrumbs>
                    <Wrapper>
                    <ImgContainer>
                    <Arrow direction="left"  onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
              <SlideWrapper slideIndex={slideIndex}>
                     <Image src="./img/single1.jpg" />
                     <Image src="./img/single2.jpg" />
            </SlideWrapper>
                     <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
                </Arrow>
                     </ImgContainer>
                     <InfoContainer>
                        <Title>
                            SUEDE SANDAL
                       </Title>
                       <Price>
                           $395.00
                        </Price>
                        <Desc>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem esse ab dolor alias mollitia! Deserunt quaerat quos explicabo quod, aspernatur aliquid saepe dicta ad autem! Vel laudantium laboriosam libero recusandae.
                        </Desc>

                        <FilterContainer>
            <Filter>
               <FilterText>
                   Size
               </FilterText > 
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
            </FilterContainer>

            <AddWrapper>
                <AmountWrapper>
                    <Remove />
                    <Amount>1</Amount>
                    <Add />
                </AmountWrapper>
                <Button>
                     ADD TO CART
                </Button>
            </AddWrapper >
                    </InfoContainer>
                     
                </Wrapper>
                <ProductSlider />
                <NewsLetter />
                <Footer />
            </Container>
        )

}

export default SingleProduct;
