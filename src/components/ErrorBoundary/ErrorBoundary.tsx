import React, { Component } from 'react';
import ErrorPage from 'Pages/ErrorPage';
import { OwnProps as Props, OwnState as State } from './types';

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
            return <ErrorPage error={500} />;
        }

        return children;
    }
}

export default ErrorBoundary;
