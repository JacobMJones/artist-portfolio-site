import React from "react"
import styled from "styled-components"

const IndexCard = styled.div`
  width: ${props => props.width && props.width}px
  height: ${props => props.height && `${props.height}`}px;
  opacity: ${props => props.opacity && props.opacity};
  position:absolute;
  top:${props => props.top && props.top};
  left:${props => props.left && props.left};
  transition: all 500ms ease;
  background:${props => props.background && props.background}
`

class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, leftMultiplier, topMultiplier } = this.props
    const { currentlyShowing, isShowingArt, setFocusedCard } = this.props.state
    return (
      <IndexCard
        left={
          currentlyShowing === name
            ? `${window.innerWidth * 0.075}px`
            : isShowingArt
            ? `${window.innerWidth * leftMultiplier}px`
            : `${window.innerWidth * leftMultiplier}px`
        }
        top={
          currentlyShowing === name
            ? `${window.innerHeight * 0.1}px`
            : isShowingArt
            ? `${window.innerHeight * topMultiplier}px`
            : `${window.innerHeight * topMultiplier}px`
        }
        width={
          currentlyShowing === name
            ? (window.innerWidth / 5) * 4.25
            : isShowingArt
            ? 0
            : window.innerWidth / 5
        }
        height={
          currentlyShowing === name
            ? window.innerHeight / 1.2
            : isShowingArt
            ? 0
            : window.innerHeight / 4
        }
        opacity={currentlyShowing === name ? 1 : isShowingArt ? 0 : 1}
        background={"whitesmoke"}
        onClick={() => {
          setFocusedCard(name)
        }}
      >
        {this.props.state.currentlyShowing === this.props.name ||
          (!this.props.state.isShowingArt && this.props.name)}
      </IndexCard>
    )
  }
}
export default Card
