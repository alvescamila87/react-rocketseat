import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"
import styles from './App.module.css'
import './global.css'

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

// array de objetos: array com vários posts
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/alvescamila87.png',
      name: 'Camila Alves',
      role: 'Web Developer @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Hey guys! 👋' },
      { type: 'paragraph', content: "I've posted a new project in my portfolio. It's a project that I made in NLW Return, event from Rocketseat. The project's name is DoctorCare 🚀" },
      { type: 'link', content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date('2024-08-20 07:23:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Hey guys! 👋' },
      { type: 'paragraph', content: "I've posted a new project in my portfolio. It's a project that I made in NLW Return, event from Rocketseat. The project's name is DoctorCare 🚀" },
      { type: 'link', content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date('2024-08-24 07:23:00'),
  },
];

/* 
iteração 

const algo = posts.forEach(post => {
 return 1;
});

const algo = posts.map(post => {
  return 1;
})

*/

function App() {
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
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App


