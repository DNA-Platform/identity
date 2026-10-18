// app/todo/page.tsx
'use client'
import { $Chemical, $ } from '@/chemistry3';
import React from 'react';

// Define a Task model
class $Task extends $Chemical {
    $id = 0;
    $text = '';
    $completed = false;
    $priority: 'low' | 'medium' | 'high' = 'medium';
    
    // Method to toggle completion
    $toggle() {
        this.$completed = !this.$completed;
    }
    
    view() {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px',
                background: this.$completed ? '#f0f0f0' : '#ffffff',
                borderRadius: '8px',
                marginBottom: '8px',
                transition: 'all 0.3s ease',
                opacity: this.$completed ? 0.6 : 1,
            }}>
                <input
                    type="checkbox"
                    checked={this.$completed}
                    onChange={() => this.$toggle()}
                    style={{
                        width: '20px',
                        height: '20px',
                        marginRight: '12px',
                        cursor: 'pointer'
                    }}
                />
                <span style={{
                    flex: 1,
                    textDecoration: this.$completed ? 'line-through' : 'none',
                    color: this.$completed ? '#999' : '#333',
                    fontSize: '16px'
                }}>
                    {this.$text}
                </span>
                <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    background: this.$priority === 'high' ? '#fee' : 
                               this.$priority === 'medium' ? '#fff3cd' : '#d4edda',
                    color: this.$priority === 'high' ? '#c33' : 
                           this.$priority === 'medium' ? '#856404' : '#155724',
                }}>
                    {this.$priority}
                </span>
            </div>
        );
    }
}

// TaskList that manages multiple tasks using Chemistry's binding system
class $TaskList extends $Chemical {
    // Use Chemistry's binding to manage child Tasks
    tasks: $Task[] = [];
    filter: 'all' | 'active' | 'completed' = 'all';
    nextId = 1;
    
    // Constructor pattern - children become constructor arguments
    $TaskList(...tasks: $Task[]) {
        // This demonstrates the polymorphic constructor pattern
        // Tasks passed as children are automatically bound
        if (tasks && tasks.length > 0) {
            this.tasks = tasks;
            tasks.forEach(task => {
                task.$id = this.nextId++;
            });
        }
    }
    
    $addTask(text: string, priority: 'low' | 'medium' | 'high' = 'medium') {
        const task = new $Task();
        task.$id = this.nextId++;
        task.$text = text;
        task.$priority = priority;
        task.$completed = false;
        
        this.tasks.push(task);
    }
    
    $removeTask(id: number) {
        this.tasks = this.tasks.filter(t => t.$id !== id);
    }
    
    $setFilter(filter: 'all' | 'active' | 'completed') {
        this.filter = filter;
    }
    
    get filteredTasks() {
        switch(this.filter) {
            case 'active':
                return this.tasks.filter(t => !t.$completed);
            case 'completed':
                return this.tasks.filter(t => t.$completed);
            default:
                return this.tasks;
        }
    }
    
    get stats() {
        return {
            total: this.tasks.length,
            active: this.tasks.filter(t => !t.$completed).length,
            completed: this.tasks.filter(t => t.$completed).length
        };
    }
    
    view() {
        const Task = new $Task().Component;
        
        return (
            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
                <h2 style={{ marginBottom: '20px' }}>Tasks ({this.stats.total})</h2>
                
                {/* Filter tabs */}
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    {(['all', 'active', 'completed'] as const).map(f => (
                        <button
                            key={f}
                            onClick={() => this.$setFilter(f)}
                            style={{
                                padding: '8px 16px',
                                border: '2px solid',
                                borderColor: this.filter === f ? '#667eea' : '#ddd',
                                background: this.filter === f ? '#667eea' : 'white',
                                color: this.filter === f ? 'white' : '#333',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)} ({
                                f === 'all' ? this.stats.total :
                                f === 'active' ? this.stats.active : this.stats.completed
                            })
                        </button>
                    ))}
                </div>
                
                {/* Task list */}
                <div style={{ minHeight: '200px' }}>
                    {this.filteredTasks.length === 0 ? (
                        <div style={{ 
                            textAlign: 'center', 
                            padding: '40px',
                            color: '#999'
                        }}>
                            No {this.filter !== 'all' ? this.filter : ''} tasks
                        </div>
                    ) : (
                        this.filteredTasks.map(task => (
                            <div key={task.$id} style={{ position: 'relative' }}>
                                <Task
                                    id={task.$id}
                                    text={task.$text}
                                    completed={task.$completed}
                                    priority={task.$priority}
                                />
                                <button
                                    onClick={() => this.$removeTask(task.$id)}
                                    style={{
                                        position: 'absolute',
                                        right: '12px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        padding: '6px 12px',
                                        background: '#ff4444',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontSize: '12px'
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    )}
                </div>
                
                {/* Stats */}
                <div style={{
                    display: 'flex',
                    gap: '20px',
                    marginTop: '30px',
                    padding: '20px',
                    background: '#f8f9fa',
                    borderRadius: '8px'
                }}>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#667eea' }}>
                            {this.stats.active}
                        </div>
                        <div style={{ color: '#666', fontSize: '14px' }}>Active</div>
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#4CAF50' }}>
                            {this.stats.completed}
                        </div>
                        <div style={{ color: '#666', fontSize: '14px' }}>Completed</div>
                    </div>
                </div>
            </div>
        );
    }
}

// Main TodoApp that