import React from "react"
import styled from "styled-components"

const BannerImage = styled.div`
height:100%
`;
const Title = styled.div`
  font-size: ${props => (props.fullBanner ? 2 :1)}em;
`

const HorizontalCenter = styled.div`
  text-align: center;
  height: ${props => (props.fullBanner ? '5%' :'20%')};
  
  transition: all 500ms ease;
`
export default props => (
  <HorizontalCenter fullBanner={props.state.isShowingArt}>
    <BannerImage
      as="img"
      src="/images/banner-name.svg"
      fullBanner={props.fullBanner}
    />

    <Title  fullBanner={props.fullBanner}>Hsu Yung Chin</Title>

  </HorizontalCenter>
)
