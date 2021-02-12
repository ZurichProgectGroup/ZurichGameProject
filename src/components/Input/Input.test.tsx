import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

it('renders correctly', () => {
    const { asFragment } = render(<Input labelText="test input" />);

    expect(asFragment()).toMatchSnapshot();
});
