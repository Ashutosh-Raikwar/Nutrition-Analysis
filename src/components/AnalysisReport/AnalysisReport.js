import React from "react";
import './AnalysisReport.css'

const AnalysisReport = ({ calories, totalFat, saturatedFat,cholesterol, sodium, totalCarboydrates,dietaryFiber,totalSugars,includesAddedSugars, proteins, VitaminD, calcium, iron, potassium }) => {
    return (
        <div id="facts">
            <div >
                <h1>Nutrition Facts</h1> <hr style={{height:"7px", backgroundColor:"black"}} />
                
                <span style={{fontSize:"20px"}}>Amount Per Serving
                    <p className="bold" style={{fontSize:"25px"}}> Calories   <span id="calories">{calories}</span></p>
                    <hr style={{height:"5px", backgroundColor:"black"}}/>
                </span>
                
                <p style={{textAlign:"right"}}>%Daily Value*</p>
                
                <table>
                    <tbody>
                        <tr>
                            <td className="bold">Total fat</td>
                            <td className="align_right">{totalFat + "%"} </td>
                            <hr style={{height:"2px", backgroundColor:"red"}}/>
                        </tr><hr/>
                        
                        <tr>
                            <td>Saturated fat</td>
                            <td className="align_right">{saturatedFat} %</td>
                        </tr><hr/>
                        
                        <tr>
                            <td>Trans fat</td>
                            <td className="align_right">{ } %</td>
                        </tr><hr/>
                        
                        <tr>
                            <td className="bold">Cholesterol</td>
                            <td className="align_right">{cholesterol } %</td>
                        </tr><hr/>
                        
                        <tr>
                            <td className="bold">Sodium</td>
                            <td className="align_right">{sodium} %</td>
                        </tr><hr/>
                        
                        <tr>
                            <td className="bold width">Total Carbohydrates</td>
                            <td className="align_right">{totalCarboydrates} %</td>
                        </tr><hr/>
                        
                        <tr>
                            <td>Dietary Fiber</td>
                            <td className="align_right">{ dietaryFiber} %</td>
                        </tr><hr/>
                        
                        <tr>
                            <td>Total Sugars</td>
                            <td className="align_right">{ totalSugars} %</td>
                        </tr><hr/>
                        
                        <tr>
                            <td>Includes-Added Sugars</td>
                            <td className="align_right">{includesAddedSugars } %</td>
                        </tr><hr/>
                        
                        <tr>
                            <td className="bold">Proteins</td>
                            <td className="align_right">{proteins} %</td>
                        </tr><hr/>
                        
                        <tr>
                            <td>Vitamin D</td>
                            <td className="align_right">{VitaminD} %</td>
                        </tr><hr/>
                        
                        <tr>
                            <td>Calcium</td>
                            <td className="align_right">{calcium} %</td>
                        </tr><hr/>
                        
                        <tr>
                            <td>Iron</td>
                            <td className="align_right">{iron} %</td>
                        </tr><hr/>
                        
                        <tr>
                            <td>Potassium</td>
                            <td className="align_right">{potassium} %</td>
                        </tr><hr/>
                    </tbody>
                </table>
                <p style={{fontSize:"13px", lineHeight:"2"}}>*Percent Daily Values are based on a 2000 calorie diet</p>
            </div>
        </div>
    )
}

export default AnalysisReport;