import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_Products = [
  {id: 'p2', price:6 , title: "My First Book", description: "The first book I ever wrote",},
  {id: 'p3', price:3 , title: "My second Book", description: "The second book I ever wrote",},
  {id: 'p1', price:7 , title: "My Third Book", description: "The Third book I ever wrote",},
  {id: 'p5', price:4 , title: "My Fourth Book", description: "The Fourth book I ever wrote",}
]

const Products = (props) => {

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Products.map((product)=>(
             <ProductItem
             key = {product.id}
             id = {product.id}
             title={product.title}
             price={product.price}
             description={product.description}
           />
        ))}
       
      </ul>
    </section>
  );
};

export default Products;
