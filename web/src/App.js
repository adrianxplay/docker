import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import client from './http';



function App() {
  const [todos, setTodos] = useState([])

  const handleDeleteTodo = (todo) => {
    client.deleteTodo(todo.id)
    const _todos = todos.filter(_todo => todo.id !== _todo.id)
    setTodos(_todos)

  }
  const handleToggleTodo = (todo) => {

    const _todos = todos.map(_todo => {
      if (_todo.id === todo.id) {
        client.updateTodo(todo.id, !todo.completed)
        return { ...todo, completed: !todo.completed }
      }
      return _todo
    })
    setTodos(_todos)
  }
  useEffect(() => {
    const fetchData = async () => {
      const data = await client.listTodo()
      setTodos(data)
    }
    fetchData().catch(console.error)
  }, [])

  return (
    <div className="App">
      <Container>
        <Row>
          <Col><h1>Todo list</h1></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <TodoInput todos={todos} handleSetTodos={setTodos} />
          </Col>
        </Row>

        <Row>
          <Col>
            <Container style={{ marginTop: '30px' }}><TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} /></Container>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
