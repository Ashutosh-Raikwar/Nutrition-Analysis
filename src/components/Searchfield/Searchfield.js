import React from "react";
import "./Searchfield.css";

const Searchfield =({inputChange, onSearch}) =>{
    return(
        <div className="SearchArea">
            <p>Enter an ingredient list list for what you are cooking, like "1 cup rice, 10 oz chickpeas", etc.
                Enter each ingredient on a new line.</p>
            <textarea onChange={inputChange} placeholder="Enter the food details" className="text-input fsize"/><br/>
            <button onClick={onSearch} className="fsize" >Search</button>
        </div>
    )
}

export default Searchfield;