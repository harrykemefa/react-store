import {useState} from 'react';
import styled from 'styled-components';
import ProductSliderItem from './ProductSliderItem';
import {featuredProducts} from '../data';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";


const Container = styled.div`
 display: flex;
 padding: 20px;
 overflow: hidden;
 position: relative;
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

const Wrapper = styled.div`
display: flex;
transform: translateX(${(props) => props.slideIndex * -20}vw);
transition: all 1.5s ease;
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
 const ProductSlider = () =>   {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {

        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 5);
        }else{
            setSlideIndex(slideIndex < 5 ? slideIndex+1 : 0);
        }
    };
   

  //  console.log(slideIndex);
  
        return (
            <>
            <Heading>
            <HeadingText>
                NEW ARRIVALS
            </HeadingText>
        </Heading>
            <Container>
                    <Arrow direction="left"  onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>

            <Wrapper  slideIndex={slideIndex}>
               {featuredProducts.map(item => (
                   <ProductSliderItem item={item} key={item.id} />
               ))}
            </Wrapper>

               <Arrow direction="right"  onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
            </Container>
            </>
        )
    
}

export default ProductSlider;
