// app/tests/child-binding/basic-constructor.tsx
'use client'
import { useEffect, useState } from 'react';
import { 
    Display, Item, List, Counter,
    TestCase, TestResults,
    $Display, $Item, $List, $Counter
} from '../shared/test-components';

export default function BasicConstructorTest() {
    const [results, setResults] = useState<any[]>([]);
    
    useEffect(() => {
        const t = new TestCase();
        
        // Test 1: Single child
        t.test('Single child passed to constructor', () => {
            const list = new $List();
            const item = new $Item();
            item.$id = 'test-1';
            item.$value = 'Test Item';
            
            // Simulate constructor call
            list.$List(item);
            
            t.assertEqual(list.items.length, 1, 'Should have 1 item');
            t.assertEqual(list.items[0], item, 'Should be the same instance');
            t.log(`Item ID: ${list.items[0].$id}`);
        });
        
        // Test 2: Multiple children
        t.test('Multiple children passed to constructor', () => {
            const list = new $List();
            const items = [
                new $Item(),
                new $Item(),
                new $Item()
            ];
            items.forEach((item, i) => {
                item.$id = `item-${i}`;
                item.$value = `Value ${i}`;
            });
            
            list.$List(...items);
            
            t.assertEqual(list.items.length, 3, 'Should have 3 items');
            t.assertArrayEqual(list.items, items, 'Should be same instances');
            t.log(`Received ${list.items.length} items`);
        });
        
        // Test 3: No children
        t.test('Constructor with no children', () => {
            const list = new $List();
            list.$List();
            
            t.assertEqual(list.items.length, 0, 'Should have no items');
            t.log('Empty constructor handled correctly');
        });
        
        // Test 4: Rest parameters
        t.test('Rest parameters in constructor', () => {
            const list = new $List();
            const items = Array.from({ length: 10 }, (_, i) => {
                const item = new $Item();
                item.$id = `rest-${i}`;
                return item;
            });
            
            list.$List(...items);
            
            t.assertEqual(list.items.length, 10, 'Should handle many items');
            t.log(`Handled ${list.items.length} rest parameters`);
        });
        
        setResults(t.results);
    }, []);
    
    return (
        <div>
            <h2>Basic Constructor Tests</h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>
                Testing children passed as constructor arguments
            </p>
            
            <div style={{ marginBottom: '30px' }}>
                <h3>Test: Single Item List</h3>
                <List>
                    <Item id="1" value="Single Item" />
                </List>
            </div>
            
            <div style={{ marginBottom: '30px' }}>
                <h3>Test: Multiple Items</h3>
                <List>
                    <Item id="1" value="First" />
                    <Item id="2" value="Second" />
                    <Item id="3" value="Third" />
                </List>
            </div>
            
            <div style={{ marginBottom: '30px' }}>
                <h3>Test: Empty List</h3>
                <List />
            </div>
            
            <TestResults results={results} />
        </div>
    );
}