const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout');

class New extends React.Component {
  render() {
    return(
        <DefaultLayout title ="New Product page">

               <form action="/products" method="POST">
                img: <input type ="text" name="img"/> 
                 name: <input type="text" name="name" /><br/>
                 description: <input type="text" name="description" /><br/>
                 price: <input type="number" name="price" min ="1"/><br/>
                 qty: <input type="number" name="qty" min="0" /><br/>
                 <input type="submit" name="" value="Create Product"/>
               </form>
    
       </DefaultLayout>
    )
   } 
  }


module.exports = New;