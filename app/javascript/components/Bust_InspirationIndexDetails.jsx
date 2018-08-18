import React from "react";

const InspirationIndexDetails = props => {
  const {inspire, onDeleteClick = () => {}} = props;

    return(
      <div>
        <a href={inspire.url}><p>{inspire.title}</p></a>
          <a href={inspire.url}><img src={inspire.image_url} /></a>
          <ul>
          {inspire.hexes.map((hex, i) => (
              <li key= {index+i}>{hex.code}</li>
          ))}
          </ul>
          <button onClick={() => onDeleteClick(inspire.id)}>Delete</button>
      </div>
    )
  
}

export default InspirationIndexDetails;
