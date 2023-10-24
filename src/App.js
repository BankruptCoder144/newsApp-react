import './App.css';
import React, {Component} from "react";
import MyNavBar from "./components/MyNavBar";
import {Outlet} from "react-router-dom";

export default class App extends Component {

    render() {
        return (
            <div>
                <MyNavBar/>
                <Outlet/>
            </div>
        )
    }
}
