import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; 

const ProductsList = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
        const productsCollection = await db.collection('products').get(); 
        const productsData = productsCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products: ', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Catalog</h1>
      <div className="products-list">
        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
               <h2>{product.name}</h2> 
              <h3>{product.type}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              {product.imageUrl && <img src={product.image} alt={product.name} />}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsList;
