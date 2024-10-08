import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './CommentPost.module.css'

export function CommentPost({ content }) {
    return (
        <div className={styles.commentPost}>
            <Avatar hasBorder={false} src="http://github.com/alvescamila87.png" alt=''/>
            
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

                    <p>{content}</p>
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