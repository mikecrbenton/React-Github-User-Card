import React from 'react';
import styled from 'styled-components';


class DisplayCard extends React.Component {
   //DONT NEED IN A DISPLAY ELEMENT
   // constructor() {
   //    super();
   // }

   render() {
      return (
         <GitCard>
         <p>{this.props.card.name}</p>
            <img src={this.props.card.avatar_url}/>
            <p>{this.props.card.bio}</p>
            <p>{this.props.card.repos_url}</p>
         </GitCard>

      )
   }
}

export default DisplayCard;


const GitCard = styled.div`

`;