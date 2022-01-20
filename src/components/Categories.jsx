import styled from "styled-components";
import {categoryList} from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
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
const Categories = () => {
   
        return (
            <>
            <Heading>
            <HeadingText>
                DRIP CATEGORIES
            </HeadingText>
        </Heading>
            <Container>
                {categoryList.map(item => (
                    <CategoryItem item={item} key={item.id} />
                ))}
            </Container>
            </>
        )
   
}

export default Categories
