
function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="input-group">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>

      <div className="buttons">
        <button class="btn btn btn-outline-danger" type="button" onClick={() => markTodo(index)}>✓</button>{' '}
        <button class="btn btn btn-outline-danger" type="button" onClick={() => removeTodo(index)}>✕</button>
      </div>

    </div>



  );
}

export default Todo;




