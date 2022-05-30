const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout');

module.exports = class Edit extends React.Component {
  render() {
      const product = this.props.product
    return(
        <DefaultLayout title ="Edit">
            <h1> {product.name.toUpperCase()} Edit page </h1>
               <form action={`/products/${product._id}?_method=PUT`} method="POST">
                img: <input type ="text" name="img"/> 
                 name: <input type="text" name="name" /><br/>
                 description: <input type="text" name="description" /><br/>
                 price: <input type="number" name="price" min ="1"/><br/>
                 qty: <input type="number" name="qty" min="0" /><br/>
                 <input type="submit" name="" value="Update Product"/>
               </form>
    <button> <a href= {'/products'}>Back</a></button>
       </DefaultLayout>
    )
   } 
  }


