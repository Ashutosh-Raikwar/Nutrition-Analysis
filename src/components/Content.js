import React, { Component } from 'react';
import Searchfield from './Searchfield/Searchfield.js';
import AnalysisReport from './AnalysisReport/AnalysisReport.js';
import './Content.css';

class Content extends Component {
url;
  constructor() {
    super();
    this.state = {
      input: "",
      calories:"",
      totalFat:"",
      saturatedFat:"",
      transFat:"",
      cholesterol:"",
      sodium:"",
      totalCarbohydrates:"",
      dietaryFiber:"",
      totalSugars:"",
      includesAddedSugars:"",
      proteins:"",
      VitaminD:"",
      calcium:"",
      iron:"",
      potassium:"",

      display: false,
    }
  }

  onInputChange = (e) => {
    let input = e.target.value;
    this.setState({input: input})
  }

  onSearch = () => {
    let api ="https://api.edamam.com/api/nutrition-data?app_id=85d79af2&app_key=a02b7d9ff1e504805e34219f1f4288c9&nutrition-type=cooking&ingr=";
    let inputIngridients= this.state.input;
    this.url = api+inputIngridients;
    this.url = this.url.replace(/ /g,"%20");
    console.log(this.url);
    this.getdata();
  }

  getdata(){
    fetch(this.url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({calories: data.calories})
      this.setState({totalFat: Math.ceil(data.totalDaily.FAT?.quantity)})
      this.setState({saturatedFat:Math.ceil(data.totalDaily.FASAT?.quantity)})
      this.setState({cholesterol: Math.ceil(data.totalDaily.CHOLE?.quantity)})
      this.setState({sodium: Math.ceil(data.totalDaily.NA?.quantity)})
      this.setState({totalCarbohydrates: Math.ceil(data.totalDaily.CHOCDF?.quantity)})
      this.setState({dietaryFiber: Math.ceil(data.totalDaily.FIBTG?.quantity)})
      this.setState({totalSugars: Math.ceil(data.totalNutrients.SUGAR?.quantity)})
      // this.setState({includesAddedSugars: Math.ceil(data.totalNutrients.{"SUGAR.added"}.quantity)})
      let as= Math.ceil(data.totalNutrients.SUGAR.added.quantity)
      this.setState({includesAddedSugars:as})
      this.setState({proteins:Math.ceil(data.totalDaily.PROCNT?.quantity)})
      this.setState({VitaminD: Math.ceil(data.totalDaily.VITD?.quantity)})
      this.setState({calcium: Math.ceil(data.totalDaily.CA?.quantity)})
      this.setState({iron: Math.ceil(data.totalDaily.FE?.quantity)})
      this.setState({potassium: Math.ceil(data.totalDaily.K?.quantity)})

      this.setState({display:true} )
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="main">
        
        <Searchfield inputChange={this.onInputChange} onSearch={this.onSearch}/>
        
        
        {this.state.display === true?
        <AnalysisReport calories={this.state.calories}
        totalFat={this.state.totalFat}
        saturatedFat={this.state.saturatedFat}
        cholesterol={this.state.cholesterol}
        sodium={this.state.sodium}
        totalCarbohydrates={this.state.totalCarbohydrates}
        dietaryFiber={this.state.dietaryFiber}
        totalSugars={this.state.totalSugars}
        includesAddedSugars={this.state.includesAddedSugars}
        proteins={this.state.proteins}
        VitaminD={this.state.VitaminD}
        calcium={this.state.calcium}
        iron={this.state.iron}
        potassium={this.state.potassium}
        />
      :""}
        
      </div>
    );
  }
}

export default Content;
