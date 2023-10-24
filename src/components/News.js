import React, {Component} from 'react';
import NewsItem from "./NewsItem";
import {Button} from "react-bootstrap";
import MySprinner from "./MySprinner";
import PropTypes from "prop-types";

class News extends Component {

    static defaultProps = {
        pageSize:9,
        country: 'in',
        category: 'general'
    }

    static propTypes = {
        pageSize : PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            totalArticles: 1,
            loading: false
        }
    }

    componentDidMount() {
        this.setPageState(this.state.page)
    }

    async setPageState(page) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=350267cd86cd487b9639ddffa79341f4&page=${page}&pageSize=${this.props.pageSize}`
        this.setState({
            loading:true
        })
        let data = await fetch(url)
        let jsonData = await data.json()
        console.log(jsonData)
        this.setState({
            articles: jsonData.articles,
            page: page,
            totalArticles: jsonData.totalResults,
            loading: false})
    }
    handleNextClick=()=> {
        this.setPageState(this.state.page + 1)
    }

    handlePreviousClick=()=> {
        this.setPageState(this.state.page - 1)
    }

    render() {

        return (
        <>
            <div className={"container"}>
                <h2 className={"text-center"}>Top Headlines</h2>
                {this.state.loading && <MySprinner/>}
                { !this.state.loading && <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem imageUrl={element.urlToImage} title={element.title} description={element.description} newsUrl={element.url}/>
                        </div>
                    })}
                </div>
                }
            </div>
            <div className="container d-flex justify-content-between">
                <Button variant="dark" disabled={this.state.page<=1} onClick={this.handlePreviousClick}>&larr; Previous</Button>
                <Button variant="dark" disabled={this.state.page>=Math.ceil(this.state.totalArticles/this.props.pageSize)} onClick={this.handleNextClick}>Next &rarr;</Button>
            </div>
        </>
        );
    }
}

export default News;