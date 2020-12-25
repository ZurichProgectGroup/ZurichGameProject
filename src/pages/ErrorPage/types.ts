import { FC } from 'react';

export type ErrorsValuesTypes = '404' | '500';

export type ErrorsDataType = {
    [error in ErrorsValuesTypes]: {
        url: string,
        description: string
    }
};

export type OwnProps = {

};

export type Prop = FC<OwnProps>;
