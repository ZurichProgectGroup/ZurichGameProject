import { ForumTheme, ForumThemeShort } from 'types/ForumTheme';

export const forumThemes: ForumThemeShort[] = [
    {
        id: 1,
        title: 'Пряничный переполох в конце года',
        desc: 'Декабрь без сна - обычная история. Спрос превышает предложение уже лет 8. Но в этом году всё гораздо серьезнее.',
        lastMessage: {
            date: '12 дек 12:30',
            userName: 'goopta',
        },
        messagesCount: 12,
        author: {
            userId: 123,
            imgUrl: 'https://picsum.photos/200',
            userName: 'ololosha',
        },
    },
    {
        id: 2,
        title: 'Пряничный переполох в конце года',
        desc: 'Декабрь без сна - обычная история. Спрос превышает предложение уже лет 8. Но в этом году всё гораздо серьезнее.',
        lastMessage: {
            date: '13 дек 12:30',
            userName: 'goopta1',
        },
        messagesCount: 12,
        author: {
            userId: 123,
            imgUrl: 'https://picsum.photos/200',
            userName: 'ololosha',
        },
    },
];

export const theme: ForumTheme = {
    id: 1,
    title: 'Пряничный переполох в конце года',
    desc: ' Декабрь без сна - обычная история. Спрос превышает предложение уже лет 8.\n'
        + '            Но в этом году всё гораздо серьезнее.\n'
        + '            Я открыла сначала ИП, а потом и пряничную мастерскую.\n'
        + '            Вчера выдала всем сотрудникам первую зарплату.',
    author: {
        userId: 123,
        imgUrl: 'https://picsum.photos/200',
        userName: 'ololosha',
    },
    uploadDate: '12 апреля',
    messagesCount: 12,
    comments: [
        {
            id: 1,
            author: {
                userId: 123,
                imgUrl: 'https://picsum.photos/200',
                userName: 'ololosha',
            },
            date: '12 апреля 12:32',
            message: 'Все здорово, пряники красивые! А дальше что? Пряничный ажиотаж закончится, надо будет что то другое печь? Есть мысли? Ну на пасху куличи, а между пряниками и куличами?',
            answers: [
                {
                    id: 2,
                    author: {
                        userId: 123,
                        imgUrl: 'https://picsum.photos/200',
                        userName: 'ololosha',
                    },
                    date: '12 апреля 12:32',
                    message: 'Все здорово, пряники красивые! А дальше что? Пряничный ажиотаж закончится, надо будет что то другое печь? Есть мысли? Ну на пасху куличи, а между пряниками и куличами?',
                },
                {
                    id: 3,
                    author: {
                        userId: 1,
                        imgUrl: 'https://picsum.photos/200',
                        userName: 'igor',
                    },
                    date: '12 апреля 12:32',
                    message: 'Кайф',
                },
            ],
        },
        {
            id: 32,
            author: {
                userId: 123,
                imgUrl: 'https://picsum.photos/200',
                userName: 'ololosha',
            },
            date: '12 апреля 12:32',
            message: 'Купи слона',
            answers: [],
        },
    ],
};
