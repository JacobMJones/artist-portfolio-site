import React from "react"
import styled from "styled-components"

const IndexCard = styled.div`
  width: ${props => props.width && props.width}px
  height: ${props => props.height && `${props.height}`}px;
  opacity: ${props => props.opacity && props.opacity};
  position:absolute;
  top:${props => props.top && `${window.innerHeight * props.top}px`};
  left:${props => props.left && `${window.innerWidth * props.left}px`};
  transition: all 500ms ease;
  background:${props => props.background && props.background}
`

class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, leftMultiplier, topMultiplier } = this.props.data
    const { currentlyShowing, isShowingArt, setFocusedCard } = this.props.state
    return (
      <IndexCard
        left={
          currentlyShowing === name
            ? 0.075
            : isShowingArt
            ? leftMultiplier
            : leftMultiplier
        }
        top={
          currentlyShowing === name
            ? 0.1
            : isShowingArt
            ? topMultiplier 
            : topMultiplier
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
        {currentlyShowing === name || (!isShowingArt && name)}
      </IndexCard>
    )
  }
}
export default Card


