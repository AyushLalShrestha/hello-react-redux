import React from 'react';
import ReactDOM from 'react-dom';


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'


import './index.css';
library.add(faStroopwafel)

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
         header: "React app Header",
         content: "The contents of the app will be here",
         count: 1
      }
      this.counter = 123;

      // If you don't define increaseCount as an arrow function, you have to bind the function to this
      // this.increaseCount = this.increaseCount.bind(this);

  };

  increaseCount = () => {
    console.log(this);
    let count = this.state.count + 1;
    this.setState({count: count});
  };

  componentDidMount() {
    this.increaseCount();
  };

  render() {
    return (
      <div>
      Hello {this.props.nameProp},
      The counter value is as <p> {this.counter} </p>
      <h2>{this.state.header}</h2>
      <p> {this.state.content} </p>
      The state count is as <p> {this.state.count} </p>
      <div>
        Favorite Food: <FontAwesomeIcon icon="stroopwafel" />
      </div>

      <button onClick={this.increaseCount} >Count + 1 </button>

      </div>
    );
  }
}

ReactDOM.render( <App nameProp="Ayush Lal Shrestha"/>, document.getElementById('root')
);
