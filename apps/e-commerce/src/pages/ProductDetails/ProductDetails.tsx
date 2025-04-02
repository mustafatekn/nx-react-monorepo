import { useParams, useNavigate } from 'react-router-dom';
import { Breadcrumb, Button } from '@ui-library';
import productsData from '../../data/products.json';
import categoriesData from '../../data/categories.json';
import styles from './ProductDetails.module.scss';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = productsData.products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.notFound}>Product not found</h1>
          <Button onClick={() => navigate('/products')}>Back to Products</Button>
        </div>
      </div>
    );
  }

  const category = categoriesData.categories.find(c => c.name === product.category);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: product.name, href: `/products/${product.id}` }
          ]}
        />

        <div className={styles.grid}>
          <div className={styles.imageSection}>
            <img src={product.image} alt={product.name} className={styles.image} />
          </div>
          
          <div className={styles.infoSection}>
            <div className={styles.header}>
              <span className={styles.categoryBadge}>
                {category?.icon} {product.category}
              </span>
              <h1 className={styles.title}>{product.name}</h1>
              <div className={styles.meta}>
                <span className={styles.price}>${product.price}</span>
                <div className={styles.rating}>
                  <span className={styles.star}>★</span>
                  <span>{product.rating}</span>
                </div>
              </div>
            </div>

            <div className={styles.descriptionSection}>
              <h2>Product Description</h2>
              <p className={styles.description}>{product.description}</p>
            </div>

            <div className={styles.actions}>
              <div className={styles.stockInfo}>
                <span className={`${styles.stockStatus} ${product.stock > 0 ? styles.inStock : styles.outOfStock}`}>
                  {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
                {product.stock > 0 && <span className={styles.stockCount}>({product.stock} available)</span>}
              </div>
              <Button 
                onClick={() => console.log('Add to cart:', product.id)}
                disabled={product.stock === 0}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 