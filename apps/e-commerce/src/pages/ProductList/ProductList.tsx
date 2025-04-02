import { useState } from 'react';
import { Card, Breadcrumb, Pagination, Input, Dropdown } from '@ui-library';
import productsData from '../../data/products.json';
import categoriesData from '../../data/categories.json';
import { useNavigate } from 'react-router-dom';
import styles from './ProductList.module.scss';

const PLACEHOLDER_IMAGE = 'https://picsum.photos/400/300';

const sortOptions = [
  { label: 'Name (A-Z)', value: 'name-asc' },
  { label: 'Name (Z-A)', value: 'name-desc' },
  { label: 'Price (Low to High)', value: 'price-asc' },
  { label: 'Price (High to Low)', value: 'price-desc' }
];

export const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});
  const [sortBy, setSortBy] = useState('name-asc');
  const navigate = useNavigate();
  const itemsPerPage = 8;

  // Reset page when filters change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const handleImageError = (productId: number) => {
    setImageErrors(prev => ({
      ...prev,
      [productId]: true
    }));
  };

  const sortProducts = (products: typeof productsData.products) => {
    return [...products].sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        default:
          return 0;
      }
    });
  };

  const filteredProducts = sortProducts(
    productsData.products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const categories = ['All', ...categoriesData.categories.map(category => category.name)];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' }
          ]}
        />
        
        <div className={styles.filtersSection}>
          <div className={styles.filtersTop}>
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className={styles.searchInput}
            />
            <Dropdown
              options={sortOptions}
              value={sortBy}
              onChange={handleSortChange}
              placeholder="Sort by"
              className={styles.sortDropdown}
            />
          </div>
          <div className={styles.categoryButtons}>
            {categories.map((category) => {
              const categoryData = category === 'All' 
                ? { icon: '🏷️' } 
                : categoriesData.categories.find(c => c.name === category);
              
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                >
                  <span className={styles.categoryIcon}>{categoryData?.icon}</span>
                  <span>{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.productsGrid}>
          {paginatedProducts.map((product) => (
            <Card
              key={product.id}
              onClick={() => navigate(`/products/${product.id}`)}
              className={styles.card}
            >
              <div className={styles.imageContainer}>
                <img
                  src={imageErrors[product.id] ? PLACEHOLDER_IMAGE : product.image}
                  alt={product.name}
                  className={styles.image}
                  onError={() => handleImageError(product.id)}
                />
              </div>
              <div className={styles.details}>
                <div className={styles.header}>
                  <span className={styles.categoryBadge}>
                    {categoriesData.categories.find(c => c.name === product.category)?.icon} {product.category}
                  </span>
                  <h3 className={styles.title}>{product.name}</h3>
                  <p className={styles.description}>{product.descriptionSummary}</p>
                </div>
                <div className={styles.footer}>
                  <p className={styles.price}>${product.price}</p>
                  <div className={styles.rating}>
                    <span className={styles.star}>★</span>
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className={styles.paginationContainer}>
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