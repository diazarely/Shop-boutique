const React = require('react');

class New extends React.Component {
  render() {
    return(
        <div>
               <h1>New Product page</h1>
               <form action="/products" method="POST">
                img: <input type ="text" name="img"/> 
                 name: <input type="text" name="name" /><br/>
                 description: <input type="text" name="description" /><br/>
                 price: <input type="number" name="price" min ="1"/><br/>
                 qty: <input type="number" name="qty" min="0" /><br/>
                 <input type="submit" name="" value="Create Product"/>
               </form>
       </div>);
   } 
  }


module.exports = New;