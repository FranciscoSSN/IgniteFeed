import { Header } from "./Compoments/Header";
import { Post, PostType } from "./Compoments/Post";
import { Sidebar } from "./Compoments/Sidebar";

import styles from "./App.module.css";

import "./global.css";

// eslint-disable-next-line no-unused-vars
// array de dados dos usuarios para dos posts
const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/FranciscoSSN.png",
      name: "Francisco Silveira",
      role: "CTO ITM",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "paragraph", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-06-21 13:34:10"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://pps.whatsapp.net/v/t61.24694-24/312270297_652761882983851_4427491813413181209_n.jpg?ccb=11-4&oh=01_AdQBUQS3gQO88llTr40wPjoHKjo5K7lXGA7Heaf_T_ZIOA&oe=649E1B8C",
      name: "Jorge Silva",
      role: "Embedded Developer ITM",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content:" É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀, da uma ajuda lá e curti"},
      { type: "paragraph", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-06-21 13:34:10"),
  },
];

// iteração -> criar uma estrutura de repetição

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
