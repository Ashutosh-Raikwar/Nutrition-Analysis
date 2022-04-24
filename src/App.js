import React,{Component} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content";

class App extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Content />
            </div>
        )
    }
}

export default App;