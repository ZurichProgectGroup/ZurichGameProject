import React from 'react';
import Helmet from 'react-helmet';
import { defaultDescription, defaultTitle } from 'Components/PageMeta/const';
import Props from './types';

const PageMeta = ({ title = defaultTitle, description = defaultDescription }: Props) => (
    <Helmet>
        <title>{title}</title>
        <meta
            name="description"
            content={description}
        />
    </Helmet>
);

export default PageMeta;
