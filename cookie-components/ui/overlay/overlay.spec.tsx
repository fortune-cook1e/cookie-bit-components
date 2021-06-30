import React from 'react';
import { render } from '@testing-library/react';
import { BasicOverlay } from './overlay.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicOverlay />);
  const rendered = getByText('hello from Overlay');
  expect(rendered).toBeTruthy();
});
