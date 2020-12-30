import React from 'react';
import './ErrorPage.css';
import LinkButton from 'Components/LinkButton';
import type { Props } from './types';
import ErrorsData from './const';

const ErrorPage = ({ error = 500 }: Props) => (
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
