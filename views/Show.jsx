const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout');

class Show extends React.Component{
    render(){
        const product = this.props.product
        const productQty = product.qty === 0 ? "OUT OF STOCK" : product.qty
         
        return(
            <DefaultLayout>
   <div class= "all-show">
       
      <div class= "img">
          <p><img src= { ` ${product.img}`} width="400" height="400" ></img></p>
          </div>
      <div class = "product-info"><h2>{product.name}</h2>
          <p>description:{product.description}</p>
          <p> Price: ${product.price}</p>
         
          <p> Stock: {productQty } </p>
      
      <form action={`/products/${product._id}?_method=DELETE`} method= "POST">
                     <input type="submit" value="DELETE" />
      </form>
      <button><a href={'/products'}> Back </a> </button>

      <button> <a href={`/products/${product._id}/edit`}>{`Edit ${product.name}`}</a></button>
      </div>
      </div>
        </DefaultLayout>
        );
    }
}

module.exports = Show;