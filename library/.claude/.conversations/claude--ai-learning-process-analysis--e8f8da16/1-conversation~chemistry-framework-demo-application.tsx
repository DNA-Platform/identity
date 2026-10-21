import React, { ReactNode } from 'react';
import { useState, useEffect } from 'react';

// Mock the Chemistry framework classes (since we can't import from local files)
// This represents the framework structure from chemistry.ts

const componentUpdaters = new WeakMap();

class $Chemical {
  Component;
  parent;
  children = [];
  elements;
  
  constructor() {
    this.Component = this.createComponent();
  }
  
  view() {
    return this.elements;
  }
  
  above() {
    return undefined;
  }
  
  below() {
    return undefined;
  }
  
  createComponent() {
    const self = this;
    
    const ChemicalComponent = (props) => {
      const instance = Object.create(self);
      instance.children = [];
      const [, forceUpdate] = useState({});
      
      useEffect(() => {
        // Apply props
        for (const key in props) {
          if (key !== 'children' && key !== '__parentInstance') {
            const componentKey = '$' + key;
            instance[componentKey] = props[key];
          }
        }
        
        // Setup reactivity
        componentUpdaters.set(instance, () => forceUpdate({}));
        
        // Handle parent binding
        if (props.__parentInstance) {
          instance.parent = props.__parentInstance;
          self.registerWithParent(instance, instance.parent);
        }
        
        // Run catalyst methods
        if (instance.constructor.prototype.catalystMethods) {
          for (const methodName of instance.constructor.prototype.catalystMethods) {
            if (typeof instance[methodName] === 'function') {
              instance[methodName]();
            }
          }
        }
        
        return () => {
          componentUpdaters.delete(instance);
          if (instance.parent) {
            const index = instance.parent.children.indexOf(instance);
            if (index >= 0) {
              instance.parent.children.splice(index, 1);
            }
          }
        };
      }, []);
      
      // Process children
      if (props.children) {
        const childrenArray = React.Children.toArray(props.children);
        instance.elements = childrenArray.map(child => {
          if (React.isValidElement(child) && child.type.isChemical) {
            return React.cloneElement(child, {
              ...child.props,
              __parentInstance: instance
            });
          }
          return child;
        });
      }
      
      // Render
      const aboveNode = instance.above();
      const mainNode = instance.view();
      const belowNode = instance.below();
      
      const fragments = [];
      if (aboveNode) fragments.push(aboveNode);
      if (mainNode) fragments.push(mainNode);
      if (belowNode) fragments.push(belowNode);
      
      return fragments.length > 0 ? <>{fragments}</> : null;
    };
    
    ChemicalComponent.isChemical = true;
    return ChemicalComponent;
  }
  
  registerWithParent(child, parent) {
    if (!parent.children.includes(child)) {
      parent.children.push(child);
    }
    
    // Apply bindings
    const bindings = this.getBindings(parent);
    for (const binding of bindings) {
      if (binding.property === 'children') continue;
      
      if (child instanceof binding.class) {
        if (Array.isArray(parent[binding.property])) {
          parent[binding.property].push(child);
        } else if (!parent[binding.property]) {
          parent[binding.property] = child;
        }
      }
    }
  }
  
  getBindings(instance) {
    const constructor = instance.constructor;
    if (constructor._mergedBindings) {
      return constructor._mergedBindings;
    }
    
    const bindings = [];
    let proto = constructor;
    while (proto && proto !== $Chemical) {
      if (proto.__bindingsMap) {
        proto.__bindingsMap.forEach((binding, key) => {
          bindings.push({ ...binding, property: key });
        });
      }
      proto = Object.getPrototypeOf(proto);
    }
    
    constructor._mergedBindings = bindings;
    return bindings;
  }
}

// Decorator simulation
function child(componentClass) {
  return function(target, propertyKey) {
    if (!target.constructor.__bindingsMap) {
      target.constructor.__bindingsMap = new Map();
    }
    target.constructor.__bindingsMap.set(propertyKey, {
      class: componentClass,
      property: propertyKey
    });
  };
}

function entail() {
  return function(target, propertyKey, descriptor) {
    if (!target.catalystMethods) {
      target.catalystMethods = new Set();
    }
    target.catalystMethods.add(propertyKey);
    return descriptor;
  };
}

// ============= Demo Application Components =============

// Navigation Header Component
class $Header extends $Chemical {
  $title = 'Chemistry Framework Demo';
  $activeSection = 'home';
  
  view() {
    return (
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '20px 40px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ margin: 0, fontSize: '28px', fontWeight: 'bold' }}>
          {this.$title}
        </h1>
        <p style={{ margin: '5px 0 0 0', opacity: 0.9 }}>
          Showcasing component composition with parent-child binding
        </p>
      </div>
    );
  }
}

// Card Component for content sections
class $Card extends $Chemical {
  $title = 'Card Title';
  $content = 'Card content goes here';
  $color = '#667eea';
  
  view() {
    return (
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        border: `2px solid ${this.$color}20`,
        marginBottom: '20px'
      }}>
        <h3 style={{ 
          margin: '0 0 12px 0',
          color: this.$color,
          fontSize: '20px'
        }}>
          {this.$title}
        </h3>
        <div style={{ color: '#4a5568', lineHeight: 1.6 }}>
          {this.$content}
        </div>
        <div style={{ marginTop: '16px' }}>
          {this.elements}
        </div>
      </div>
    );
  }
}

// Interactive Button Component
class $Button extends $Chemical {
  $label = 'Click Me';
  $onClick = () => {};
  $variant = 'primary';
  
  view() {
    const styles = {
      primary: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      },
      secondary: {
        background: 'white',
        color: '#667eea',
        border: '2px solid #667eea'
      }
    };
    
    return (
      <button
        onClick={this.$onClick}
        style={{
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          ...styles[this.$variant]
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        }}
      >
        {this.$label}
      </button>
    );
  }
}

// Counter Component demonstrating reactivity
class $Counter extends $Chemical {
  $count = 0;
  $step = 1;
  
  increment() {
    this.$count += this.$step;
    const updateFn = componentUpdaters.get(this);
    if (updateFn) updateFn();
  }
  
  decrement() {
    this.$count -= this.$step;
    const updateFn = componentUpdaters.get(this);
    if (updateFn) updateFn();
  }
  
  view() {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '16px',
        background: '#f7fafc',
        borderRadius: '8px'
      }}>
        <button
          onClick={() => this.decrement()}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '2px solid #e53e3e',
            background: 'white',
            color: '#e53e3e',
            fontSize: '20px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          -
        </button>
        <div style={{
          minWidth: '80px',
          textAlign: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#2d3748'
        }}>
          {this.$count}
        </div>
        <button
          onClick={() => this.increment()}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '2px solid #48bb78',
            background: 'white',
            color: '#48bb78',
            fontSize: '20px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          +
        </button>
      </div>
    );
  }
}

// Task Item Component
class $TaskItem extends $Chemical {
  $text = 'Task';
  $completed = false;
  $onToggle = () => {};
  
  view() {
    return (
      <div
        onClick={this.$onToggle}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '12px',
          background: this.$completed ? '#f0fff4' : 'white',
          border: '1px solid #e2e8f0',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'all 0.2s',
          marginBottom: '8px'
        }}
      >
        <div style={{
          width: '20px',
          height: '20px',
          borderRadius: '4px',
          border: '2px solid',
          borderColor: this.$completed ? '#48bb78' : '#cbd5e0',
          background: this.$completed ? '#48bb78' : 'white',
          marginRight: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '14px'
        }}>
          {this.$completed ? '✓' : ''}
        </div>
        <span style={{
          flex: 1,
          textDecoration: this.$completed ? 'line-through' : 'none',
          color: this.$completed ? '#718096' : '#2d3748'
        }}>
          {this.$text}
        </span>
      </div>
    );
  }
}

// Task List Container
class $TaskList extends $Chemical {
  tasks = [];
  
  constructor() {
    super();
    this.tasks = [
      { id: 1, text: 'Build Chemistry components', completed: true },
      { id: 2, text: 'Implement parent-child binding', completed: true },
      { id: 3, text: 'Add reactivity system', completed: false },
      { id: 4, text: 'Create demo application', completed: false }
    ];
  }
  
  toggleTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      const updateFn = componentUpdaters.get(this);
      if (updateFn) updateFn();
    }
  }
  
  view() {
    return (
      <div>
        <h4 style={{ margin: '0 0 16px 0', color: '#4a5568' }}>
          Interactive Todo List
        </h4>
        {this.tasks.map(task => {
          const TaskItem = new $TaskItem().Component;
          return (
            <TaskItem
              key={task.id}
              text={task.text}
              completed={task.completed}
              onToggle={() => this.toggleTask(task.id)}
            />
          );
        })}
      </div>
    );
  }
}

// Main Application Container
class $App extends $Chemical {
  @child($Header)
  header;
  
  @child($Card)
  introCard;
  
  @child($Card)
  featuresCard;
  
  @child($Card)
  interactiveCard;
  
  view() {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #f7fafc, #edf2f7)'
      }}>
        {this.elements}
        
        <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '24px'
          }}>
            {/* Code Example Card */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              border: '2px solid #805ad520'
            }}>
              <h3 style={{ margin: '0 0 16px 0', color: '#805ad5' }}>
                Code Example
              </h3>
              <pre style={{
                background: '#2d3748',
                color: '#48bb78',
                padding: '16px',
                borderRadius: '8px',
                fontSize: '14px',
                overflow: 'auto'
              }}>
{`class $MyComponent extends $Chemical {
  $title = 'Hello World';
  
  view() {
    return <h1>{this.$title}</h1>;
  }
}`}
              </pre>
            </div>
            
            {/* Features List */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              border: '2px solid #38b2ac20'
            }}>
              <h3 style={{ margin: '0 0 16px 0', color: '#38b2ac' }}>
                Key Features
              </h3>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#4a5568' }}>
                <li style={{ marginBottom: '8px' }}>
                  🎯 Automatic parent-child binding with decorators
                </li>
                <li style={{ marginBottom: '8px' }}>
                  ⚡ Built-in reactivity for $ prefixed properties
                </li>
                <li style={{ marginBottom: '8px' }}>
                  🎨 Component composition with view(), above(), below()
                </li>
                <li style={{ marginBottom: '8px' }}>
                  🔄 Lifecycle methods with @entail decorator
                </li>
                <li style={{ marginBottom: '8px' }}>
                  📦 Transform properties with @transform decorator
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  above() {
    const Header = new $Header().Component;
    return <Header title="Chemistry Framework Demo" />;
  }
  
  below() {
    return (
      <div style={{
        background: '#2d3748',
        color: 'white',
        padding: '40px',
        textAlign: 'center'
      }}>
        <p style={{ margin: 0, opacity: 0.8 }}>
          Built with the Chemistry Framework • A React-based component system
        </p>
      </div>
    );
  }
}

// Main Demo Component
export default function ChemistryDemo() {
  const [activeDemo, setActiveDemo] = useState('overview');
  
  const App = new $App().Component;
  const Card = new $Card().Component;
  const Button = new $Button().Component;
  const Counter = new $Counter().Component;
  const TaskList = new $TaskList().Component;
  
  return (
    <div>
      <App>
        <Card
          title="Welcome to Chemistry"
          content="Chemistry is a powerful React-based framework that introduces a new way to compose components with automatic parent-child binding, built-in reactivity, and elegant lifecycle management."
          color="#667eea"
        >
          <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
            <Button
              label="Get Started"
              variant="primary"
              onClick={() => setActiveDemo('counter')}
            />
            <Button
              label="Learn More"
              variant="secondary"
              onClick={() => setActiveDemo('tasks')}
            />
          </div>
        </Card>
        
        {activeDemo === 'counter' && (
          <Card
            title="Interactive Counter"
            content="This counter demonstrates the reactivity system. Properties prefixed with $ automatically trigger re-renders when changed."
            color="#764ba2"
          >
            <Counter step={1} />
            <div style={{ marginTop: '12px' }}>
              <Counter step={5} />
            </div>
          </Card>
        )}
        
        {activeDemo === 'tasks' && (
          <Card
            title="Task Manager"
            content="A todo list showcasing component composition and state management in Chemistry."
            color="#38b2ac"
          >
            <TaskList />
          </Card>
        )}
        
        <Card
          title="Framework Architecture"
          content="Chemistry provides a unique approach to building React applications with object-oriented patterns and automatic binding mechanisms."
          color="#805ad5"
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginTop: '16px'
          }}>
            <div style={{
              padding: '16px',
              background: '#f7fafc',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>🏗️</div>
              <strong>Component Classes</strong>
              <p style={{ margin: '4px 0', fontSize: '14px', color: '#718096' }}>
                Extend $Chemical base class
              </p>
            </div>
            <div style={{
              padding: '16px',
              background: '#f7fafc',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>🔗</div>
              <strong>Auto Binding</strong>
              <p style={{ margin: '4px 0', fontSize: '14px', color: '#718096' }}>
                @child decorator system
              </p>
            </div>
            <div style={{
              padding: '16px',
              background: '#f7fafc',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>⚡</div>
              <strong>Reactivity</strong>
              <p style={{ margin: '4px 0', fontSize: '14px', color: '#718096' }}>
                $ prefix for reactive props
              </p>
            </div>
          </div>
        </Card>
      </App>
    </div>
  );
}