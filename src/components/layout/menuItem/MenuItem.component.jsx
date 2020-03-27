import React from 'react'

const MenuItem = ({ title , subtitle , img , size }) => (
  <div className={`${size} menu-item`} style={{backgroundImage: `url(${img})`}}>
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">{subtitle}</span>
    </div>
  </div>
)

export default MenuItem;
