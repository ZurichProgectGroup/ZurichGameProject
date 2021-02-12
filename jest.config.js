module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
        '^Utils/(.*)': '<rootDir>/src/utils/$1',
    },
};
