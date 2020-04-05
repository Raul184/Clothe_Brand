

const initState = {
  categories: [
    {
      title: 'hats' ,
      image: 'https://i.ibb.co/cvpntL1/hats.png' ,
      id: 1 ,
    },
    {
      title: 'jackets' ,
      image: 'https://i.ibb.co/px2tCc3/jackets.png' ,
      id: 2 ,
    },
    {
      title: 'sneakers' ,
      image: 'https://i.ibb.co/0jqHpnp/sneakers.png' ,
      id: 3 ,
    },
    {
      title: 'women' ,
      image: 'https://i.ibb.co/GCCdy8t/womens.png' ,
      id: 4 ,
      size: 'large'
    },
    {
      title: 'men' ,
      image: 'https://i.ibb.co/R70vBrQ/men.png' ,
      id: 5 ,
      size: 'large'
    }
  ]
}

const categoriesReducer = ( state=initState , action ) => {
  const { type , payload } = action
  switch (type) {
  
    default:
      return state
  }
}

export default categoriesReducer;