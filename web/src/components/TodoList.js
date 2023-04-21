import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import TodoItem from './TodoItem';


const TodoList = ({todos, handleDeleteTodo, handleToggleTodo, ...props}) => {

    return (
        <Container>
            <ListGroup>
                {
                    todos.map(todo => (
                        <TodoItem key={`todo-${todo.id}`} todo={todo} handleToggle={handleToggleTodo} handleDelete={handleDeleteTodo} />
                    ))
                }
            </ListGroup>
        </Container>
    )
}

export default TodoList