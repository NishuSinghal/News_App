import React from 'react'
import { useEffect,useState } from 'react'
import NewsCard from './NewsCard'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

const News =(props)=> {
const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(true)
const [page, setPage] = useState(1)
const [totalResults, settotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    const example = async () => {
        console.log("Nishu");
        // setUploading(true)
        const response = await fetch('https://bharatbills.in/papi/service.php', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'token': '8768bcc8ff1c1cd5ce768b60c6f7b19f',
                'user': 18,
            },
            
            body: JSON.stringify({ type: "ledger", fdate: '2022-07-01', tdate: '2022-07-31'})
        })
        let d=await response.json();
        console.log(d);
    }


    const update = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
example();
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json();
        props.setProgress(70)
        console.log(parsedData);
        setArticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setLoading(false)

        props.setProgress(100)

    }

    //useeffect componentDidMount jese work karta h ,render ke bad run hoga ,kisi cheex ke change hone par kuch perform karne ke liye
useEffect(() => {
  update();
  document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`
//   eslint-disable-next-line
}, [])

    // async componentDidMount() {
        // this.update();
        // console.log("cdm");
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=84e51a44f05d48d384607561b792c028&page=1&pageSize=${props.pageSize}`
        // this.setState({
        //     loading: true
        // })
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // })
    // }

    const fetchMoreData = async () => {
        // console.log("before "+this.state.page);
        // this.setState({page:this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=84e51a44f05d48d384607561b792c028&page=${page+1}&pageSize=${props.pageSize}`
        setPage(page+1)
        // console.log("after state "+this.state.page);

        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
    }

    // handlePrevClick = async () => {
    //     console.log("previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=84e51a44f05d48d384607561b792c028&${this.state.page - 1}&pageSize=${props.pageSize}`
    // this.setState({
    //     loading: true
    // })
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //     page: this.state.page - 1,
    //     articles: parsedData.articles,
    //     loading: false
    // })
    //     this.setState({ page: this.state.page - 1 })
    //     this.update();
    // }

    // handleNextClick = async () => {
    //     console.log("next");
    // if (!this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)) {

    // }
    // else {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=84e51a44f05d48d384607561b792c028&${this.state.page + 1}&pageSize=${props.pageSize}`
    //     console.log(props.country);
    //     console.log(props.category);

    //     this.setState({
    //         loading: true
    //     })
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData);
    //     this.setState({
    //         page: this.state.page + 1,
    //         articles: parsedData.articles,
    //         loading: false
    //     })
    // }
    //     this.setState({ page: this.state.page + 1 })
    //     this.update();
    // }

        //  console.log("render"); 
        return (
            <>
                
                <h2 className='my-4' style={{marginTop:'90px'}}>News Monkey - Top {capitalizeFirstLetter(props.category) } Headlines</h2>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {/* {!this.state.loading && this.state.articles.map((element) => { */}
                            {/* // console.log(element); */}
                            
                            {articles.map((element) => {
//                                 console.log("url=");
// console.log(element.url);
// console.log("url after=");
// console.log(element.title);
                                return <div className="col-md-4" key={element.url}>
                                    <NewsCard title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                        </div>
                </InfiniteScroll>
                    {/* </div> */}

                {/* <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrevClick} className="btn btn-dark">&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
                </div> */}
                {/* </div> */}
            </>
        )
    
}
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

News.ppropTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}


export default News