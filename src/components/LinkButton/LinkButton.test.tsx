import React from 'react';
import { render } from '@testing-library/react';
import LinkButton from './LinkButton';

it('renders correctly', () => {
    const { asFragment } = render(<LinkButton isButton>test link</LinkButton>);

    expect(asFragment()).toMatchSnapshot();
});
