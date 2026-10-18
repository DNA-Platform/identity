import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Child Binding Test Navigation - app∕tests∕child-binding∕page..tsx v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// app/tests/child-binding/page.tsx
'use client'
import { useState } from 'react';
import BasicConstructor from './basic-constructor';
import ArrayGroups from './array-groups';
import Polymorphism from './polymorphism';
import ParentControl from './parent-control';
import MixedTypes from './mixed-types';
import EdgeCases from './edge-cases';

const subTests = [
    {
        id: 'basic-constructor',
        name: 'Basic Constructor',
        description: 'Children as constructor arguments',
        component: BasicConstructor
    },
    {
        id: 'array-groups',
        name: 'Array Groups',
        description: 'Using $ to group arrays',
        component: ArrayGroups
    },
    {
        id: 'polymorphism',
        name: 'Polymorphism',
        description: 'Subclasses as children',
        component: Polymorphism
    },
    {
        id: 'parent-control',
        name: 'Parent Control',
        description: 'Parents modifying children',
        component: ParentControl
    },
    {
        id: 'mixed-types',
        name: 'Mixed Types',
        description: 'Complex constructor signatures',
        component: MixedTypes
    },
    {
        id: 'edge-cases',
        name: 'Edge Cases',
        description: 'Error handling and validation',
        component: EdgeCases
    }
];

export default function ChildBindingTests() {
    const [selectedTest, setSelectedTest] = useState<string>('basic-constructor');
    
    const TestComponent = subTests.find(t => t.id === selectedTest)?.component;
    
    return (
        <div style={{ display: 'flex', height: '100vh', fontFamily: 'system-ui' }}>
            {/* Sub-test navigation */}
            <div style={{ 
                width: '250px',
                borderRight: '1px solid #e0e0e0',
                padding: '20px',
                background: '#fafafa'
            }}>
                <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>
                    Child Binding Tests
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {subTests.map(test => (
                        <button
                            key={test.id}
                            onClick={() => setSelectedTest(test.id)}
                            style={{
                                padding: '10px',
                                background: selectedTest === test.id ? '#e3f2fd' : 'white',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                textAlign: 'left',
                                cursor: 'pointer',
                                transition: 'background 0.2s'
                            }}
                        >
                            <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '4px' }}>
                                {test.name}
                            </div>
                            <div style={{ fontSize: '12px', color: '#666' }}>
                                {test.description}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
            
            {/* Test content */}
            <div style={{ flex: 1, padding: '30px', overflow: 'auto' }}>
                {TestComponent && <TestComponent />}
            </div>
        </div>
    );
}`}
        </CodeBox>
    </Chapter>
);
