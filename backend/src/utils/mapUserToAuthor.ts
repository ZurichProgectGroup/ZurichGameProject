import { User } from '../types';

export default function mapUserToAuthor(user: User) {
    const {
        display_name: displayName, id, first_name: firstName, avatar,
    } = user;

    return {
        id,
        avatar: avatar ? `https://ya-praktikum.tech/${avatar}` : null,
        name: displayName || firstName,
    };
}
