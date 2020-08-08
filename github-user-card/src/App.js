import React from 'react';
import './App.css';
import axios from 'axios';
import DisplayCard from './components/DisplayCard';
import styled from 'styled-components';

class App extends React.Component {
  constructor(){
     super();
     this.state = {
        card: [],
        followers: [],
        searchText: ""
     }
  }
  // ************componentDidMount()*******************
  // AFTER INITIAL RENDER- RUNS ONCE ONLY
  // CDMount - USE TO MAKE INITIAL FETCH/ API CALL
  // SET STATE
  componentDidMount() {
     axios.get('https://api.github.com/users/tetondan')
      .then( (card) => { this.setState({ card : card.data })} )
      .catch( (error) => console.log("Error: ", error))

      axios.get('https://api.github.com/users/tetondan/followers')
      .then( (followers) => { this.setState({ followers : followers.data })} )
      .catch( (error) => console.log("Error: ", error))
  }

  handleChange = (e) => {
   this.setState(
      { ...this.state, // <--- YOU ALMOST FORGOT THIS STEP - ASK VINCE ABOUT
         searchText: e.target.value 
      });
   //would dynamic be [e.target.name] : e.target.value ?
  }

  /* // ALWAYS TAKES THESE 2 ARGS
  componentDidUpdate(prevProps, prevState){
     //checks for changing state -> lets us do something with the data that's changed
     if(this.state.keyonobject !== prevState.keyonobject){
         console.log()
     }
     console.log("State Updated", this.state.--------)
  } */

  getUser = (e) => {
   e.preventDefault();

   axios.get(`https://api.github.com/users/${this.state.searchText}`)
      .then( (card) => this.setState({card: card.data}))
      .catch( (error) => console.log("Error: ", error))
   
      //possibly put this in CDU ?
   axios.get(`https://api.github.com/users/${this.state.searchText}/followers`)
      .then( (followers) => { this.setState({ followers : followers.data })} )
      .catch( (error) => console.log("Error: ", error))
  };
  
  render(){
      return (
         <MainContainer className="App">
            <h1 className="page-header">GitHub User Cards</h1>
            <input
               type="text"
               value={this.state.searchText}
               onChange={this.handleChange}
            />
            <button onClick={this.getUser}>Git Get</button>
            <DisplayCard card={this.state.card} followers={this.state.followers}/>
         </MainContainer>
      );
  }

}

export default App;

const MainContainer = styled.div`
   background: url()
 
   padding: 1em;

   .page-header{
      margin: 0;
      font-size: 3rem;
      font-weight: 900;
      text-shadow: 1px 1px 2px gray;
   }

   input{
      border: 4px solid #009B77;
      border-radius: 5px;
      padding: .5em;
      margin-right: 1em;
      font-weight: 900;
      box-shadow: 1px 1px 5px gray;
   }
   button{
      border: 4px solid #009B77;
      border-radius: 5px;
      padding: .5em 1em;
      font-weight: 900;
      box-shadow: 1px 1px 5px gray;
   }
`;
