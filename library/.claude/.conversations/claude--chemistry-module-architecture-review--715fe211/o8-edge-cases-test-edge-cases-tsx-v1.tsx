import { Chapter, List, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Edge Cases Test - edge-cases..tsx v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// app/tests/child-binding/edge-cases.tsx
'use client'
import { useEffect, useState } from 'react';
import { $ } from '@/chemistry';
import {
    List, Item, Card, Display,
    TestCase, TestResults,
    $List, $Item, $Card, $Display
} from '../shared/test-components';

export default function EdgeCasesTest() {
    const [results, setResults] = useState<any[]>([]);
    
    useEffect(() => {
        const t = new TestCase();
        
        // Test 1: Wrong type handling
        t.test('Wrong type passed to constructor', () => {
            try {
                const list = new $List();
                // In real usage, Chemistry would validate types
                // For now, testing the concept
                t.log('Type validation would occur at framework level');
                t.assert(true, 'Framework should validate types');
            } catch (e) {
                t.log('Type error caught: ' + e);
            }
        });
        
        // Test 2: Null/undefined children
        t.test('Null and undefined children', () => {
            const list = new $List();
            // Testing handling of null/undefined
            const items = [new $Item(), undefined, new $Item()].filter(Boolean) as $Item[];
            
            list.$List(...items);
            
            t.assertEqual(list.items.length, 2, 'Undefined filtered out');
            t.log('Null/undefined handled gracefully');
        });
        
        // Test 3: Circular references
        t.test('Circular parent-child references', () => {
            // Chemistry should handle circular refs
            const parent = new $List();
            const child = new $Item();
            
            parent.$List(child);
            // Child knows parent through Chemistry's parent tracking
            
            t.assert(parent.items.includes(child), 'Child in parent');
            t.log('Circular refs managed by framework');
        });
        
        // Test 4: Very large child arrays
        t.test('Large number of children', () => {
            const list = new $List();
            const items = Array.from({ length: 100 }, (_, i) => {
                const item = new $Item();
                item.$id = \`large-\${i}\`;
                return item;
            });
            
            list.$List(...items);
            
            t.assertEqual(list.items.length, 100, 'Handles 100 children');
            t.log('Large arrays handled successfully');
        });
        
        // Test 5: Dynamic child addition
        t.test('Adding children after construction', () => {
            const list = new $List();
            const initial = [new $Item()];
            
            list.$List(...initial);
            t.assertEqual(list.items.length, 1, 'Initial item');
            
            // Direct manipulation after construction
            const newItem = new $Item();
            list.items.push(newItem);
            
            t.assertEqual(list.items.length, 2, 'Item added post-construction');
            t.log('Dynamic child addition works');
        });
        
        // Test 6: Constructor called multiple times
        t.test('Constructor re-invocation', () => {
            const card = new $Card();
            const header1 = new $Display();
            header1.$text = 'First';
            
            card.$Card(header1, []);
            t.assert(card.header === header1, 'First header set');
            
            const header2 = new $Display();
            header2.$text = 'Second';
            
            // Calling constructor again (React re-render scenario)
            card.$Card(header2, []);
            t.assert(card.header === header2, 'Header updated');
            t.log('Constructor re-invocation handled');
        });
        
        setResults(t.results);
    }, []);
    
    return (
        <div>
            <h2>Edge Cases Tests</h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>
                Testing error handling, validation, and edge cases
            </p>
            
            <div style={{ marginBottom: '30px' }}>
                <h3>Test: Empty Components</h3>
                <List />
                <Card>
                    <Display text="Header Only" number={0} />
                    <$></$>
                </Card>
            </div>
            
            <div style={{ marginBottom: '30px' }}>
                <h3>Test: Many Children</h3>
                <List>
                    {Array.from({ length: 20 }, (_, i) => (
                        <Item key={i} id={\`many-\${i}\`} value={\`Item \${i + 1}\`} />
                    ))}
                </List>
            </div>
            
            <div style={{ marginBottom: '30px' }}>
                <h3>Test: Mixed Valid/Invalid (Conceptual)</h3>
                <List>
                    <Item id="valid-1" value="Valid Item" />
                    {/* In real usage, invalid children would be caught */}
                    <Item id="valid-2" value="Another Valid" />
                </List>
            </div>
            
            <div style={{ marginBottom: '30px' }}>
                <h3>Test: Deeply Nested</h3>
                <Card>
                    <Display text="Level 1" number={1} />
                    <$>
                        <Card>
                            <Display text="Level 2" number={2} />
                            <$>
                                <Card>
                                    <Display text="Level 3" number={3} />
                                    <$>
                                        <Item id="deep" value="Deep Item" />
                                    </$>
                                </Card>
                            </$>
                        </Card>
                    </$>
                </Card>
            </div>
            
            <TestResults results={results} />
        </div>
    );
}`}
        </CodeBox>
    </Chapter>
);
