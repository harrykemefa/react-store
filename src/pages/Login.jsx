import styled from "styled-components";
import {mobile} from '../responsive';
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)),
     url("./img/slide1.jpg");
     background-size: cover;
     display: flex;
     align-items: center;
     justify-content: center;

     ${mobile({backgroundPositionX: "center"})}
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 30px;
    background-color: #fff;

    ${mobile({width: "60%"})}
`;
const Form = styled.form`
  display: flex;
  flex-wrap : wrap;
`;

const Title = styled.h1`
 font-size: 24px;
 font-weight: 400;

`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
width: auto;
padding: 16px 50px;
color: #fff;
background: #000;
border-color: #000;
font-weight: 400;
cursor: pointer;
margin: 15px 0;

&:hover{
   transition: all 0.5s ease;
   background-color : transparent;
   color: #000;
   border: 1px solid gray;
}
`;

const Link = styled.a`
 margin: 0 10px;
 cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
              <Wrapper>
                    <Title> SIGN IN </Title>
                    <Form>
                         
                            <Input placeholder="Email" />
                            <Input placeholder="Password" />
                       <Button>Sign In</Button>
                    </Form>
                    <Link>DON'T REMEMBER PASSWORD?</Link>
                       <Link>CREATE A NEW ACCOUNT</Link>
            </Wrapper>
        </Container>
    )
}


export default Login;
