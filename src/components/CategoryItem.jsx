import styled from "styled-components";
import {mobile} from '../responsive';
 
const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
${mobile({ margin: "10px auto"})}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5em;
  ${mobile({ borderRadius: "0"})}
  
`;

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;

`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
 border: none;
 padding: 10px;
 background-color: #eee;
 color: gray;
 font-weight: bolder;
 cursor: pointer;
`;
 const CategoryItem = ({item:{id, title, img}}) =>   {
  
        return (
            <Container>
               <Image src={img} />
               <Info>
                    <Title>
                        {title}
                    </Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Container>
        )
    }


export default CategoryItem
