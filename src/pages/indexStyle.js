import styled from "styled-components"
const BannerContainer = styled.div`
  height: ${props => (props.isShowingArt ? "10vh" : "20vh")};
  position:fixed
  background:white
  width:100vw
  z-index:1
  transition: all 400ms ease;
`
const FullPage = styled.div`
overflow-x:hidden
overflow-y:scroll
height: 100vh
width: 100vw


`
const MenuCardsContainer = styled.div`
margin-top:25vh
overflow-y:hidden
  width: 100%;
`
export {BannerContainer, FullPage, MenuCardsContainer }
