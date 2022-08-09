
function Todo({ todo, index, markTodo, removeTodo }) 
{
    return (
      <div
        className="lists">
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        <div className='list'>
          <button  onClick={() => markTodo(index)}>✓</button>{' '}
          <button  onClick={() => removeTodo(index)}>✕</button>
        </div>
      </div>
    );
  }

export default Todo;




