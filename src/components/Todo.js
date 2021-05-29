import React, { useState } from 'react'

const Todo = () =>  {
    const [task, updateTask] = useState('')
    const [tasks, updateTasks] = useState([])

    const handleInputChange = event => updateTask(event.target.value)

    const handleFormSubmit = event => {
        event.preventDefault()
        if (task.trim()) {
            updateTasks([...tasks, task])
            updateTask('')
        }
    }

    const HandleDelete = event => {
        const { id } = event.target.parentElement.parentElement
        tasks.splice(id, 1)
        updateTasks([...tasks])
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input
                    data-testid="form-field"
                    onChange={handleInputChange}
                    placeholder="New task"
                    type="text"
                    value={task}
                />
                <button
                    data-testid="form-btn"
                    type="submit"
                >
                    Add new task
                </button>
            </form>
            <table data-testid="table">
                <thead>
                    <tr>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    { tasks.map((t, index) => (
                        <tr key={index} id={index}>
                            <td>
                                {t}
                            </td>
                            <td>
                                <button
                                    data-testid="btn-clear"
                                    type="submit"
                                    onClick={HandleDelete}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Todo