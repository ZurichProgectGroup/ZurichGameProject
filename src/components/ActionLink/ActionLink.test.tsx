import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ActionLink from './ActionLink';

it('renders correctly', () => {
    const { asFragment } = render(<ActionLink onClick={() => {}}>test link</ActionLink>);

    expect(asFragment()).toMatchSnapshot();
});

it('calls callback on click', () => {
    const mockCallback = jest.fn();

    const { getByText } = render(<ActionLink onClick={mockCallback}>link</ActionLink>);

    fireEvent.click(getByText('link'));

    expect(mockCallback).toHaveBeenCalledTimes(1);
});
