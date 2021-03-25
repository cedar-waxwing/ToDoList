const Todo = (props) => {
    //console.log(props)
        return (
            <>
            <div> {props.item.title} </div>
            {/* With JSX, show strikethrough */}
            <button onClick={() =>
            props.markComplete(props.item.id) } className={props.newEntry.completed == true ? "text-decoration:line-through" : null }>Completed</button>
            <button onClick={() =>
            props.handleDelete(props.item.id)}>Delete</button>
            </>
        )
}


export default Todo