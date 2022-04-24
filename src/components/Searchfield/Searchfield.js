import React from "react";

const Searchfield =({inputChange, onSearch}) =>{
    return(
        <div className=" text-center font-weight-normal mr-3 pb*5 h4" >
            <p >Enter an ingredient list list for what you are cooking, <p>like "1 cup rice, 10 oz chickpeas", etc.</p></p>
            <textarea onChange={inputChange} placeholder="Enter the food details" className="h4 lead rounded"/><br/>
            <button onClick={onSearch} className="btn btn-success rounded-pill border border-primary" >Search</button>
        </div>
    )
}

export default Searchfield;

