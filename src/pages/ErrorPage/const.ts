import Image404 from 'Images/404.svg';
import Image500 from 'Images/500.svg';
import { ErrorsDataType } from './types';

const ErrorsData: ErrorsDataType = {
    404: {
        url: Image404,
        description: 'Wrong way',
    },
    500: {
        url: Image500,
        description: 'WE’LL FIX IT ASAP',
    },
};

export default ErrorsData;
