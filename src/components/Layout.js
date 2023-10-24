import React, {Component} from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useParams} from "react-router-dom";
import News from "./News";
import App from "../App";
import LoadingBar from "react-top-loading-bar";

const NewsComponent = (props) => {

    const {category} = useParams()
    return (
        <News key={category} pageSize={5} country={'in'} category={category} setProgress={props.setProgress}/>
    )
}
class Layout extends Component {

    state= {
        progress: 0
    }
    setProgress=(progress)=>{
        this.setState({progress: progress})
    }
    router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={"/"} element={<App />}>
                <Route path={""} element={<News key={'general'} setProgress={this.setProgress} pageSize={5} country={'in'} category={'general'}/>}/>
                <Route path={":category"} element={<NewsComponent setProgress={this.setProgress}/>}/>
            </Route>
        )
    )

    render() {
        return (
            <div>
            <LoadingBar
                color='#f11946'
                height={3}
                progress={this.state.progress}
            />
            <RouterProvider router={this.router}/>
            </div>
        );
    }
}

export default Layout;