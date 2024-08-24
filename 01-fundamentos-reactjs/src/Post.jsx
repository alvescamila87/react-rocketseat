// props: { author: "", content: "" }
// props vai receber um objeto

function Post(props) {
    console.log(props)

    return (
        <div> 
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div>
    )
}

export default Post