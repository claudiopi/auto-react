import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import ShoppingCart from './shopping-cart';
import 'element-internals-polyfill';

test('renders ShoppingCart component', () => {
  const wrapper = render(<ShoppingCart />);
  expect(wrapper).toBeTruthy();
});