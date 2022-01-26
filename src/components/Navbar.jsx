import styled from 'styled-components'
import {Badge} from '@material-ui/core'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import {mobile} from '../responsive';
const Container = styled.div`
  height: 60px;
  ${mobile({backgroundColor: ""})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding: "10px 0"})}
`;

const Left = styled.div`
 flex: 1;
 display:flex;
 align-items: center
`;
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: "none"})}
`;

const Logo = styled.h1`
    font-weight: 300;
    ${mobile({fontSize: "1.4em"})}
   
`;

const SearchContainer = styled.div`
   display: flex;
   align-items: center;
   border: 0.5px solid lightgray;
   margin-left: 25px;
   padding:5px;
   ${mobile({marginLeft: "5px"})}
`;
const Input = styled.input`
  border: none;
  ${mobile({width: "50px"})}
`;
const Center = styled.div`
 flex: 1;
 text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display:flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "space-evenly", flex: "2"})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 10px;
`;




const Navbar = ()  => {
    return (
        <Container>
           <Wrapper>
              <Left> 
                  <Language>
                      EN
                    </Language> 
                    <SearchContainer>
                            <Input placeholder="Search" />
                        <Search style={{color:"gray", fontSize:16}}  />
                    </SearchContainer>
             </Left>
              <Center> <Logo>DRIP</Logo> </Center>
              <Right> 
                 <MenuItem> Register </MenuItem>
                 <MenuItem>Sign In</MenuItem>
                 <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                 </MenuItem>  
              </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
