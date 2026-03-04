import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({prod}) => {
  return (
    <div className="col-12 col-md-6 col-lg-3">
                            <div className="card" style={{width: "14.7rem"}}>
                                <img src={prod?.thumbnail} className='card-img-top' alt=""/>
                                    <div className="card-body">
                                        <h5 className="card-title">{prod?.title}</h5>
                                        <p className="card-text text-truncate">{prod?.description}</p>
                                        <p>price:{prod?.price}</p>
                                        <Link to={`/${prod?.id}`} className="btn btn-primary">Get More Info</Link>
                                    </div>
                            </div>
                        </div>
  )
}

export default Card
