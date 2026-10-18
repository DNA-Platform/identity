// app/tests/child-binding/parent-control.tsx
'use client'
import { useEffect, useState } from 'react';
import {
    Manager, Counter,
    TestCase, TestResults,
    $Manager, $Counter
} from '../shared/test-components';

export default function ParentControlTest() {
    const [results, setResults] = useState<any[]>([]);
    
    useEffect(() => {
        const t = new TestCase();
        
        // Test 1: Parent modifies children on construction
        t.test('Parent modifies children in constructor', () => {
            const manager = new $Manager();
            const counters = [new $Counter(), new $Counter(), new $Counter()];
            
            // Before constructor
            t.assert(counters.every(c => c.count === 0), 'All start at 0');
            
            manager.$Manager(...counters);
            
            // After constructor
            t.assertEqual(counters[0].count, 0, 'First counter set to 0');
            t.assertEqual(counters[1].count, 10, 'Second counter set to 10');
            t.assertEqual(counters[2].count, 20, 'Third counter set to 20');
            t.log('Children modified by parent constructor');
        });
        
        // Test 2: Parent calls child methods
        t.test('Parent calls methods on children', () => {
            const manager = new $Manager();
            const counters = [new $Counter(), new $Counter()];
            manager.$Manager(...counters);
            
            // Call increment on all
            manager.$incrementAll();
            
            t.assertEqual(counters[0].count, 1, 'First counter incremented');
            t.assertEqual(counters[1].count, 11, 'Second counter incremented');
            t.log('Parent successfully called child methods');
        });
        
        // Test 3: Parent resets children
        t.test('Parent resets child state', () => {
            const manager = new $Manager();
            const counters = [new $Counter(), new $Counter()];
            manager.$Manager(...counters);
            
            // Increment then reset
            manager.$incrementAll();
            manager.$incrementAll();
            t.assert(counters[0].count > 0, 'Counter has value');
            
            manager.$resetAll();
            
            t.assert(counters.every(c => c.count === 0), 'All reset to 0');
            t.log('Parent can reset child state');
        });
        
        // Test 4: Parent maintains references
        t.test('Parent maintains child references', () => {
            const manager = new $Manager();
            const counter1 = new $Counter();
            const counter2 = new $Counter();
            
            manager.$Manager(counter1, counter2);
            
            t.assert(manager.counters[0] === counter1, 'First reference preserved');
            t.assert(manager.counters[1] === counter2, 'Second reference preserved');
            
            // External modification reflected
            counter1.count = 100;
            t.assertEqual(manager.counters[0].count, 100, 'External change visible');
            t.log('References properly maintained');
        });
        
        setResults(t.results);
    }, []);
    
    return (
        <div>
            <h2>Parent Control Tests</h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>
                Testing parent components controlling their children
            </p>
            
            <div style={{ marginBottom: '30px' }}>
                <h3>Test: Manager with Counters</h3>
                <Manager>
                    <Counter label="Counter A" />
                    <Counter label="Counter B" />
                    <Counter label="Counter C" />
                </Manager>
            </div>
            
            <div style={{ marginBottom: '30px' }}>
                <h3>Test: Single Counter Manager</h3>
                <Manager>
                    <Counter label="Lonely Counter" />
                </Manager>
            </div>
            
            <div style={{ marginBottom: '30px' }}>
                <h3>Test: Many Counters</h3>
                <Manager>
                    {Array.from({ length: 5 }, (_, i) => (
                        <Counter key={i} label={`Counter ${i + 1}`} />
                    ))}
                </Manager>
            </div>
            
            <TestResults results={results} />
        </div>
    );
}