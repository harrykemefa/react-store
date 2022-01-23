import styled from "styled-components";
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)),
     url("./img/slide2.jpg");
     background-size: cover;
     display: flex;
     align-items: center;
     justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: #fff;
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

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
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
const Register = () => {
    return (
        <Container>
            <Wrapper>
                    <Title> CREATE AN ACCOUNT </Title>
                    <Form>
                            <Input placeholder="First Name" />
                            <Input placeholder="Last Name" />
                            <Input placeholder="Username" />
                            <Input placeholder="Email" />
                            <Input placeholder="Password" />
                         
                            <Input placeholder="Confirm Password" />
       
                       <Agreement>By Creating an account, I consent to the processing of my personal data in accordance with the Privacy Policy</Agreement>
                       <Button>Create</Button>
                    </Form>
            </Wrapper>
        </Container>
    )
}


export default Register;
