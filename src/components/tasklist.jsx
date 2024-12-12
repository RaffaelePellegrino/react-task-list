import React from 'react';
import tasks from './task.js';

function TaskFilter (){
    const pending = tasks.filter(
        (task) => task.state === "backlog" || task.state === "in_progress"
    );
    const completed = tasks.filter(
        (task) => task.state === "completed"
    );
    return (
        <>
            <div>
                <h2>Task pending</h2>
                <ul>
                    {pending.map((task) => (
                        <li key={task.id}>
                            {task.title} - Priorità: {task.priority}, Tempo stimato: {task.estimatedTime} minuti
                        </li>
                    ))}
                </ul>
                <h2>Task Completati</h2>
                <ul>
                    {completed.map((task) => (
                        <li key={task.id}>
                            {task.title} - Priorità: {task.priority}, Tempo stimato: {task.estimatedTime} minuti
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default TaskFilter;