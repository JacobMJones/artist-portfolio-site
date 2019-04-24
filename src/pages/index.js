import React from "react"
import Banner from "../components/banner"
import CardContainer from "../components/card-container"
import "./index.css"
import { FullPage } from "./indexStyle"

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { setFocusedCard: name => this.setFocusedCard(name) }
  }

  updateState = keyValuePairs => {
    this.setState({ ...keyValuePairs })
  }

  setFocusedCard = name => {
    if (this.state.isShowingArt) {
      this.updateState({
        isShowingArt: false,
        currentlyShowing: "",
      })
    } else {
      this.updateState({
        isShowingArt: true,
        currentlyShowing: name,
      })
    }
  }

  render() {
    return (
      <FullPage>
        <Banner state={this.state} />
        <CardContainer state={this.state} />
      </FullPage>
    )
  }
}
export default HomePage
