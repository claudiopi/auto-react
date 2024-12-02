import { redirect } from 'react-router-dom';
import Home from './home/home';
import AllProducts from './all-products/all-products';
import ProductDetails from './product-details/product-details';
import ShoppingCart from './shopping-cart/shopping-cart';

export const routes = [
  { index: true, loader: () => redirect('home') },
  { path: 'home', element: <Home />, text: 'Home' },
  { path: 'all-products', element: <AllProducts />, text: 'All Products' },
  { path: 'product-details', element: <ProductDetails />, text: 'Product Details' },
  { path: 'shopping-cart', element: <ShoppingCart />, text: 'Shopping Cart' }
];
