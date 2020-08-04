import React from 'react';
import './App.css';
import axios from 'axios';
import DisplayCard from './components/DisplayCard';

class App extends React.Component {
  constructor(){
     super();
     this.state = {
        card: [],
        followers: []
     }
  }

  componentDidMount() {
     axios.get('https://api.github.com/users/mikecrbenton')
      //.then( (result) => result.json())
      .then( (card) => { console.log(card.data); this.setState({ card : card.data })} )
      .catch( (error) => console.log("Error: ", error))
      console.log(this.state.card)
  }
  
  render(){
      return (
         <div className="App">
            <h1>GitHub User Cards</h1>
            <DisplayCard card={this.state.card}/>
         </div>
      );
  }

}

export default App;
