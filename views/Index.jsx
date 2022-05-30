const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Index extends React.Component{
    render(){
        const { products } = this.props
        return (
            <DefaultLayout title ="index">
            <div>
                <nav>
                    <a href="/products/new"> Create New Product</a>
                </nav>
                <ul>
                    {
                        products.map(product=> {
                            return(
                                <li key={product._id}>
                                <p><a href= {`/products/${product._id}`}>{product.img}</a></p>
                                <p>{product.name}</p>
                                <p> Price: ${product.price}</p>
                                <p>  {product.qty} in stock </p>
                            
                               {/* <button> <a href={`/products/${product._id}/edit`}>{`Edit ${product.name}`}</a></button>
                                <form action={`/products/${product._id}?_method=DELETE`} method= "POST">
                                <input type="submit" value="DELETE" />
                 </form> */}
                                </li>

                            )
                        })
                    }
                </ul>
            </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index