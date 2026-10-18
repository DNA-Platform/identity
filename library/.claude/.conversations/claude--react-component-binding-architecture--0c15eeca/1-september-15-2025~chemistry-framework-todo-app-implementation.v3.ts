// app/todo/page.tsx
'use client'
import { $Chemical, $ } from '@/chemistry3';
import React from 'react';

// Base Task
class $Task extends $Chemical {
    text = '';
    completed = false;
    
    // Constructor receives the text as a child
    $Task(text: string) {
        this.text = text;
    }
    
    $toggle() {
        this.completed = !this.completed;
    }
    
    view() {
        return (
            <div style={{
                padding: '10px',
                background: this.completed ? '#f0f0f0' : 'white',
                textDecoration: this.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                marginBottom: '4px'
            }}
            onClick={() => this.$toggle()}>
                ✓ {this.text}
            </div>
        );
    }
}

// Priority Task extends Task - polymorphism!
class $PriorityTask extends $Task {
    priority: 'low' | 'medium' | 'high' = 'medium';
    
    // Constructor can handle additional children
    $PriorityTask(text: string, priority: 'low' | 'medium' | 'high') {
        this.text = text;
        if (priority) this.priority = priority;
    }
    
    view() {
        const colors = {
            low: '#4CAF50',
            medium: '#FF9800', 
            high: '#F44336'
        };
        
        return (
            <div style={{
                padding: '10px',
                background: this.completed ? '#f0f0f0' : 'white',
                textDecoration: this.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                marginBottom: '4px',
                borderLeft: `4px solid ${colors[this.priority]}`,
                display: 'flex',
                justifyContent: 'space-between'
            }}
            onClick={() => this.$toggle()}>
                <span>✓ {this.text}</span>
                <span style={{ 
                    fontSize: '12px', 
                    color: colors[this.priority],
                    fontWeight: 'bold'
                }}>
                    {this.priority.toUpperCase()}
                </span>
            </div>
        );
    }
}

// Base TodoList
class $TodoList extends $Chemical {
    title = 'Tasks';
    
    // Here's the magic - children become constructor arguments!
    // The framework turns JSX children into typed constructor parameters
    $TodoList(...tasks: $Task[]) {
        // Tasks passed as children are automatically bound to this parent
        console.log('TodoList received tasks:', tasks);
    }
    
    view() {
        return (
            <div style={{ 
                padding: '20px',
                background: '#f9f9f9',
                borderRadius: '8px',
                marginBottom: '20px'
            }}>
                <h3>{this.title}</h3>
                {this.children /* children are managed by the framework */}
            </div>
        );
    }
}

// Extended TodoList with categories - polymorphism in action!
class $CategorizedTodoList extends $TodoList {
    category = '';
    collapsed = false;
    
    // Can handle mixed types through polymorphism
    $CategorizedTodoList(category: string, ...tasks: $Task[]) {
        this.category = category;
        this.title = `${category} Tasks`;
    }
    
    $toggleCollapse() {
        this.collapsed = !this.collapsed;
    }
    
    view() {
        return (
            <div style={{ 
                padding: '20px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '12px',
                marginBottom: '20px',
                color: 'white'
            }}>
                <div 
                    style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        cursor: 'pointer'
                    }}
                    onClick={() => this.$toggleCollapse()}>
                    <h3>{this.title}</h3>
                    <span>{this.collapsed ? '▶' : '▼'}</span>
                </div>
                
                <div style={{ 
                    marginTop: '10px',
                    display: this.collapsed ? 'none' : 'block'
                }}>
                    {this.children}
                </div>
            </div>
        );
    }
}

// Here's where the magic happens - using the components
export default function TodoApp() {
    const Task = new $Task().Component;
    const PriorityTask = new $PriorityTask().Component;
    const TodoList = new $TodoList().Component;
    const CategorizedTodoList = new $CategorizedTodoList().Component;
    
    return (
        <div style={{ padding: '40px', fontFamily: 'system-ui' }}>
            <h1>Chemistry Framework - True Polymorphism</h1>
            
            {/* Basic TodoList with Task children */}
            <TodoList>
                <Task>Buy milk</Task>
                <Task>Walk the dog</Task>
                <Task>Read documentation</Task>
            </TodoList>
            
            {/* TodoList with mixed Task types - polymorphism! */}
            <TodoList>
                <Task>Simple task</Task>
                <PriorityTask priority="high">Urgent: Fix bug</PriorityTask>
                <PriorityTask priority="low">Refactor code</PriorityTask>
            </TodoList>
            
            {/* CategorizedTodoList - the category becomes the first constructor arg */}
            <CategorizedTodoList category="Work">
                <PriorityTask priority="high">Deploy to production</PriorityTask>
                <PriorityTask priority="medium">Code review</PriorityTask>
                <Task>Update documentation</Task>
            </CategorizedTodoList>
            
            <CategorizedTodoList category="Personal">
                <Task>Exercise</Task>
                <PriorityTask priority="high">Doctor appointment</PriorityTask>
                <Task>Call mom</Task>
            </CategorizedTodoList>
        </div>
    );
}