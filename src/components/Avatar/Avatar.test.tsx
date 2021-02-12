import React from 'react';
import { render } from '@testing-library/react';
import Avatar from './Avatar';

it('renders correctly', () => {
    const { asFragment } = render(<Avatar name="test name" />);

    expect(asFragment()).toMatchSnapshot();
});
