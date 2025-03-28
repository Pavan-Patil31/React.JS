import React from "react";
import useProducts from "./useProducts";
import './ProductList.css'
import { useState } from "react";

const ProductList = () => {
  const { products, loading, deleteProduct,refreshProducts } = useProducts(
    "https://fakestoreapi.com/products"
  );

  // console.log(products);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading</p>;

  
  return (
    <div>
      {/* Hey There... */}
      <h1 className="heading">Product List</h1>
   <div className="titleFilter">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      </div>
<br></br>
<br></br>
    
      {filteredProducts.length == 0 ? (
        <button onClick={refreshProducts} className="btn btn-info">Refresh</button>
      ) : (
        <>

<table class="table">
  {/* <thead class="table-light"> */}
  <thead className="tableHead">
    <th>#</th>
    <th>Title</th>
    <th>Image</th>
    {/* <th>Ratings</th> */}
    <th>Action</th>
  </thead>
  <br></br>
  <br></br>
  <tbody>
  {filteredProducts.map((p, index) => (
    <tr key={index}>
             <td>{p.id}</td>
             <td> {p.title} </td>
             <td> <img src={p.image} width="150" height="150"></img></td>
             {/* <td><h4>{p.rating}</h4></td> */}
              <td><button onClick={() => deleteProduct(p.id)} className="btn btn-primary">Delete</button></td>  
</tr>
))}
            
  </tbody>
</table>
        
        </>
      )}
    </div>
  );
};

export default ProductList;