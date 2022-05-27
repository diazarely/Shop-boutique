const React = require('react')

class Show extends React.Component{
    render(){
        const product = this.props.product
        return(
    <div>
      <h1> Show Page </h1>
          <p>{product.img}</p>
      <h2>{product.name}</h2>
          <p>description:{product.description}</p>
          <p> Price: ${product.price}</p>
          <p>  {product.qty} in stock </p>
      
      <button><a href={'/products'}> Back </a> </button>
      </div>
        
        );
    }
}

module.exports = Show;