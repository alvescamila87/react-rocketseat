import { format, formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { Avatar } from './Avatar'
import { CommentPost } from './CommentPost'
import styles from './Post.module.css'
import { useState } from 'react';

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

/*
const comments = [
    1,
    2,
    3,
]; 

*/

export function Post({ author, publishedAt, content }) {
    //console.log(props)

    const [comments, setComments] = useState([
        'Amazing, man!'
    ])

    const publishedDateFormatted = format(publishedAt, "LLLL',' d yyyy 'at' hh:mm aaaa");

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: enUS,
        addSuffix: true,
    })

    const [newCommentPostText, setNewCommentPostText] = useState('');

    function handleCreateNewComment(){
        event.preventDefault();
        //console.log('Hi');

        //comments.push(3);
        //console.log(comments)

        // imutabilidade
        //setComments([1, 2, 3]);

        // adicionar comentário
        //console.log(event.target.commentPost.value)
        //const newCommentPostText = event.target.commentPost.value

        // spread operator
        setComments([...comments, newCommentPostText]);

        // limpar comentário - forma imperativa
        //event.target.commentPost.value = "";

        // limpar comentário - forma declarativa
        setNewCommentPostText('');
    }

    function newCommentPostTextChange() {
        //console.log('teste')
        console.log(event.target.value)

        // armazenar valor de comentário digitado
        setNewCommentPostText(event.target.value);
    }

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

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Leave your feedback</strong>

                <textarea 
                    name="commentPost"
                    placeholder='Leave a comment...'
                    value={newCommentPostText}
                    onChange={newCommentPostTextChange}
                >
                </textarea>

                <footer> 
                    <button type="submit">Post</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <CommentPost content={comment} />
                    )
                })}
            </div>
        </article>
    )
}