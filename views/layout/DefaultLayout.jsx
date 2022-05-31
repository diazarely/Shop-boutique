const { header } = require('express/lib/response')
const React =require('react')



class DefaultLayout extends React.Component{
    render(){
    return (
        <html lang="en">
            <head>
                <title> {this.props.title}</title>
                <link rel ="stylesheet" href="css/styles.css"></link>
            </head>
            <body>
                <div class= "header"> Baby Boutique
                </div>
                <h1>{this.props.title}</h1>
                {this.props.children}
            </body>
        </html>
    )
}}

module.exports = DefaultLayout