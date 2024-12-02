import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import ProductDetails from './product-details';
import 'element-internals-polyfill';

test('renders ProductDetails component', () => {
  const wrapper = render(<ProductDetails />);
  expect(wrapper).toBeTruthy();
});