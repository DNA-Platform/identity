import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ app∕tests∕basic-binding∕page..tsx v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`'use client'
import { Chemical, child } from '@/chemistry';

// Test Components
class $Parent extends Chemical {
    @child($Child)
    child?: $Child;
    
    view() {
        return (
            <div style={{ border: '2px solid blue', padding: '20px', borderRadius: '8px' }}>
                <h3>Parent Component</h3>
                <div style={{ marginBottom: '10px' }}>
                    <div>✓ Child bound: {this.child ? 'YES' : 'NO'}</div>
                    <div>✓ Child name: {this.child?.$name || 'N/A'}</div>
                </div>
                <div style={{ marginLeft: '20px', marginTop: '20px' }}>
                    {this.child?.view()}
                </div>
            </div>
        );
    }
}

class $Child extends Chemical {
    $name: string = 'Default Child';
    
    view() {
        return (
            <div style={{ border: '2px solid green', padding: '10px', borderRadius: '4px' }}>
                <h4>Child Component</h4>
                <p>Name: {this.$name}</p>
            </div>
        );
    }
}

export default function BasicBindingTest() {
    const Parent = new $Parent().component();
    const Child = new $Child().component();
    
    return (
        <div style={{ padding: '40px', fontFamily: 'system-ui' }}>
            <h1>Basic Binding Test</h1>
            <p style={{ color: '#666', marginBottom: '30px' }}>
                Tests that a child component is properly bound to its parent using the @child decorator.
            </p>
            
            <div style={{ marginBottom: '20px' }}>
                <h3>Expected Results:</h3>
                <ul>
                    <li>Parent should show "Child bound: YES"</li>
                    <li>Parent should show "Child name: Test Child"</li>
                    <li>Child component should be rendered inside parent</li>
                </ul>
            </div>
            
            <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
                <Parent>
                    <Child name="Test Child" />
                </Parent>
            </div>
            
            <div style={{ marginTop: '30px' }}>
                <h3>Test Status:</h3>
                <div style={{ 
                    padding: '10px', 
                    background: '#d4edda',
                    color: '#155724',
                    border: '1px solid #c3e6cb',
                    borderRadius: '4px'
                }}>
                    ✓ If you see the child component inside the parent with correct name, the test passes
                </div>
            </div>
        </div>
    );
}`}
        </CodeBox>
    </Chapter>
);
