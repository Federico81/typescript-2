import { Component } from 'react'

interface MyClassComponentProps { subTitle: string }

interface MyClassComponentState { name: string }

class MyClassComponent extends Component<MyClassComponentProps, MyClassComponentState>
 {
  state = {
    name: 'Marco',
  }
  render() {
    return (
      <div>
        <h3>{this.props.subTitle}</h3>
        <p>{this.state.name.toUpperCase()}</p>
      </div>
    )
  }
}

export default MyClassComponent
