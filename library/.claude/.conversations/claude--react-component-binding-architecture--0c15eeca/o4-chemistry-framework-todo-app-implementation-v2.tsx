import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Chemistry Framework - Todo App Implementation v2 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// app/todo/page.tsx
'use client'
import { $Chemical } from '@/chemistry3';
import React from 'react';

// Simple Task - just properties and a view
class $Task extends $Chemical {
    text = '';
    completed = false;
    
    $toggle() {
        this.completed = !this.completed;
    }
    
    view() {
        return (
            <div style={{
                padding: '10px',
                background: this.completed ? '#f0f0f0' : 'white',
                textDecoration: this.completed ? 'line-through' : 'none',
                cursor: 'pointer'
            }}
            onClick={() => this.$toggle()}>
                {this.text}
            </div>
        );
    }
}

// TodoList - manages tasks naturally
class $TodoList extends $Chemical {
    $title = 'My Tasks';
    tasks: $Task[] = [];
    
    $addTask(text: string) {
        const task = new $Task();
        task.text = text;
        this.tasks.push(task);
    }
    
    view() {
        const Task = new $Task().Component;
        
        return (
            <div style={{ padding: '20px' }}>
                <h2>{this.$title}</h2>
                
                <div>
                    <input 
                        id="newTask"
                        placeholder="Add a task..." 
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                const input = e.target as HTMLInputElement;
                                this.$addTask(input.value);
                                input.value = '';
                            }
                        }}
                        style={{
                            padding: '8px',
                            width: '300px',
                            marginBottom: '20px'
                        }}
                    />
                </div>
                
                <div>
                    {this.tasks.map((task, i) => (
                        <Task key={i} />
                    ))}
                </div>
                
                <div style={{ marginTop: '20px', color: '#666' }}>
                    Total: {this.tasks.length} | 
                    Completed: {this.tasks.filter(t => t.completed).length}
                </div>
            </div>
        );
    }
}

// Using it is dead simple
export default function TodoApp() {
    const TodoList = new $TodoList().Component;
    
    return (
        <div>
            <h1>Chemistry Framework Demo</h1>
            <TodoList title="Shopping List" />
            <TodoList title="Work Tasks" />
        </div>
    );
}`}
        </CodeBox>
    </Chapter>
);
