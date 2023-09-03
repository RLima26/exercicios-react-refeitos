import { PostType } from "../components/Post/Index";

export const postsDefault: PostType[] = [
    {
        id: 1,
        author: {
          avatarUrl: 'http://github.com/diego3g.png',
          name: 'Diego Fernandes',
          role: 'CTO @ Rocketseat',
        },
        content: [
          {type: 'paragraph', content: 'Fala galeraa 👋'},
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀.'},
          {type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2023-05-03 21:35:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'http://github.com/RLima26.png',
            name: 'Robson Leitão',
            role: 'Desenvolvedor Web',
        },
        content: [
            {type: 'paragraph', content: 'Fala galeraa 👋'},
            {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀.'},
            {type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2023-05-15 21:35:00'),
    },
]