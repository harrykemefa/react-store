import {useState} from 'react';
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import {sliderItems} from "../data";
import {mobile} from '../responsive';
import Slider from "react-slick";

const Container = styled.div`
width: 100%;
height: 100vh;
/* display: flex;
position: relative;
overflow: hidden; */
`;
// const Arrow = styled.div`
// width: 50px;
// height: 50px;
// background-color: #fff7f7;
// border-radius: 50%;
// display: flex;
// align-items: center;
// justify-content: center;
// position: absolute;
// top: 0;
// bottom: 0;
// left: ${props=> props.direction === "left" && "10px"};
// right: ${props=> props.direction === "right" && "10px"};
// margin: auto;
// cursor: pointer;
// opacity: 0.8;
// z-index: 2;
// `;

const Wrapper = styled.div`
 height: 100%;
 display: flex;
 /* transform: translateX(${(props) => props.slideIndex * -100}vw); */
 /* transition: all 1.5s ease;
  */
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  /* background-color: #${props=> props.bg}; */
`;

const ImgContainer = styled.div`
   height: 100%;
    flex: 1;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    ${mobile({ zIndex: "5", position: "absolute", top: "15%", display: "flex", alignItems: "center", flexDirection: "column"})};
`;

const Image = styled.img`
 height: 80%;
`;

const Title = styled.h1`
 font-size: 60px;
 ${mobile({ fontSize: "30px", textAlign: "center"})}
 
`;

const Desc = styled.p`
 margin: 50px 0;
 font-size: 20px;
 font-weight: 500;
 letter-spacing: 3px;

 ${mobile({ letterSpacing: "0.5px", fontSize: "15px", textAlign: "center"})}
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;




const MainSlider = () => {
    // const [slideIndex, setSlideIndex] = useState(0);
    // const handleClick = (direction) => {

    //     if(direction === "left") {
    //         setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
    //     }else{
    //         setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
    //     }
    // };

    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1
        //  autoplay: true,
        // autoplaySpeed: 2000,
        // cssEase: "linear",
       
      };
    return (
        <Container>
    {/* <Arrow direction="left">
        <ArrowLeftOutlined />
    </Arrow> */}
        <Slider {...settings}>
        {sliderItems.map(item => (
                <Slide bg={item.bg} key={item.id}>
                    <Wrapper>
                    <ImgContainer>
                <Image src={item.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button> BUY NOW</Button>
                </InfoContainer>
                    </Wrapper>
             
            </Slide>
            ))}
        </Slider>
        {/* <Arrow direction="right">
        <ArrowRightOutlined />
    </Arrow> */}
  </Container>
    )
}

export default MainSlider
