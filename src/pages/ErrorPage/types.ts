import ErrorsStatusCodes from './const';

export type ErrorsCodes = keyof typeof ErrorsStatusCodes;

export type OwnProps = {
    error: ErrorsCodes
};
