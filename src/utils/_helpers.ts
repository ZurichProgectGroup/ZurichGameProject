// eslint-disable-next-line import/prefer-default-export
export const isServer = !(
    typeof window !== 'undefined'
    && window.document
    && window.document.createElement
);
