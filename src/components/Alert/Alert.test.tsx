import React from 'react';
import { render } from '@testing-library/react';
import Alert from './Alert';

it('renders correctly', () => {
    const { asFragment } = render(<Alert>test alert</Alert>);

    expect(asFragment()).toMatchSnapshot();
});
