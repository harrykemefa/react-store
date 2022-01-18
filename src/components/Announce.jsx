import styled from "styled-components"

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bolder;

`
const Announce = () => {
    return (
        <Container>
           Get access to exclusive deals.
        </Container>
    )
}

export default Announce;
