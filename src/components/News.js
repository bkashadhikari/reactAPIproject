// import React, { useEffect, useState } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner'
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

// const News = (props) => {
//     const [articles, setArticles] = useState([])
//     const [loading, setLoading] = useState(false)
//     const [page, setPage] = useState(1)
//     const [totalResults, setTotalResults] = useState(0)
//     // document.title = `${this.CFL(props.category)}-NewsMonkey`


//    const CFL = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1)
//     }

//     const updateNews = async () => {
//         props.setProgress(40)
//         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=76a051856da34c3bb6260af85875d5f9&page=${page}&pageSize=${props.pageSize}`
//         setLoading(true)
//         let data = await fetch(url)
//         // props.setProgress(50)
//         let parsedData = await data.json()
//         // props.setProgress(70)
//         console.log(parsedData)
//         setArticles(parsedData.articles)
//         setTotalResults(parsedData.totalResults)
//         setLoading(false)
//         props.setProgress(100)
//     }
//     useEffect(() => {
//         updateNews()
//     })


//     // const handlePrevClick = async () => {
//     //     updateNews()
//     //     setPage(page - 1)
//     // }

//     // const handleNextClick = async () => {
//     //     updateNews()
//     //     setPage(page + 1)
//     // }
//     const fetchMoreData = async () => {
//         setPage(page + 1)
//         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=76a051856da34c3bb6260af85875d5f9&page=${page}&pageSize=${props.pageSize}`
//         setLoading(true)
//         let data = await fetch(url)
//         let parsedData = await data.json()
//         setArticles(articles.concat(parsedData.articles))
//         setTotalResults(parsedData.totalResults)
//         setLoading(false)
//     };
//     return (
//         <>
//             <h3 className='text-center my-4'>NewsMonkey - Top {CFL(props.category)} Headlines</h3>
//             {loading && <Spinner />}
//             <InfiniteScroll
//                 dataLength={articles.length}
//                 next={fetchMoreData}
//                 hasMore={articles.length !== totalResults}
//                 loader={loading && <Spinner />}

//             >

//                 <div className="container">
//                     <div className="row">
//                         {articles.map((element, index) => {
//                             return <div className=" col-lg-4 mt-4" key={index}>
//                                 <NewsItem title={element.title ? element.title.slice(0, 40) : ''} desc={element.description ? element.description.slice(0, 85) : ''} imageUrl={element.urlToImage ? element.urlToImage : "https://media.cnn.com/api/v1/images/stellar/prod/230519154304-jerome-powell-0519-restricted.jpg?c=16x9&q=w_800,c_fill"} url={element.url} author={element.author ? element.author : 'Unknown'} date={element.publishedAt} source={element.source.name} />
//                             </div>
//                         })}
//                     </div>
//                 </div>
//             </InfiniteScroll>
//         </>
//     )
// }
// News.defaultProps = {
//     country: 'us',
//     pageSize: 9,
//     category: 'health'
// }
// News.propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string
// }
// export default News

import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // document.title = `${CFL(props.category)}-NewsMonkey`

    const CFL = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    const updateNews = async () => {
        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=58ce4b5f2bb1486089dd15dbc67b93c1&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        props.setProgress(30)
        let parsedData = await data.json()
        props.setProgress(70)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }

    useEffect(() => {
        updateNews();
    }, [])

    const fetchMoreData = async () => {
        setPage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=58ce4b5f2bb1486089dd15dbc67b93c1&page=${page+1}&pageSize=${props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };
    return (
        <>
            <h3 className='text-center my-4'>NewsToday - Top {CFL(props.category)} Headlines</h3>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className=" col-lg-4 mt-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 40) : ''} desc={element.description ? element.description.slice(0, 85) : ''} imageUrl={element.urlToImage ? element.urlToImage : "https://media.cnn.com/api/v1/images/stellar/prod/230519154304-jerome-powell-0519-restricted.jpg?c=16x9&q=w_800,c_fill"} url={element.url} author={element.author ? element.author : 'Unknown'} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    country: 'us',
    pageSize: 9,
    category: 'health'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News