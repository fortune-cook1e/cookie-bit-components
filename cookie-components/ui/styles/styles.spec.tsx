import React from 'react';
import { render } from '@testing-library/react';
import { BasicStyles } from './styles.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicStyles />);
  const rendered = getByText('hello from Styles');
  expect(rendered).toBeTruthy();
});
