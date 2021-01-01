
import React from 'react'
import { render } from '@testing-library/react'
import Button from '..'

test('button text', () => {
  const { getByText, debug } = render(<Button>点击</Button>);

  expect(getByText('点击')).toBeInTheDocument();
})
