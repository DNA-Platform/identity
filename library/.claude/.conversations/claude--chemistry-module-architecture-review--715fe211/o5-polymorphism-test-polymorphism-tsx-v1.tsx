import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Polymorphism Test - polymorphism..tsx v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// app/tests/child-binding/polymorphism.tsx
'use client'
import { useEffect, useState } from 'react';
import {
    Grid, Block, FancyBlock,
    TestCase, TestResults,
    $Grid, $Block, $FancyBlock
} from '../shared/test-components';

export default function PolymorphismTest() {
    const [results, setResults] = useState<any[]>([]);
    
    useEffect(() => {
        const t = new TestCase();
        
        // Test 1: Base class children
        t.test('All base class children', () => {
            const grid = new $Grid();
            const blocks = [new $Block(), new $Block()];
            
            grid.$Grid(...blocks);
            
            t.assertEqual(grid.blocks.length, 2, 'Should have 2 blocks');
            t.assert(grid.blocks.every(b => b instanceof $Block), 'All should be $Block');
            t.log('Base class children accepted');
        });
        
        // Test 2: Mixed base and subclass
        t.test('Mixed base and subclass children', () => {
            const grid = new $Grid();
            const blocks = [
                new $Block(),
                new $FancyBlock(),
                new $Block()
            ];
            
            grid.$Grid(...blocks);
            
            t.assertEqual(grid.blocks.length, 3, 'Should have 3 blocks');
            t.assert(grid.blocks[0] instanceof $Block, 'First is $Block');
            t.assert(grid.blocks[1] instanceof $FancyBlock, 'Second is $FancyBlock');
            t.assert(grid.blocks[1] instanceof $Block, '$FancyBlock is also $Block');
            t.log('Polymorphic children accepted');
        });
        
        // Test 3: All subclass children
        t.test('All subclass children', () => {
            const grid = new $Grid();
            const blocks = [new $FancyBlock(), new $FancyBlock()];
            
            grid.$Grid(...blocks);
            
            t.assertEqual(grid.blocks.length, 2, 'Should have 2 blocks');
            t.assert(grid.blocks.every(b => b instanceof $FancyBlock), 'All are $FancyBlock');
            t.assert(grid.blocks.every(b => b instanceof $Block), 'All are also $Block');
            t.log('Subclass children work as base class');
        });
        
        // Test 4: Runtime type checking
        t.test('Runtime polymorphic behavior', () => {
            const grid = new $Grid();
            const fancy = new $FancyBlock();
            fancy.$gradient = true;
            fancy.$color = 'blue';
            
            grid.$Grid(fancy);
            
            const block = grid.blocks[0];
            t.assert(block instanceof $FancyBlock, 'Type preserved');
            if (block instanceof $FancyBlock) {
                t.assertEqual(block.$gradient, true, 'Subclass property preserved');
                t.log('Subclass properties intact');
            }
        });
        
        setResults(t.results);
    }, []);
    
    return (
        <div>
            <h2>Polymorphism Tests</h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>
                Testing subclasses as children (Liskov substitution)
            </p>
            
            <div style={{ marginBottom: '30px' }}>
                <h3>Test: All Base Blocks</h3>
                <Grid>
                    <Block color="red" size="small" />
                    <Block color="green" size="medium" />
                    <Block color="blue" size="large" />
                </Grid>
            </div>
            
            <div style={{ marginBottom: '30px' }}>
                <h3>Test: Mixed Block Types</h3>
                <Grid>
                    <Block color="gray" />
                    <FancyBlock color="gold" gradient={true} />
                    <Block color="silver" />
                    <FancyBlock color="purple" />
                    <Block color="brown" />
                    <FancyBlock color="orange" gradient={true} />
                </Grid>
            </div>
            
            <div style={{ marginBottom: '30px' }}>
                <h3>Test: All Fancy Blocks</h3>
                <Grid>
                    <FancyBlock color="red" gradient={true} />
                    <FancyBlock color="green" />
                    <FancyBlock color="blue" gradient={true} />
                </Grid>
            </div>
            
            <TestResults results={results} />
        </div>
    );
}`}
        </CodeBox>
    </Chapter>
);
