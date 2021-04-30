export const mapToUser = (user: UserDTO): User => ({
    id: user.id,
    firstName: user.first_name,
    secondName: user.second_name,
    displayName: user.display_name,
    email: user.email,
    phone: user.phone,
    login: user.login,
    avatar: user.avatar && `https://ya-praktikum.tech/api/v2/resources${user.avatar}`,
});

export const toDTO = (user: User): UserDTO => ({
    first_name: user.firstName,
    second_name: user.secondName,
    display_name: user.displayName,
    email: user.email,
    phone: user.phone,
    login: user.login,
    avatar: user.avatar,
});
