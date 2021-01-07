export type FirstStepProps = {
    goNextStep?: () => void
    firstName: string
    secondName: string
    login: string
    setFirstName: (value: string) => void
    setSecondName: (value: string) => void
    setLogin: (value: string) => void
};

export type SecondStepProps = {
    goPrevStep?: () => void
    email: string
    password: string
    phone: string
    setEmail: (value: string) => void
    setPassword: (value: string) => void
    setPhone: (value: string) => void
};
