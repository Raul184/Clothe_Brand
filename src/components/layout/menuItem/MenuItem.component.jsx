import React from 'react'

const MenuItem = ({ title , subtitle , img , size }) => (
  <div className={`${size} menu-item`}>
    <div className="background-img" style={{backgroundImage: `url(${img})`}}>
    </div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">{subtitle}</span>
    </div>
  </div>
)

export default MenuItem;
