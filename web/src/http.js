const BASE_URL = process.env.REACT_APP_BASE_URL
const client = {
    listTodo: async () => {
        const response = await fetch(`${BASE_URL}/todo`, {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const {todos} = await response.json()
        
        return todos
    },
    updateTodo: async (id, completed) => {
        const response = await fetch(`${BASE_URL}/todo/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                completed
            })
        })
        return response
    },
    addTodo: async (description) => {
        const response = await fetch(`${BASE_URL}/todo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description
            })
        })
        const {todos} = await response.json()
        return todos
    },
    deleteTodo: async (id) => {
        const response = await fetch(`${BASE_URL}/todo/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        return response
    }
    
}

export default client