import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './CommentPost.module.css'

export function CommentPost() {
    return (
        <div className={styles.commentPost}>
            <img src="http://github.com/alvescamila87.png" alt=''></img>
            
            <div className={styles.commentPostBox}>
                <div className={styles.commentPostContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Camila Alves</strong>
                            <time title="August, 24 at 01:00pm" dateTime="2024-08-24 01:38:42">About an 1h ago</time>
                        </div>

                        <button title='Delete comment'>
                            <Trash size={24} />
                        </button>
                   </header>

                    <p>Good job Camila, Congrats!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Like <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}