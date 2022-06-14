import React from 'react';
import './PlayerSearch.css';

const PlayerSearch = () => {
    return (
        <div className="searchContainer">
          <div className="searchfield">
            <input type="text" className="searchfield" placeholder="Enter Player Name" ></input>
          </div>    
        </div>
    )
}

export default PlayerSearch;