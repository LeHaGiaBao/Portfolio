import React from 'react';
import {expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import HomeTest from '../../src/app/hometest';

test('Page', () => {
  render(<HomeTest />);
  expect(screen.getByRole('heading', {level: 1, name: 'HomeTest'})).toBeDefined();
});
