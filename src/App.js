import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import MyNavBar from "./components/MyNavBar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
        <div>
          <MyNavBar/>
            <News pageSize={5} country={'us'} category={'science'}/>
        </div>
    )
  }
}
