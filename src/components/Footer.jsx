import styled from 'styled-components';
import {Facebook, Instagram, Twitter, Pinterest} from '@material-ui/icons';

const Container = styled.div`

    display: flex;
    padding: 50px 20px;
    background: #0e0e0e;
    align-items: center;
   

`;

const LinkGroup = styled.div`
  display: flex;
  flex: 1;
  color: #fff;
  justify-content: center;
`;

const Right = styled.div`
display: flex;
flex-direction: column;
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
`;

const Center = styled.div`
display: flex;
flex-direction: column;
`;

const Link = styled.a`
 font-weight: 600;
 padding: 10px;
 cursor: pointer;
`


const FooterLogo = styled.h2`
    font-weight: 700;
    text-align: left;
    line-height: 1.5;
    font-size: 24px;
    color: #fff;
    cursor: pointer;

    &:before{
        display: inline-block;
        content: ' ';
        width: 44px;
        margin-right: 13px;
        background-color: #fff;
        vertical-align: middle;
        height: 1px;
    }

`

 const SocialContainer = styled.div`
  display: flex;
  

 `;

 const CopyRights = styled.div`
    display: flex;
    color: #fff;
    padding: 50px 20px;
    background: #0e0e0e;
    font-weight: 600;
    cursor: pointer;
    justify-content: flex-end;
 `;

 const SocialIcon = styled.div`
 padding: 15px 5px;
 cursor: pointer;
 `;
 
 const Footer = () =>  {
     
    return (
        <>
            <Container>
               <LinkGroup>
                   <Left>
                       <Link>
                       SHOP
                       </Link>
                       <Link>
                       ABOUT
                       </Link>
                       <Link>
                       FAQ
                       </Link>
                    </Left>
               </LinkGroup>
               <LinkGroup>
                  <Center>
                       <Link>
                       STORES
                       </Link>
                       <Link>
                       RETURNS
                       </Link>
                       <Link>
                       CONTACT
                       </Link>
             </Center>

               </LinkGroup>
               <LinkGroup>
               <Center>
                       <Link>
                       TERMS
                       </Link>
                       <Link>
                       LEGAL
                       </Link>
                       <Link>
                       PRIVACY
                       </Link>
             </Center>
               </LinkGroup>
               <LinkGroup>
                
                <Right>
                <FooterLogo>
                    DRIP.
                </FooterLogo>
                <SocialContainer >
                    <SocialIcon>
                        <Facebook />
                    </SocialIcon>

                    <SocialIcon>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
                </Right>
               </LinkGroup>
            </Container>
            <CopyRights>
                © Built By @HarryKemefa
            </CopyRights>
            </>
        )
    
}

export default Footer;
