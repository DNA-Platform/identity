// app/tests/shared/test-components.tsx
'use client'
import { $Chemical, $, $use } from '@/chemistry';
import React from 'react';

// ============================================
// REUSABLE TEST CHEMICALS
// ============================================

// Simple display component for testing prop passing
export class $Display extends $Chemical {
    $text = 'default';
    $number = 0;
    
    view() {
        return <span>{this.$text} ({this.$number})</span>;
    }
}

// Counter for testing state changes
export class $Counter extends $Chemical {
    count = 0;
    $label = 'Count';
    
    $increment() {
        this.count++;
    }
    
    view() {
        return (
            <div>
                <span>{this.$label}: {this.count}</span>
                <button onClick={() => this.$increment()}>+</button>
            </div>
        );
    }
}

// Generic item for testing collections
export class $Item extends $Chemical {
    $id = '';
    $value = '';
    
    view() {
        return <div data-id={this.$id}>{this.$value}</div>;
    }
}

// Container that takes items as constructor args
export class $List extends $Chemical {
    items: $Item[] = [];
    
    $List(...items: $Item[]) {
        this.items = items;
    }
    
    view() {
        return (
            <div className="list">
                {this.items.map(item => {
                    const [Item, key] = $use(item, 'key');
                    return <Item key={key} />;
                })}
            </div>
        );
    }
}

// Mixed-type container for testing complex constructors
export class $Card extends $Chemical {
    header?: $Display;
    items: $Item[] = [];
    footer?: $Display;
    
    $Card(header: $Display, items: $Item[], footer?: $Display) {
        this.header = header;
        this.items = items;
        this.footer = footer;
    }
    
    view() {
        const Header = $use(this.header);
        const Footer = $use(this.footer);
        return (
            <div className="card">
                {Header && <div className="header"><Header /></div>}
                <div className="items">
                    {this.items.map(item => {
                        const [Item, key] = $use(item, 'key');
                        return <Item key={key} />;
                    })}
                </div>
                {Footer && <div className="footer"><Footer /></div>}
            </div>
        );
    }
}

// Parent that modifies children
export class $Manager extends $Chemical {
    counters: $Counter[] = [];
    
    $Manager(...counters: $Counter[]) {
        this.counters = counters;
        // Modify children on construction
        counters.forEach((c, i) => {
            c.count = i * 10;
        });
    }
    
    $resetAll() {
        this.counters.forEach(c => c.count = 0);
    }
    
    $incrementAll() {
        this.counters.forEach(c => c.$increment());
    }
    
    view() {
        return (
            <div className="manager">
                <button onClick={() => this.$resetAll()}>Reset All</button>
                <button onClick={() => this.$incrementAll()}>Increment All</button>
                <div className="counters">
                    {this.counters.map(counter => {
                        const [Counter, key] = $use(counter, 'key');
                        return <Counter key={key} />;
                    })}
                </div>
            </div>
        );
    }
}

// Polymorphic base and subclass
export class $Block extends $Chemical {
    $color = 'gray';
    $size = 'medium';
    
    view() {
        return (
            <div style={{ 
                background: this.$color,
                padding: this.$size === 'small' ? '5px' : this.$size === 'large' ? '20px' : '10px'
            }}>
                Block
            </div>
        );
    }
}

export class $FancyBlock extends $Block {
    $gradient = false;
    
    view() {
        const bg = this.$gradient 
            ? `linear-gradient(45deg, ${this.$color}, white)`
            : this.$color;
        return (
            <div style={{ 
                background: bg,
                padding: '15px',
                border: '2px solid gold'
            }}>
                ✨ Fancy Block
            </div>
        );
    }
}

// Container that accepts polymorphic children
export class $Grid extends $Chemical {
    blocks: $Block[] = [];
    
    $Grid(...blocks: $Block[]) {
        this.blocks = blocks;
    }
    
    view() {
        return (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {this.blocks.map(block => {
                    const [Block, key] = $use(block, 'key');
                    return <Block key={key} />;
                })}
            </div>
        );
    }
}

// ============================================
// TEST RESULT DISPLAY COMPONENT
// ============================================

export interface TestResult {
    name: string;
    passed: boolean;
    error?: string;
    logs?: string[];
}

export function TestResults({ results }: { results: TestResult[] }) {
    const passed = results.filter(r => r.passed).length;
    const failed = results.filter(r => !r.passed).length;
    
    return (
        <div style={{ marginTop: '20px', padding: '15px', background: '#f5f5f5', borderRadius: '8px' }}>
            <h3>Results: {passed}/{results.length} passed</h3>
            {results.map((result, i) => (
                <div key={i} style={{ 
                    marginTop: '10px',
                    padding: '10px',
                    background: result.passed ? '#d4edda' : '#f8d7da',
                    borderRadius: '4px'
                }}>
                    <strong>{result.passed ? '✓' : '✗'} {result.name}</strong>
                    {result.error && (
                        <div style={{ color: 'red', marginTop: '5px' }}>{result.error}</div>
                    )}
                    {result.logs && result.logs.length > 0 && (
                        <div style={{ marginTop: '5px', fontSize: '12px', color: '#666' }}>
                            {result.logs.map((log, j) => <div key={j}>• {log}</div>)}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

// ============================================
// TEST RUNNER UTILITIES
// ============================================

export class TestCase {
    results: TestResult[] = [];
    currentTest: string = '';
    logs: string[] = [];
    
    test(name: string, fn: () => void) {
        this.currentTest = name;
        this.logs = [];
        try {
            fn();
            this.results.push({ name, passed: true, logs: this.logs });
        } catch (e) {
            this.results.push({ 
                name, 
                passed: false, 
                error: e instanceof Error ? e.message : String(e),
                logs: this.logs
            });
        }
    }
    
    log(message: string) {
        this.logs.push(message);
    }
    
    assert(condition: boolean, message: string) {
        if (!condition) throw new Error(message);
    }
    
    assertEqual(actual: any, expected: any, message?: string) {
        if (actual !== expected) {
            throw new Error(message || `Expected ${expected}, got ${actual}`);
        }
    }
    
    assertArrayEqual(actual: any[], expected: any[], message?: string) {
        if (actual.length !== expected.length) {
            throw new Error(message || `Array length mismatch: ${actual.length} vs ${expected.length}`);
        }
        for (let i = 0; i < actual.length; i++) {
            if (actual[i] !== expected[i]) {
                throw new Error(message || `Array mismatch at index ${i}: ${actual[i]} vs ${expected[i]}`);
            }
        }
    }
}

// Export components
export const Display = new $Display().Component;
export const Counter = new $Counter().Component;
export const Item = new $Item().Component;
export const List = new $List().Component;
export const Card = new $Card().Component;
export const Manager = new $Manager().Component;
export const Block = new $Block().Component;
export const FancyBlock = new $FancyBlock().Component;
export const Grid = new $Grid().Component;