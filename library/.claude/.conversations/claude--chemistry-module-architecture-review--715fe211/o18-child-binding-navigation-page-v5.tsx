import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Child Binding Navigation Page v5 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// app/tests/child-binding/page.tsx
'use client'
import { useState } from 'react';

// Import test components
import BasicTests from './basic-tests';
import ArgTests from './arg-tests';

const subTests = [
    {
        id: 'basic',
        name: 'Basic Tests',
        description: 'Original child binding tests',
        component: BasicTests
    },
    {
        id: 'arg-tests',
        name: 'Arg Tests',
        description: 'Different parameter types',
        component: ArgTests
    },
    // Add more test files here as we create them
];

export default function ChildBindingTests() {
    const [selectedTest, setSelectedTest] = useState('basic');
    
    const TestComponent = subTests.find(t => t.id === selectedTest)?.component || BasicTests;
    
    return (
        <div style={{ fontFamily: 'system-ui' }}>
            {/* Sub-navigation bar */}
            {subTests.length > 1 && (
                <div style={{ 
                    borderBottom: '1px solid #e0e0e0',
                    background: '#f5f5f5',
                    padding: '10px 40px',
                    display: 'flex',
                    gap: '20px'
                }}>
                    {subTests.map(test => (
                        <button
                            key={test.id}
                            onClick={() => setSelectedTest(test.id)}
                            style={{
                                padding: '8px 16px',
                                background: selectedTest === test.id ? 'white' : 'transparent',
                                border: selectedTest === test.id ? '1px solid #ddd' : '1px solid transparent',
                                borderBottom: 'none',
                                borderRadius: '4px 4px 0 0',
                                cursor: 'pointer',
                                marginBottom: '-1px',
                                fontWeight: selectedTest === test.id ? 'bold' : 'normal'
                            }}
                        >
                            <div>{test.name}</div>
                            {test.description && (
                                <div style={{ fontSize: '11px', color: '#666', fontWeight: 'normal' }}>
                                    {test.description}
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            )}
            
            {/* Test content */}
            <TestComponent />
        </div>
    );
}`}
        </CodeBox>
    </Chapter>
);
