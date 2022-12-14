const DisplayTask = (props) => {
    return (
        <div style={{backgroundColor: props.completed ? "green" : "white"}}>
            <h1>{props.taskName}</h1>
            <button onClick={() => props.deleteTask(props.id)}>X</button>
            <button onClick={() => props.completeTask(props.id)}>Completed</button>
        </div>
    )
}

export default DisplayTask;