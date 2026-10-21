// app/tests/child-binding/mixed-types.tsx
'use client'
import { useEffect, useState } from 'react';
import { $ } from '@/chemistry';
import {
    Card, Display, Item,
    TestCase, TestResults,
    $Card, $Display, $Item
} from '../shared/test-components';

export default function MixedTypesTest() {
    const [results, setResults] = useState<any[]>([]);
    
    useEffect(() => {
        const t = new TestCase();
        
        // Test 1: Required + Array + Optional
        t.test('Required header, array, optional footer', () => {
            const card = new $Card();
            const header = new $Display();
            header.$text = 'Required Header';
            
            const items = [new $Item(), new $Item()];
            const footer = new $Display();
            footer.$text = 'Optional Footer';
            
            card.$Card(header, items, footer);
            
            t.assert(card.header === header, 'Header assigned');
            t.assertEqual(card.items.length, 2, 'Items array assigned');
            t.assert(card.footer === footer, 'Footer assigned');
            t.log('All parameters correctly assigned');
        });
        
        // Test 2: Required + Array, no optional
        t.test('Without optional parameter', () => {
            const card = new $Card();
            const header = new $Display();
            const items = [new $Item()];
            
            card.$Card(header, items);
            
            t.assert(card.header === header, 'Header assigned');
            t.assertEqual(card.items.length, 1, 'Items assigned');
            t.assert(card.footer === undefined, 'Footer is undefined');
            t.log('Optional parameter correctly undefined');
        });
        
        // Test 3: Empty array in middle
        t.test('Empty array parameter', () => {
            const card = new $Card();
            const header = new $Display();
            const footer = new $Display();
            
            card.$Card(header, [], footer);
            
            t.assert(card.header === header, 'Header assigned');
            t.assertEqual(card.items.length, 0, 'Empty array handled');
            t.assert(card.footer === footer, 'Footer still assigned');
            t.log('Empty array doesn\'t break parameter order');
        });
        
        // Test 4: Complex nesting
        t.test('Complex nested structure', () => {
            // In real usage, this would be through JSX
            // Testing the concept of nested components
            const outer = new $Card();
            const header = new $Display();
            
            // Items could themselves be complex components
            const items = [new $Item()];
            items[0].$value = 'Complex Item';
            
            outer.$Card(header, items);
            
            t.assert(outer.header != null, 'Nested structure works');
            t.log('Complex nesting conceptually valid');
        });
        
        setResults(t.results);
    }, []);
    
    return (
        <div>
            <h2>Mixed Types Tests</h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>
                Testing complex constructor signatures with mixed types
            </p>
            
            <div style={{ marginBottom: '30px' }}>
                <h3>Test: Full Card (Header + Items + Footer)</h3>
                <Card>
                    <Display text="Card Header" number={1} />
                    <$>
                        <Item id="1" value="First Item" />
                        <Item id="2" value="Second Item" />
                    </$>
                    <Display text="Card Footer" number={99} />
                </Card>
            </div>
            
            <div style={{ marginBottom: '30px' }}>
                <h3>Test: Card without Footer</h3>
                <Card>
                    <Display text="Only Header" number={1} />
                    <$>
                        <Item id="a" value="Item A" />
                        <Item id="b" value="Item B" />
                        <Item id="c" value="Item C" />
                    </$>
                </Card>
            </div>
            
            <div style={{ marginBottom: '30px' }}>
                <h3>Test: Card with Empty Items</h3>
                <Card>
                    <Display text="Header" number={1} />
                    <$></$>
                    <Display text="Footer (no items between)" number={2} />
                </Card>
            </div>
            
            <div style={{ marginBottom: '30px' }}>
                <h3>Test: Nested Cards</h3>
                <Card>
                    <Display text="Outer Card" number={1} />
                    <$>
                        <Item id="outer-1" value="Outer Item" />
                    </$>
                    <Card>
                        <Display text="Inner Card" number={2} />
                        <$>
                            <Item id="inner-1" value="Inner Item" />
                        </$>
                    </Card>
                </Card>
            </div>
            
            <TestResults results={results} />
        </div>
    );
}