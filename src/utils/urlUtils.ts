import { isServer } from 'Utils/_helpers';

export const locationParams = Object.fromEntries(new URLSearchParams((!isServer && document.location.search) || ''));
export default locationParams;
