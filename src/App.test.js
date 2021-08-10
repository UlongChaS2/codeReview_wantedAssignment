import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);

  expect(getByText(/learn/i)).toBeInTheDocument();
});

// 유닛테스트에서 필요하지만 지금은 딱히 쓰이지 않는 것 같다
