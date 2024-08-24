import { Avatar } from './Avatar'
import { CommentPost } from './CommentPost'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        src="http://github.com/alvescamila87.png" 
                    />                    
                    <div className={styles.authorInfo}>
                        <strong>Camila Alves</strong>
                        <span> Web Developer</span>
                    </div>
                </div>

                <time title="August, 24 at 01:00pm" dateTime="2024-08-24 01:38:42">Posted 1h ago</time>
            </header>
            <div className={styles.content}>
            <p>Hey guys! 👋</p>
            <p>I've posted a new project in my portfolio. It's a project that I made in NLW Return, event from Rocketseat. The project's name is DoctorCare 🚀</p>
            <p>👉{' '}<a href="">jane.design/doctorcare</a></p>
            <p>
                <a href="">#newproject</a>{' '}
                <a href="">#nlw</a>{' '}
                <a href="">#rocketseat</a>{' '}
            </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Leave your feedback</strong>

                <textarea 
                    placeholder='Leave a comment...'>
                </textarea>

                <footer> 
                    <button type="submit">Post</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <CommentPost />
                <CommentPost />
                <CommentPost />
            </div>
        </article>
    )
}