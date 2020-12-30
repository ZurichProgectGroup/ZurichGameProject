import Image404 from 'Images/404.svg';
import Image500 from 'Images/500.svg';

const ErrorsStatusCodes = {
    404: {
        url: Image404,
        description: 'Wrong way',
    },
    500: {
        url: Image500,
        description: 'WE’LL FIX IT ASAP',
    },
} as const;

export default ErrorsStatusCodes;
