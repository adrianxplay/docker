import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useRef, useState } from 'react';
import client from '../http';


const TodoInput = ({handleSetTodos}) => {
    const [todo, setTodo] = useState('')
    const inputRef = useRef(null)
    return (
        <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">Description</InputGroup.Text>
            <Form.Control
                ref={inputRef}
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                onChange={data => {setTodo(data.target.value)}}
            />
            <Button variant="primary" id="button-addon2" onClick={async () => {
                const data = await client.addTodo(todo)
                setTodo('')
                handleSetTodos(data)
                inputRef.current.value = ''
            }}>
                Add
            </Button>
        </InputGroup>
    )
}

export default  TodoInput