import styled from "styled-components";

export const HeroStyled=styled.section`
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  & .Hero_Img{
    height: 250px;
  }

  & .Hero_Heading{
    width: 50vw;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: right;
    align-items: flex-end;
    &-head1{
      font-size: 1rem;
      font-weight: 500;
    }

    &-head2{
      font-size: 2.5rem;
      text-shadow: 0 0 4px #34D399, 0 0 5px #34D399;
    }
    
    &-head3{
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
`