import styled from 'styled-components';
import {mobile} from '../responsive';


const Container = styled.div`
  display: flex;
  padding: 70px 60px;
  background: #0e0e0e;
  justify-content: center;
  align-items: center;
  ${mobile({display: "block", padding: "70px 20px"})}


`;

const Heading = styled.h2`
  flex: 1;
 font-weight: 600;
 color: #fff;
 ${mobile({marginBottom: "30px", fontSize: "1.4em"})}
`;

const FormGroup = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;

${mobile({justifyContent: "space-around"})}

`;

const Input = styled.input`
border: 1px solid white;
background: none;
padding: 13px 25px;
color: #fff;
flex:2;
`;

const Button = styled.button`
   flex: 1;
    border: 1px solid;
    color: #000!important;
    background: #fff!important;
    border-color: #fff!important;
    padding: 13px 30px;
    margin-left: 10px;
    cursor: pointer;
`;

  const NewsLetter  = () =>  {
   
        return (
            <Container>
                <Heading>
                    SIGN UP AND BE THE FIRST TO GET PROMOTIONS.
                </Heading>
                <FormGroup>
                    <Input placeholder="Your Email" />
                    <Button>
                        SUBSCRIBE
                    </Button>
                </FormGroup>
            </Container>
        )
    
  
}

export default NewsLetter;
