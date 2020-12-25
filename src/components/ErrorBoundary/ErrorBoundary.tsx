import React, { Component } from 'react';
import ErrorPage from 'Pages/ErrorPage';
import { Props, State } from './types';

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return <ErrorPage />;
        }

        return children;
    }
}

export default ErrorBoundary;
