import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Chemistry Framework - Advanced Example App v2 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`${''}<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chemistry Framework - Task Manager Example</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 40px 20px;
        }
        
        .app-container {
            max-width: 800px;
            margin: 0 auto;
        }
        
        .app-header {
            text-align: center;
            color: white;
            margin-bottom: 40px;
        }
        
        .app-header h1 {
            font-size: 3em;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }
        
        .app-header p {
            font-size: 1.2em;
            opacity: 0.9;
        }
        
        .task-manager {
            background: white;
            border-radius: 16px;
            padding: 30px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        
        .add-task-form {
            display: flex;
            gap: 10px;
            margin-bottom: 30px;
        }
        
        .add-task-form input {
            flex: 1;
            padding: 12px 16px;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s;
        }
        
        .add-task-form input:focus {
            outline: none;
            border-color: #667eea;
        }
        
        .add-task-form button {
            padding: 12px 24px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .add-task-form button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }
        
        .filter-tabs {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            border-bottom: 2px solid #e0e0e0;
        }
        
        .filter-tab {
            padding: 10px 20px;
            background: none;
            border: none;
            font-size: 16px;
            cursor: pointer;
            color: #666;
            transition: color 0.3s;
            position: relative;
        }
        
        .filter-tab.active {
            color: #667eea;
            font-weight: 600;
        }
        
        .filter-tab.active::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            right: 0;
            height: 2px;
            background: #667eea;
        }
        
        .task-list {
            min-height: 200px;
        }
        
        .task-item {
            display: flex;
            align-items: center;
            padding: 16px;
            margin-bottom: 12px;
            background: #f8f9fa;
            border-radius: 8px;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .task-item:hover {
            transform: translateX(4px);
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .task-item.completed {
            opacity: 0.6;
        }
        
        .task-item.completed .task-text {
            text-decoration: line-through;
            color: #999;
        }
        
        .task-checkbox {
            width: 24px;
            height: 24px;
            margin-right: 16px;
            cursor: pointer;
        }
        
        .task-text {
            flex: 1;
            font-size: 16px;
            color: #333;
        }
        
        .task-priority {
            padding: 4px 12px;
            border-radius: 16px;
            font-size: 12px;
            font-weight: 600;
            margin-right: 12px;
        }
        
        .priority-high {
            background: #fee;
            color: #c33;
        }
        
        .priority-medium {
            background: #fff3cd;
            color: #856404;
        }
        
        .priority-low {
            background: #d4edda;
            color: #155724;
        }
        
        .task-delete {
            padding: 8px 16px;
            background: #ff4444;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            transition: background 0.2s;
        }
        
        .task-delete:hover {
            background: #cc0000;
        }
        
        .stats-container {
            display: flex;
            gap: 20px;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #e0e0e0;
        }
        
        .stat-card {
            flex: 1;
            text-align: center;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 8px;
        }
        
        .stat-value {
            font-size: 2em;
            font-weight: bold;
            color: #667eea;
            margin-bottom: 5px;
        }
        
        .stat-label {
            color: #666;
            font-size: 14px;
        }
        
        .empty-state {
            text-align: center;
            padding: 40px;
            color: #999;
        }
        
        .empty-state svg {
            width: 80px;
            height: 80px;
            margin-bottom: 20px;
            opacity: 0.3;
        }
    </style>
</head>
<body>
    <div class="app-container">
        <div class="app-header">
            <h1>⚗️ Chemistry Task Manager</h1>
            <p>Built with the Chemistry Framework - Reactive Object-Oriented Components</p>
        </div>
        
        <div class="task-manager">
            <div class="add-task-form">
                <input type="text" placeholder="What needs to be done?" id="taskInput">
                <select id="prioritySelect" style="padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px;">
                    <option value="low">Low Priority</option>
                    <option value="medium" selected>Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
                <button onclick="addTask()">Add Task</button>
            </div>
            
            <div class="filter-tabs">
                <button class="filter-tab active" onclick="setFilter('all', this)">All Tasks</button>
                <button class="filter-tab" onclick="setFilter('active', this)">Active</button>
                <button class="filter-tab" onclick="setFilter('completed', this)">Completed</button>
            </div>
            
            <div class="task-list" id="taskList">
                <div class="empty-state">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 11l3 3L22 4"></path>
                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                    </svg>
                    <p>No tasks yet. Add one above to get started!</p>
                </div>
            </div>
            
            <div class="stats-container">
                <div class="stat-card">
                    <div class="stat-value" id="totalTasks">0</div>
                    <div class="stat-label">Total Tasks</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value" id="activeTasks">0</div>
                    <div class="stat-label">Active</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value" id="completedTasks">0</div>
                    <div class="stat-label">Completed</div>
                </div>
            </div>
        </div>
    </div>
    
    <script>
        // This simulates how Chemistry Framework would handle state
        class TaskManager {
            constructor() {
                this.tasks = [];
                this.filter = 'all';
                this.nextId = 1;
            }
            
            addTask(text, priority = 'medium') {
                this.tasks.push({
                    id: this.nextId++,
                    text,
                    priority,
                    completed: false
                });
                this.render();
            }
            
            toggleTask(id) {
                const task = this.tasks.find(t => t.id === id);
                if (task) {
                    task.completed = !task.completed;
                    this.render();
                }
            }
            
            deleteTask(id) {
                this.tasks = this.tasks.filter(t => t.id !== id);
                this.render();
            }
            
            setFilter(filter) {
                this.filter = filter;
                this.render();
            }
            
            getFilteredTasks() {
                switch(this.filter) {
                    case 'active':
                        return this.tasks.filter(t => !t.completed);
                    case 'completed':
                        return this.tasks.filter(t => t.completed);
                    default:
                        return this.tasks;
                }
            }
            
            render() {
                const taskList = document.getElementById('taskList');
                const filtered = this.getFilteredTasks();
                
                if (filtered.length === 0) {
                    taskList.innerHTML = \`
                        <div class="empty-state">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 11l3 3L22 4"></path>
                                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                            </svg>
                            <p>\${this.filter === 'all' ? 'No tasks yet. Add one above to get started!' : \`No \${this.filter} tasks\`}</p>
                        </div>
                    \`;
                } else {
                    taskList.innerHTML = filtered.map(task => \`
                        <div class="task-item \${task.completed ? 'completed' : ''}">
                            <input type="checkbox" class="task-checkbox" 
                                \${task.completed ? 'checked' : ''} 
                                onchange="taskManager.toggleTask(\${task.id})">
                            <span class="task-text">\${task.text}</span>
                            <span class="task-priority priority-\${task.priority}">\${task.priority}</span>
                            <button class="task-delete" onclick="taskManager.deleteTask(\${task.id})">Delete</button>
                        </div>
                    \`).join('');
                }
                
                // Update stats
                document.getElementById('totalTasks').textContent = this.tasks.length;
                document.getElementById('activeTasks').textContent = this.tasks.filter(t => !t.completed).length;
                document.getElementById('completedTasks').textContent = this.tasks.filter(t => t.completed).length;
            }
        }
        
        const taskManager = new TaskManager();
        
        function addTask() {
            const input = document.getElementById('taskInput');
            const priority = document.getElementById('prioritySelect').value;
            if (input.value.trim()) {
                taskManager.addTask(input.value, priority);
                input.value = '';
            }
        }
        
        function setFilter(filter, button) {
            document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
            button.classList.add('active');
            taskManager.setFilter(filter);
        }
        
        // Allow Enter key to add task
        document.getElementById('taskInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addTask();
        });
        
        // Add some sample tasks
        taskManager.addTask('Explore Chemistry Framework binding system', 'high');
        taskManager.addTask('Build reactive components with $Chemical', 'high');
        taskManager.addTask('Test parent-child relationships', 'medium');
        taskManager.addTask('Implement polymorphic components', 'medium');
        taskManager.addTask('Document the framework', 'low');
    </script>
</body>
</html>`}
        </CodeBox>
    </Chapter>
);
