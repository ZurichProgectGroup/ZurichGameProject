import React from 'react';
import { render } from '@testing-library/react';
import Title from './Title';

it('renders correctly', () => {
    const { asFragment } = render(<Title text="test title" />);

    expect(asFragment()).toMatchSnapshot();
});
