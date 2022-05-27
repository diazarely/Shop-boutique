const React = require('react')

class Index extends React.Component{
    render(){
        const { products } = this.props
        return (
            <div>
                <nav>
                    <a href="/products/new"> Create New Product</a>
                </nav>
                <h1> Products Index Page</h1>
                <ul>
                    {
                        products.map((product, i)=> {
                            return(
                                <li>
                                <p><a href= {`/products/${i}`}>{product.img}</a></p>
                                <p>{product.name}</p>
                                <p> Price: ${product.price}</p>
                                <p>  {product.qty} in stock </p>
                                
                                </li>

                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index