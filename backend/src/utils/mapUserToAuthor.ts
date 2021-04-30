import { User } from '../types';

export default function mapUserToAuthor(user: User) {
    const {
        display_name: displayName, id, first_name: firstName, avatar,
    } = user;

    return {
        id,
        avatar: avatar ? `https://ya-praktikum.tech/api/v2/resources${avatar}` : null,
        name: displayName || firstName,
    };
}
