import styled from "styled-components";

export const NavBarStyled = styled.header`
  height: 80px;
  width: 100%;
  background-color: #464646;
  display: flex;
  justify-content: space-between;
  & .LogoContainer{
    height: 100%;
    min-width: 100px;
    margin-left: 10px;
  }
  & .List{
    display: flex;
    align-items: center;
    height: 100%;
    &-item{
      margin-right: 25px;
      & a{
        color: #00CFEB;
      }
    }
  }
  
`