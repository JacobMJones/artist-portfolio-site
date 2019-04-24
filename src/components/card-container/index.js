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



  const CardContainer = (props) => {
    return <div>
        {cards.map((item, index) => {
          return (
            <Card
            key={index + 'card'}
              data={item}
              state={props.state}                  
            />
          )
        })}
      </div> 
  }

export default CardContainer

