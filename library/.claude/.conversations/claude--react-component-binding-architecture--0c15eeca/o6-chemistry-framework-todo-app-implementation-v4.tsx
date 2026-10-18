import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Chemistry Framework - Todo App Implementation v4 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// app/todo/page.tsx
'use client'
import { $Chemical, $ } from '@/chemistry3';
import React, { CSSProperties } from 'react';

// Base component with overridable style methods
class $Card extends $Chemical {
    title = '';
    
    // Style methods - subclasses can override these!
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
    
    // Render methods - subclasses can override parts!
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

// Themed card - just override the style methods!
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

// Collapsible card - add behavior by extending
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

// Task with extensible rendering
class $Task extends $Chemical {
    text = '';
    completed = false;
    
    $Task(text: string) {
        this.text = text;
    }
    
    $toggle() {
        this.completed = !this.completed;
    }
    
    // Modular rendering - each part can be overridden
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
    
    renderActions() {
        return null; // Subclasses can add actions
    }
    
    view() {
        return (
            <div style={this.getTaskStyle()} onClick={() => this.$toggle()}>
                {this.renderCheckbox()}
                {this.renderText()}
                {this.renderActions()}
            </div>
        );
    }
}

// Extend Task with timestamps
class $TimedTask extends $Task {
    createdAt = new Date();
    
    renderText() {
        const timeStr = this.createdAt.toLocaleTimeString();
        return (
            <>
                {super.renderText()}
                <span style={{ 
                    fontSize: '12px', 
                    color: '#999',
                    marginLeft: '8px'
                }}>
                    ({timeStr})
                </span>
            </>
        );
    }
}

// Extend Task with priority
class $PriorityTask extends $Task {
    priority: 'low' | 'medium' | 'high' = 'medium';
    
    $PriorityTask(text: string, priority: 'low' | 'medium' | 'high') {
        this.text = text;
        this.priority = priority;
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
    
    renderActions() {
        const colors = {
            low: '#4CAF50',
            medium: '#FF9800',
            high: '#F44336'
        };
        
        return (
            <span style={{
                float: 'right',
                fontSize: '12px',
                color: colors[this.priority],
                fontWeight: 'bold'
            }}>
                {this.priority.toUpperCase()}
            </span>
        );
    }
}

// TodoList with extensible sections
class $TodoList extends $Chemical {
    title = 'Tasks';
    
    $TodoList(title: string, ...tasks: $Task[]) {
        this.title = title;
    }
    
    // Each section can be overridden independently!
    renderHeader() {
        return <h2>{this.title}</h2>;
    }
    
    renderTasks() {
        return <div>{this.children}</div>;
    }
    
    renderFooter() {
        return null;
    }
    
    view() {
        return (
            <div>
                {this.renderHeader()}
                {this.renderTasks()}
                {this.renderFooter()}
            </div>
        );
    }
}

// Extend with statistics
class $StatsTodoList extends $TodoList {
    renderFooter() {
        // In real implementation, would count actual task children
        return (
            <div style={{
                marginTop: '16px',
                padding: '12px',
                background: '#f5f5f5',
                borderRadius: '6px',
                fontSize: '14px',
                color: '#666'
            }}>
                Stats: Tasks shown above
            </div>
        );
    }
}

// The beauty: mix and match through inheritance!
export default function TodoApp() {
    const Card = new $Card().Component;
    const DarkCard = new $DarkCard().Component;
    const CollapsibleCard = new $CollapsibleCard().Component;
    
    const Task = new $Task().Component;
    const TimedTask = new $TimedTask().Component;
    const PriorityTask = new $PriorityTask().Component;
    
    const TodoList = new $TodoList().Component;
    const StatsTodoList = new $StatsTodoList().Component;
    
    return (
        <div style={{ padding: '40px', background: '#f8f9fa', minHeight: '100vh' }}>
            <h1>Chemistry: Classical Inheritance for React</h1>
            
            {/* Basic card with tasks */}
            <Card title="Basic Card">
                <TodoList title="Simple Tasks">
                    <Task>Basic task</Task>
                    <Task>Another task</Task>
                </TodoList>
            </Card>
            
            {/* Dark themed card - just changed style methods! */}
            <DarkCard title="Dark Theme">
                <TodoList title="Night Mode">
                    <TimedTask>Task with timestamp</TimedTask>
                    <PriorityTask priority="high">Urgent task</PriorityTask>
                </TodoList>
            </DarkCard>
            
            {/* Collapsible card with stats list */}
            <CollapsibleCard title="Collapsible Section">
                <StatsTodoList title="Project Tasks">
                    <PriorityTask priority="high">Deploy to production</PriorityTask>
                    <PriorityTask priority="medium">Code review</PriorityTask>
                    <TimedTask>Meeting notes</TimedTask>
                    <Task>Update documentation</Task>
                </StatsTodoList>
            </CollapsibleCard>
            
            {/* Everything composes naturally through inheritance */}
            <CollapsibleCard title="Personal">
                <DarkCard title="Evening Routine">
                    <TodoList title="Before Bed">
                        <TimedTask>Brush teeth</TimedTask>
                        <PriorityTask priority="high">Set alarm</PriorityTask>
                        <Task>Read book</Task>
                    </TodoList>
                </DarkCard>
            </CollapsibleCard>
        </div>
    );
}`}
        </CodeBox>
    </Chapter>
);
