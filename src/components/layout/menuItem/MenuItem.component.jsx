import React from 'react'
import { Link } from 'react-router-dom'


const MenuItem = ({ title , subtitle , img , size , linkUrl }) => (
  <div className={`${size} menu-item`}>
    <div className="background-img" style={{backgroundImage: `url(${img})`}}>
    </div>
    <Link to={`${linkUrl}`} className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">{subtitle}</span>
    </Link>
  </div>
)

export default MenuItem;
