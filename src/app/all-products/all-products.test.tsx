import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import AllProducts from './all-products';
import 'element-internals-polyfill';

test('renders AllProducts component', () => {
  const wrapper = render(<AllProducts />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});