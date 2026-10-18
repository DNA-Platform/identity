import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Chemistry Framework - Todo App Implementation v5 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// app/todo/page.tsx
'use client'
import { $Chemical, $ } from '@/chemistry3';
import React, { CSSProperties } from 'react';

// Base Card - abstract-ish
class $Card extends $Chemical {
    title = '';
    
    $Card(title: string) {
        this.title = title;
    }
    
    getCardStyle(): CSSProperties {
        return {
            padding: '20px',
            background: 'white',
            borderRadius: '8px',
            marginBottom: '16px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        };
    }
    
    getTitleStyle(): CSSProperties {
        return {
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '12px'
        };
    }
    
    renderTitle() {
        return <h3 style={this.getTitleStyle()}>{this.title}</h3>;
    }
    
    renderContent() {
        return this.children;
    }
    
    view() {
        return (
            <div style={this.getCardStyle()}>
                {this.renderTitle()}
                {this.renderContent()}
            </div>
        );
    }
}

// Card variants through inheritance
class $DarkCard extends $Card {
    getCardStyle() {
        return {
            ...super.getCardStyle(),
            background: '#1a1a1a',
            color: 'white'
        };
    }
    
    getTitleStyle() {
        return {
            ...super.getTitleStyle(),
            color: '#667eea'
        };
    }
}

class $CollapsibleCard extends $Card {
    collapsed = false;
    
    $toggle() {
        this.collapsed = !this.collapsed;
    }
    
    renderTitle() {
        return (
            <div 
                onClick={() => this.$toggle()}
                style={{ cursor: 'pointer', userSelect: 'none' }}>
                {super.renderTitle()}
                <span style={{ float: 'right' }}>
                    {this.collapsed ? '▶' : '▼'}
                </span>
            </div>
        );
    }
    
    renderContent() {
        if (this.collapsed) return null;
        return super.renderContent();
    }
}

// Task hierarchy
class $Task extends $Chemical {
    text = '';
    completed = false;
    
    $Task(text: string) {
        this.text = text;
    }
    
    $toggle() {
        this.completed = !this.completed;
    }
    
    getTaskStyle(): CSSProperties {
        return {
            padding: '12px',
            background: this.completed ? '#f0f0f0' : 'white',
            borderRadius: '6px',
            marginBottom: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s'
        };
    }
    
    renderCheckbox() {
        return <span>{this.completed ? '☑' : '☐'}</span>;
    }
    
    renderText() {
        return (
            <span style={{
                marginLeft: '12px',
                textDecoration: this.completed ? 'line-through' : 'none',
                opacity: this.completed ? 0.6 : 1
            }}>
                {this.text}
            </span>
        );
    }
    
    view() {
        return (
            <div style={this.getTaskStyle()} onClick={() => this.$toggle()}>
                {this.renderCheckbox()}
                {this.renderText()}
            </div>
        );
    }
}

class $PriorityTask extends $Task {
    priority: 'low' | 'medium' | 'high' = 'medium';
    
    $PriorityTask(text: string, priority?: 'low' | 'medium' | 'high') {
        this.text = text;
        if (priority) this.priority = priority;
    }
    
    getTaskStyle() {
        const colors = {
            low: '#4CAF50',
            medium: '#FF9800',
            high: '#F44336'
        };
        
        return {
            ...super.getTaskStyle(),
            borderLeft: \`4px solid \${colors[this.priority]}\`
        };
    }
}

// TodoList that can accept a Card type as a property!
class $TodoList extends $Chemical {
    title = 'Tasks';
    cardType: typeof $Card = $Card;  // Default card type
    
    // Can pass card type as prop!
    $cardType?: typeof $Card;
    
    $TodoList(title: string, ...tasks: $Task[]) {
        this.title = title;
        // Use prop if provided, otherwise use default
        if (this.$cardType) {
            this.cardType = this.$cardType;
        }
    }
    
    view() {
        // Dynamically create the card component based on type
        const CardComponent = new this.cardType().Component;
        
        return (
            <CardComponent title={this.title}>
                {this.children}
            </CardComponent>
        );
    }
}

// Or even better - TodoList variants through inheritance
class $DarkTodoList extends $TodoList {
    cardType = $DarkCard;  // Override the card type
}

class $CollapsibleTodoList extends $TodoList {
    cardType = $CollapsibleCard;
}

// Board that manages multiple lists
class $Board extends $Chemical {
    name = '';
    listType: typeof $TodoList = $TodoList;  // Can be overridden
    
    $listType?: typeof $TodoList;
    
    $Board(name: string) {
        this.name = name;
        if (this.$listType) {
            this.listType = this.$listType;
        }
    }
    
    view() {
        const ListComponent = new this.listType().Component;
        
        return (
            <div>
                <h1>{this.name}</h1>
                <div style={{ display: 'grid', gap: '20px' }}>
                    {this.children}
                </div>
            </div>
        );
    }
}

// Now for true polymorphism - a themed board
class $ThemedBoard extends $Board {
    theme: 'light' | 'dark' = 'light';
    
    $ThemedBoard(name: string, theme: 'light' | 'dark') {
        this.name = name;
        this.theme = theme;
        // Set list type based on theme
        this.listType = theme === 'dark' ? $DarkTodoList : $TodoList;
    }
    
    view() {
        return (
            <div style={{
                padding: '20px',
                background: this.theme === 'dark' ? '#222' : '#f8f9fa',
                minHeight: '400px',
                borderRadius: '12px'
            }}>
                {super.view()}
            </div>
        );
    }
}

export default function TodoApp() {
    const Task = new $Task().Component;
    const PriorityTask = new $PriorityTask().Component;
    
    const TodoList = new $TodoList().Component;
    const DarkTodoList = new $DarkTodoList().Component;
    const CollapsibleTodoList = new $CollapsibleTodoList().Component;
    
    const Board = new $Board().Component;
    const ThemedBoard = new $ThemedBoard().Component;
    
    return (
        <div style={{ padding: '40px', background: '#eee', minHeight: '100vh' }}>
            <h1>Chemistry: True OOP Components</h1>
            
            {/* Regular TodoList with default Card */}
            <TodoList title="Default Style">
                <Task>Regular task</Task>
                <PriorityTask priority="high">Important task</PriorityTask>
            </TodoList>
            
            {/* TodoList with injected card type via prop */}
            <TodoList title="With Dark Card" cardType={$DarkCard}>
                <Task>Dark themed task</Task>
                <PriorityTask priority="low">Low priority</PriorityTask>
            </TodoList>
            
            {/* DarkTodoList - inherits the dark card */}
            <DarkTodoList title="Inherited Dark Style">
                <Task>Another dark task</Task>
            </DarkTodoList>
            
            {/* CollapsibleTodoList - inherits collapsible behavior */}
            <CollapsibleTodoList title="Collapsible List">
                <Task>Hidden task 1</Task>
                <Task>Hidden task 2</Task>
            </CollapsibleTodoList>
            
            {/* Themed boards - polymorphism at work */}
            <ThemedBoard name="Light Board" theme="light">
                <TodoList title="Work">
                    <PriorityTask priority="high">Deploy</PriorityTask>
                </TodoList>
                <TodoList title="Personal">
                    <Task>Exercise</Task>
                </TodoList>
            </ThemedBoard>
            
            <ThemedBoard name="Dark Board" theme="dark">
                <TodoList title="Evening">
                    <Task>Read book</Task>
                </TodoList>
            </ThemedBoard>
        </div>
    );
}`}
        </CodeBox>
    </Chapter>
);
