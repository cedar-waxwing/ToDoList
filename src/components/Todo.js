const Todo = (props) => {
    //console.log(props)
        return (
            <>
            <div> {props.item.title} </div>
            {/* Need onclick, change item.completed from true to false  */}
            {/* <button onClick={() =>
            props.markComplete(props.item.id)}>Completed</button> */}
            <button onClick={() =>
            props.handleDelete(props.item.id)}>Delete</button>
            </>
        )
}


export default Todo