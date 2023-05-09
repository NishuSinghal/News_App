import React from 'react'

const NewsCard = (props) => {


    let { title, description, imageUrl, newsUrl, author, date, source } = props
    return (
        <div className='my-3'>
            <div className="card" style={{ width: "18rem" }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="  badge rounded-pill bg-danger">{source}</span>
                </div>
                <img src={!imageUrl ? "https://image.cnbcfm.com/api/v1/image/106816771-16%E2%80%A6723653-AFP_8VJ2Q2.jpeg?v=1613056691&w=1920&h=1080" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}

                    </h5>
                    <p className="card-text">{description}.</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} On {new Date(date).toLocaleString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsCard