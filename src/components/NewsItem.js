import React from 'react'

const NewsItem = (props)=> {

        let { title, desc, imageUrl, url, author, date, source } = props
        return (
            <div className='container'>
                <div className="card">
                   <div style={{display:'flex', justifyContent:'end', position:'absolute', right:'0'}}>
                   <span className=" badge bg-secondary" style={{borderRadius:'0px', borderTopLeftRadius:'4px', borderBottomLeftRadius:'4px'}}>
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                   </div>
                    <img src={imageUrl} className="card-img-top" style={{ height: '180px' }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{desc}...</p>
                        <p className="card-text"> <small className="text-muted"> By {author} on {new Date(date).toGMTString()} </small></p>
                        <a rel="noreferrer" href={url} target='_blank' className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
