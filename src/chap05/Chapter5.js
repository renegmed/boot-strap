import React from 'react'; 
import { Link } from 'react-router-dom';  

function Chapter5(props) { 
    return (
      <div className="container-fluid">
        <div><b>Chapter 5 - Adding Content with Typography</b></div>
        <section className="d-flex flex-column"> 
          <Link to="/HeadlineTags"> Headline Tags </Link>   
          <Link to="/TextColors"> Text Colors </Link>          
          <Link to="/ParagraphsBlockquotes"> Paragraphs and Blockquotes </Link> 
          <Link to="/InlineTags"> Inline Tags </Link>
          <Link to="/Lists"> Lists </Link> 
          <Link to="/ListGroups"> List-groups with JavaScript Behavior </Link> 
          <Link to="/ResponsiveFloats"> Responsive Floats </Link> 
          <Link to="/FixedElementsJustifiedType"> Fixed Elements and Justified Type </Link>
        </section>  
      </div>
    ); 
}

export default Chapter5;