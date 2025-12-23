import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Filter, X, SlidersHorizontal } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import { Button } from '@/components/ui/button';
import { products, categories } from '@/data/products';
import { cn } from '@/lib/utils';

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under ₹500', min: 0, max: 500 },
  { label: '₹500 - ₹1000', min: 500, max: 1000 },
  { label: '₹1000 - ₹1500', min: 1000, max: 1500 },
  { label: 'Above ₹1500', min: 1500, max: Infinity },
];

const stockFilters = [
  { label: 'All', value: 'all' },
  { label: 'In Stock', value: 'in-stock' },
  { label: 'Made to Order', value: 'made-to-order' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const selectedCategory = searchParams.get('category') || '';
  const selectedPrice = searchParams.get('price') || '0';
  const selectedStock = searchParams.get('stock') || 'all';

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (selectedCategory && product.category !== selectedCategory) {
        return false;
      }

      // Price filter
      const priceRange = priceRanges[parseInt(selectedPrice)];
      if (priceRange && (product.price < priceRange.min || product.price > priceRange.max)) {
        return false;
      }

      // Stock filter
      if (selectedStock === 'in-stock' && !product.inStock) {
        return false;
      }
      if (selectedStock === 'made-to-order' && !product.isMadeToOrder) {
        return false;
      }

      return true;
    });
  }, [selectedCategory, selectedPrice, selectedStock]);

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const activeFiltersCount = [selectedCategory, selectedPrice !== '0', selectedStock !== 'all'].filter(Boolean).length;

  return (
    <>
      <Helmet>
        <title>Shop Handmade Products | Peshal Handicraft</title>
        <meta
          name="description"
          content="Browse our collection of handmade crochet products, saree tassels, home decor, and gift items. Each piece is uniquely crafted by skilled artisans."
        />
      </Helmet>

      <Layout>
        <div className="min-h-screen">
          {/* Header */}
          <section className="bg-muted/30 py-12 md:py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                  Our Collection
                </h1>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Discover handcrafted treasures made with love and care
                </p>
              </motion.div>
            </div>
          </section>

          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden flex items-center justify-between">
                <p className="text-muted-foreground text-sm">
                  {filteredProducts.length} products found
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="gap-2"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                      {activeFiltersCount}
                    </span>
                  )}
                </Button>
              </div>

              {/* Sidebar Filters */}
              <motion.aside
                initial={{ height: 0 }}
                animate={{ height: isFilterOpen ? 'auto' : 0 }}
                className={cn(
                  "lg:w-64 flex-shrink-0 overflow-hidden lg:!h-auto",
                  !isFilterOpen && "lg:overflow-visible"
                )}
              >
                <div className="bg-card rounded-xl p-6 border border-border lg:sticky lg:top-24">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-display text-lg font-semibold flex items-center gap-2">
                      <Filter className="w-5 h-5" />
                      Filters
                    </h2>
                    {activeFiltersCount > 0 && (
                      <Button variant="ghost" size="sm" onClick={clearFilters}>
                        Clear all
                      </Button>
                    )}
                  </div>

                  {/* Categories */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3">Category</h3>
                    <div className="space-y-2">
                      <button
                        onClick={() => updateFilter('category', '')}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                          !selectedCategory
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-muted"
                        )}
                      >
                        All Categories
                      </button>
                      {categories.map((cat) => (
                        <button
                          key={cat.slug}
                          onClick={() => updateFilter('category', cat.slug)}
                          className={cn(
                            "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                            selectedCategory === cat.slug
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:bg-muted"
                          )}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3">Price Range</h3>
                    <div className="space-y-2">
                      {priceRanges.map((range, index) => (
                        <button
                          key={range.label}
                          onClick={() => updateFilter('price', index.toString())}
                          className={cn(
                            "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                            parseInt(selectedPrice) === index
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:bg-muted"
                          )}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Stock Status */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">Availability</h3>
                    <div className="space-y-2">
                      {stockFilters.map((filter) => (
                        <button
                          key={filter.value}
                          onClick={() => updateFilter('stock', filter.value)}
                          className={cn(
                            "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                            selectedStock === filter.value
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:bg-muted"
                          )}
                        >
                          {filter.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.aside>

              {/* Products Grid */}
              <div className="flex-1">
                <div className="hidden lg:flex items-center justify-between mb-6">
                  <p className="text-muted-foreground text-sm">
                    {filteredProducts.length} products found
                  </p>
                </div>

                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {filteredProducts.map((product, index) => (
                      <ProductCard key={product.id} product={product} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground mb-4">No products found matching your filters.</p>
                    <Button variant="outline" onClick={clearFilters}>
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
