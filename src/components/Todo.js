const Todo = (props) => {
    //console.log(props)
        return (
            <>
            <div className={props.item.completed == true ? "text-decoration-line-through" : null }> {props.item.title} </div>
            {/* With JSX, show strikethrough */}
            <button onClick={() =>
            props.markComplete(props.item.id)} class="btn btn-info">Completed</button>
            &nbsp;
            <button onClick={() =>
            props.handleDelete(props.item.id)} class="btn btn-info">Delete</button>
            </>
        )
}


export default Todo