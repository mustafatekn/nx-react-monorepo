import { useParams, useNavigate } from 'react-router-dom';
import { Breadcrumb, Button, Card } from '@ui-library';
import productsData from '../../data/products.json';
import './ProductDetails.css';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = productsData.products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="product-details-container">
        <h1 className="product-not-found">Product not found</h1>
        <Button onClick={() => navigate('/products')}>Back to Products</Button>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: product.name, href: `/products/${product.id}` }
        ]}
      />

      <div className="product-details-content">
        <Card>
          <Card.Header>
            <h2 className="product-title">{product.name}</h2>
          </Card.Header>
          <Card.Content>
            <div className="product-grid">
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <p className="product-price">${product.price}</p>
                <p className="product-description">{product.description}</p>
                <div className="product-rating">
                  <span className="star">★</span>
                  <span>{product.rating}</span>
                </div>
                <p className="product-category">Category: {product.category}</p>
                <p className="product-stock">Stock: {product.stock} units</p>
                <Button onClick={() => alert('Added to cart!')}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}; 