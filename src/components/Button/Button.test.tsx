import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from './Button';

it('renders correctly', () => {
    const { asFragment } = render(<Button>button</Button>);

    expect(asFragment()).toMatchSnapshot();
});

it('calls callback on click', () => {
    const mockCallback = jest.fn();

    const { getByText } = render(<Button onClick={mockCallback}>button</Button>);

    fireEvent.click(getByText('button'));

    expect(mockCallback).toHaveBeenCalledTimes(1);
});
