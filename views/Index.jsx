const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Index extends React.Component{
    render(){
        const { products } = this.props

        
        return (
            <DefaultLayout >
            <div>
                <ul>
                    <div class= "products">
                    {
                        products.map(product=> {
                            return(
                                
                                <li key={product._id} >
                                <p><a href= {`/products/${product._id}`}>< img src={product.img} width="200" height="200"></img></a></p>
                                <p>{product.name}</p>
                                <p> Price: ${product.price}</p>
                                <p>  Stock : {product.qty === 0 ? "OUT OF STOCK" : product.qty}  </p>
                            
                               <button><a href= {`/products/${product._id}`}>Buy</a></button>
                                </li>

                            )
                        })
                    }
                    </div>
                </ul>
            </div>
                <nav class="new-product">
                    <a href="/products/new"> Create New Product</a>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index