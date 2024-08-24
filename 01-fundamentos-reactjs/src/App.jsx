import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"
import styles from './App.module.css'
import './global.css'



function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Camila"
          content="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "        
          />
          <Post 
            author="Madalena"
            content="Post related to the social media"        
          />
        </main>
      </div>
    </div>
  )
}

export default App


