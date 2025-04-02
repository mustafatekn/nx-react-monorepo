import { useState } from 'react';
import { Card, Breadcrumb, Pagination, Input } from '@ui-library';
import productsData from '../../data/products.json';
import categoriesData from '../../data/categories.json';
import { useNavigate } from 'react-router-dom';
import './ProductList.css';

const PLACEHOLDER_IMAGE = 'https://picsum.photos/400/300';

export const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});
  const navigate = useNavigate();
  const itemsPerPage = 8;

  const handleImageError = (productId: number) => {
    setImageErrors(prev => ({
      ...prev,
      [productId]: true
    }));
  };

  const filteredProducts = productsData.products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const categories = ['All', ...categoriesData.categories.map(category => category.name)];

  return (
    <div className="product-list-container">
      <div className="product-list-content">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' }
          ]}
        />
        
        <div className="filters-section">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="category-buttons">
            {categories.map((category) => {
              const categoryData = category === 'All' 
                ? { icon: '🏷️' } 
                : categoriesData.categories.find(c => c.name === category);
              
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                >
                  <span className="category-icon">{categoryData?.icon}</span>
                  <span>{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="products-grid">
          {paginatedProducts.map((product) => (
            <Card
              key={product.id}
              onClick={() => navigate(`/products/${product.id}`)}
              className="product-card"
            >
              <div className="product-image-container">
                <img
                  src={imageErrors[product.id] ? PLACEHOLDER_IMAGE : product.image}
                  alt={product.name}
                  className="product-image"
                  onError={() => handleImageError(product.id)}
                />
              </div>
              <div className="product-details">
                <div className="product-header">
                  <span className="category-badge">
                    {categoriesData.categories.find(c => c.name === product.category)?.icon} {product.category}
                  </span>
                  <h3 className="product-title">{product.name}</h3>
                </div>
                <div className="product-footer">
                  <p className="product-price">${product.price}</p>
                  <div className="product-rating">
                    <span className="star">★</span>
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="pagination-container">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}; 