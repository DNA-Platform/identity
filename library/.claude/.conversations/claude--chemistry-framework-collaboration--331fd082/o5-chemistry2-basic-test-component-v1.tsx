import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Chemistry2 Basic Test Component v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`// Basic test for chemistry2
'use client'
import { $Chemical, $ } from '@/chemistry2';

// Test 1: Most basic - can we pass a prop and see it?
class $Display extends $Chemical {
    @$(String)
    $text = 'initial';
    
    view() {
        console.log('Display.view() - $text:', this.$text);
        return (
            <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '4px' }}>
                <div>Text: {this.$text}</div>
            </div>
        );
    }
}

// Test 2: Can we update a property and see the change?
class $Counter extends $Chemical {
    count = 0;
    
    increment() {
        console.log('Before increment:', this.count);
        this.count = this.count + 1;
        console.log('After increment:', this.count);
    }
    
    view() {
        return (
            <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '4px' }}>
                <div>Count: {this.count}</div>
                <button 
                    onClick={() => this.increment()}
                    style={{ 
                        border: '1px solid #ccc',
                        background: '#f5f5f5',
                        padding: '5px 15px',
                        cursor: 'pointer',
                        borderRadius: '4px',
                        marginTop: '8px'
                    }}
                >
                    Increment
                </button>
            </div>
        );
    }
}

// Test 3: Multiple props
class $MultiProp extends $Chemical {
    @$(String)
    $first = 'default1';
    
    @$(String)
    $second = 'default2';
    
    @$(Number)
    $third = 0;
    
    view() {
        return (
            <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '4px' }}>
                <div>First: {this.$first}</div>
                <div>Second: {this.$second}</div>
                <div>Third: {this.$third}</div>
            </div>
        );
    }
}

export default function BasicsTest() {
    // Need to get Components - but assignComponent is private
    // This is what needs to be fixed first
    const display = new $Display();
    const counter = new $Counter();
    const multiProp = new $MultiProp();
    
    // For now, we can't access .Component because assignComponent() is private
    // This needs to be addressed in chemistry2
    
    return (
        <div style={{ padding: '40px', fontFamily: 'system-ui' }}>
            <h1>Chemistry2 Basics Test</h1>
            <p style={{ color: '#666', marginBottom: '30px' }}>
                Testing the fundamentals of the Chemistry2 framework.
            </p>
            
            <div style={{ marginBottom: '40px' }}>
                <h2>Status</h2>
                <p>Need to make assignComponent() public or call it in constructor</p>
                <p>Then we can test:</p>
                <ul>
                    <li>Simple prop passing with @$(String)</li>
                    <li>Property reactivity</li>
                    <li>Multiple typed props</li>
                </ul>
            </div>
        </div>
    );
}`}
        </CodeBox>
    </Chapter>
);
