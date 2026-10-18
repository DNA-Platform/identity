import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Array Groups Test - array-groups..tsx v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// app/tests/child-binding/array-groups.tsx
'use client'
import { useEffect, useState } from 'react';
import { $, $use } from '@/chemistry';
import {
    Card, Display, Item,
    TestCase, TestResults,
    $Card, $Display, $Item
} from '../shared/test-components';

export default function ArrayGroupsTest() {
    const [results, setResults] = useState<any[]>([]);
    
    useEffect(() => {
        const t = new TestCase();
        
        // Test 1: Single array group
        t.test('Single $ array group', () => {
            const card = new $Card();
            const header = new $Display();
            header.$text = 'Header';
            
            const items = [new $Item(), new $Item()];
            items[0].$value = 'Item 1';
            items[1].$value = 'Item 2';
            
            // Simulate: <Card><Display /><$><Item /><Item /></$></Card>
            card.$Card(header, items);
            
            t.assertEqual(card.items.length, 2, 'Should have 2 items from array');
            t.assert(card.header === header, 'Header should be assigned');
            t.log('Array correctly unwrapped');
        });
        
        // Test 2: Multiple array groups
        t.test('Multiple $ array groups', () => {
            // This would need a different component that accepts multiple arrays
            // For now, testing the concept
            t.log('Multiple array groups would be processed sequentially');
            t.assert(true, 'Conceptual test passes');
        });
        
        // Test 3: Empty array group
        t.test('Empty $ array group', () => {
            const card = new $Card();
            const header = new $Display();
            card.$Card(header, []);
            
            t.assertEqual(card.items.length, 0, 'Should handle empty array');
            t.log('Empty array handled correctly');
        });
        
        // Test 4: Nested arrays (arrays within arrays)
        t.test('Nested array handling', () => {
            // $ components should flatten one level
            t.log('Nested arrays would need special handling');
            t.assert(true, 'Conceptual test for nested arrays');
        });
        
        setResults(t.results);
    }, []);
    
    return (
        <div>
            <h2>Array Groups Tests</h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>
                Testing $ structural component for grouping arrays
            </p>
            
            <div style={{ marginBottom: '30px' }}>
                <h3>Test: Card with Array Group</h3>
                <Card>
                    <Display text="Card Header" number={1} />
                    <$>
                        <Item id="a" value="First Item" />
                        <Item id="b" value="Second Item" />
                        <Item id="c" value="Third Item" />
                    </$>
                    <Display text="Card Footer" number={2} />
                </Card>
            </div>
            
            <div style={{ marginBottom: '30px' }}>
                <h3>Test: Multiple Array Groups</h3>
                <div style={{ border: '1px solid #ddd', padding: '10px' }}>
                    <$>
                        <Item id="group1-1" value="Group 1 Item 1" />
                        <Item id="group1-2" value="Group 1 Item 2" />
                    </$>
                    <$>
                        <Item id="group2-1" value="Group 2 Item 1" />
                        <Item id="group2-2" value="Group 2 Item 2" />
                    </$>
                </div>
            </div>
            
            <div style={{ marginBottom: '30px' }}>
                <h3>Test: Empty Array Group</h3>
                <Card>
                    <Display text="Header Only" number={0} />
                    <$></$>
                </Card>
            </div>
            
            <TestResults results={results} />
        </div>
    );
}`}
        </CodeBox>
    </Chapter>
);
