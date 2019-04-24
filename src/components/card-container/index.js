import React from "react"
import Card from "../card"
const cards = [
  { name: "Nudes", leftMultiplier: 0.1, topMultiplier: 0.4 },
  { name: "Modern", leftMultiplier: 0.4, topMultiplier: 0.4 },
  { name: "Ink Paintings", leftMultiplier: 0.7, topMultiplier: 0.4 },
  { name: "Calligraphy", leftMultiplier: 0.1, topMultiplier: 0.7 },
  { name: "Ink Paintin4s", leftMultiplier: 0.4, topMultiplier: 0.7 },
  { name: "Ink Paint6ings", leftMultiplier: 0.7, topMultiplier: 0.7 },
]

class CardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        {cards.map(item => {
          return (
            <Card
              name={item.name}
              state={this.props.state}
              leftMultiplier={item.leftMultiplier}
              topMultiplier={item.topMultiplier}
              style={{ display: "inline-block" }}
            />
          )
        })}
      </div>
    )
  }
}
export default CardContainer

