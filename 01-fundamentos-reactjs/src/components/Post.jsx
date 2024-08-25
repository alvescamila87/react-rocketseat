import { format, formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { Avatar } from './Avatar'
import { CommentPost } from './CommentPost'
import styles from './Post.module.css'

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const comments = [
    1,
    2,
    3,
];

export function Post({ author, publishedAt, content }) {
    //console.log(props)

    const publishedDateFormatted = format(publishedAt, "LLLL',' d yyyy 'at' hh:mm aaaa");

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: enUS,
        addSuffix: true,
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />                    
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time 
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}                    
                </time>
            </header>
            <div className={styles.content}>
                {content.map(item => {
                    if(item.type === 'paragraph') {
                        return <p>{item.content}</p>
                    } else if (item.type === 'link') {
                        return <a href="#">{item.content}</a>
                    }
                })}
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
                {comments.map(comment => {
                    return (
                        <CommentPost />
                    )
                })}
            </div>
        </article>
    )
}