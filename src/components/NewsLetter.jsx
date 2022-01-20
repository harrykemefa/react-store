import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  padding: 70px 20px;
  background: #0e0e0e;
  justify-content: space-around;
  align-items: center;


`;

const Heading = styled.h2`
 font-weight: 600;
 color: #fff;
`;

const FormGroup = styled.div`
display: flex;
justify-content: space-around;
align-items: center;

`;

const Input = styled.input`
border: 1px solid white;
background: none;
padding: 10px 25px;
color: #fff;
`;

const Button = styled.button`
    border: 1px solid;
    color: #000!important;
    background: #fff!important;
    border-color: #fff!important;
    padding: 10px 30px;
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
