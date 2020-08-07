import React from 'react';
import styled from 'styled-components';

// COULD HAVE USED A FUNCTION COMPONENT
class DisplayCard extends React.Component {
   //DONT NEED IN A DISPLAY ELEMENT
   // constructor() {
   //    super();
   // }

   render() {
      return (
         <GitCard>

            <div className="card-header">
               <h1>{this.props.card.name}</h1>
               <img src={this.props.card.avatar_url}/>
            </div>

            <p className="git-bio">{this.props.card.bio}</p>
            <a href={this.props.card.avatar_url}>{this.props.card.repos_url}</a>
            
            <h3>Followers:</h3>
            <hr></hr>
            <div className="follower-container">
               {this.props.followers.map( (follower) => {
                  return <Follower>
                           {console.log(follower)}
                           <p>{follower.login}</p>
                           <img src={follower.avatar_url}/>
                        </Follower>
               })}
            </div>

         </GitCard>

      )
   }
}

export default DisplayCard;


const GitCard = styled.div`
   background-color: #FFF;
   border: 6px solid #009B77;
   box-shadow: 0px 0px 5px black; 
   border-radius: 10px;
   width: 50%;
   margin: 1em auto 0;

   .card-header{
      display: flex;
      justify-content: center;
      padding-top: 1em;
   }

   img{
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-left: 1em;
      box-shadow: 1px 1px 5px black;
   }

   .git-bio{
      font-weight: 700;
      font-size: 1.2rem;
   }

   a{
      color: #009B77;
      font-weight: 700;
   }

   hr{
      width: 80%;
   }

   .follower-container{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
   }
`;

const Follower = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 30%;
   margin-bottom: 1em;
   padding: 0 0 1em;

   p{
      font-weight: 700;
   }

   img{
      width: 80px;
      height: 80px;
      margin: 0;
   }
`;