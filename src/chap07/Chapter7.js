import React from 'react'; 
import { Link } from 'react-router-dom';  

function Chapter7(props) { 
    return (
      <div className="container-fluid">
        <div><b>Chapter 7 - Images, Tables, and Cards</b></div>
        <section className="d-flex flex-column"> 
          <Link to="/Images"> Images </Link>   
          <Link to="/ImageFigures"> Images Figures </Link>          
          <Link to="/FontAwesome"> Font Awesome </Link> 
          <Link to="/Cards"> Cards </Link>
          <Link to="/CardColorsShadows"> Cards with Colors and Shadows </Link> 
          <Link to="/CardDecksGroups"> Card Decks and Groups </Link> 
          <Link to="/CardColumns"> Card Columns </Link> 
          <Link to="/Tables"> Tables </Link>
          <Link to="/Borders"> Borders </Link> 
          <Link to="/MediaObjects"> Media Objects </Link>  
        </section>  
      </div>
    ); 
}

export default Chapter7;