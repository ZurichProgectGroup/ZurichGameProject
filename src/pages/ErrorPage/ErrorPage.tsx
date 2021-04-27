import React from 'react';
import './ErrorPage.css';
import LinkButton from 'components/LinkButton';
import type { OwnProps as Props } from './types';
import ErrorsData from './const';

const ErrorPage = ({ error = 404 }: Props) => (
    <div className="error-page">
        <img src={ErrorsData[error].url} alt={`${error}`} className="error-page__img" />
        <p className="error-page__desc">
            {ErrorsData[error].description}
        </p>
        <LinkButton to="/" className="error-page__link">
            {'< Back'}
        </LinkButton>
    </div>
);

export default ErrorPage;
