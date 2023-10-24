import React, {useEffect, useState} from 'react';
import NewsItem from "./NewsItem";
import MySprinner from "./MySprinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const apiKey = process.env.REACT_APP_NEWS_API

    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalArticles, setTotalArticles] = useState(0)
    useEffect(() => {
        setPageState(page)
    },[])

    const setPageState = async (page) => {
        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`
        let data = await fetch(url)
        let jsonData = await data.json()
        console.log(jsonData)
        setArticles(articles.concat(jsonData.articles))
        setPage(page)
        setTotalArticles(jsonData.totalResults)
        props.setProgress(100)
    }

    const fetchNextUsers = () => {
        setPageState(page + 1)
    }

    // const handleNextClick = () => {
    //     this.setPageState(page + 1)
    // }
    //
    // const handlePreviousClick = () => {
    //     this.setPageState(page - 1)
    // }

    return (
        <>
            <div className={"container"}>
                <h2 className={"text-center"} style={{marginTop :'60px'}}>Top Headlines - {props.category}</h2>
                {/*{this.state.loading && <MySprinner/>}*/}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchNextUsers}
                    hasMore={articles.length < totalArticles}
                    loader={<MySprinner/>}
                >
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem imageUrl={element.urlToImage} title={element.title}
                                          description={element.description} newsUrl={element.url}/>
                            </div>
                        })}
                    </div>
                </InfiniteScroll>
            </div>
            {/*<div className="container d-flex justify-content-between">*/}
            {/*    <Button variant="dark" disabled={this.state.page <= 1}*/}
            {/*            onClick={this.handlePreviousClick}>&larr; Previous</Button>*/}
            {/*    <Button variant="dark"*/}
            {/*            disabled={this.state.page >= Math.ceil(this.state.totalArticles / props.pageSize)}*/}
            {/*            onClick={this.handleNextClick}>Next &rarr;</Button>*/}
            {/*</div>*/}
        </>
    );
}
export default News;

News.defaultProps = {
    pageSize: 5,
    country: 'in',
    category: 'general'
}

News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
}