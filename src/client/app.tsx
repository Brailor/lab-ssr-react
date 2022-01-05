import React from 'react'
import {View, Button, CodeEditor} from '@instructure/ui'

class Example extends React.Component {
    constructor (props: React.PropsWithChildren<{}>) {
        super(props)
      this.state = { code: `function findSequence(goal) {
    function find(start, history) {
      if (start == goal)
        return history;
      else if (start > goal)
        return null;
      else
        return find(start + 5, "(" + history + " + 5)") ||
               find(start * 3, "(" + history + " * 3)");
    }
    return find(1, "1");
  }` }
    }
  
    handleChange = (value: any) => {
      this.setState({ code: value})
    }
  
    render () {
      return (
        <CodeEditor
          label='code editor'
          value={this.state.code}
          language='javascript'
          options={{ lineNumbers: false }}
          onChange={this.handleChange}
        />
      )
    }
  }
const App = () => {
    const click = () => {
        console.log("clicked button")
    }
    return (<View>
        <Button onClick={click}>
            Hello there
        </Button>
        <Button>
            Hello There 2
        </Button>

        <Example />
    </View>)
}

export default App