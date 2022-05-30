const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout');

class Show extends React.Component{
    render(){
        const product = this.props.product
        return(
            <DefaultLayout>
    <div>
      <h1> Show Page </h1>
          <p>{product.img}</p>
      <h2>{product.name}</h2>
          <p>description:{product.description}</p>
          <p> Price: ${product.price}</p>
          <p>  {product.qty} in stock </p>
      
      <form action={`/products/${product._id}?_method=DELETE`} method= "POST">
                     <input type="submit" value="DELETE" />
      </form>
      <button><a href={'/products'}> Back </a> </button>

      <button> <a href={`/products/${product._id}/edit`}>{`Edit ${product.name}`}</a></button>
      </div>
        </DefaultLayout>
        );
    }
}

module.exports = Show;