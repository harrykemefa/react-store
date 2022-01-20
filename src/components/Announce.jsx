import styled from "styled-components"

const Container = styled.div`
  height: 40px;
  background: #0e0e0e;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  bottom: 0;
  position: fixed;
  bottom: 0;
  z-index: 3;
  width: 100%;

`
const Announce = () => {
    return (
        <Container>
           Get Access to Exclusive Deals.
        </Container>
    )
}

export default Announce;
