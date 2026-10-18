import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Extended Child Binding Tests - page..tsx v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// app/tests/child-binding/page.tsx
'use client'
import { $Chemical, $, $use } from '@/chemistry';
import React, { useState } from 'react';

// ============================================
// REUSABLE TEST COMPONENTS
// ============================================

class $Item extends $Chemical {
    $id = '';
    $value = '';
    
    view() {
        return <div style={{ padding: '4px', background: '#f0f0f0', margin: '2px' }}>
            {this.$id}: {this.$value}
        </div>;
    }
}

class $Container extends $Chemical {
    items: $Item[] = [];
    
    $Container(...items: $Item[]) {
        console.log('$Container received', items.length, 'items');
        this.items = items;
    }
    
    view() {
        return (
            <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '4px' }}>
                <div>Container ({this.items.length} items)</div>
                {this.items.map(item => {
                    const [Item, key] = $use(item, 'key');
                    return <Item key={key} />;
                })}
            </div>
        );
    }
}

class $Header extends $Chemical {
    $title = '';
    
    view() {
        return <h4 style={{ color: '#333', margin: '0 0 10px 0' }}>{this.$title}</h4>;
    }
}

class $Mixed extends $Chemical {
    header?: $Header;
    items: $Item[] = [];
    
    $Mixed(header: $Header, items: $Item[]) {
        console.log('$Mixed:', header?.$title, '+', items.length, 'items');
        this.header = header;
        this.items = items;
    }
    
    view() {
        const Header = $use(this.header);
        return (
            <div style={{ border: '2px solid #666', padding: '10px', borderRadius: '4px' }}>
                {Header && <Header />}
                {this.items.map(item => {
                    const [Item, key] = $use(item, 'key');
                    return <Item key={key} />;
                })}
            </div>
        );
    }
}

// Export components
const Item = new $Item().Component;
const Container = new $Container().Component;
const Header = new $Header().Component;
const Mixed = new $Mixed().Component;

// ============================================
// MAIN TEST PAGE WITH TABS
// ============================================

export default function ChildBindingTest() {
    const [activeTab, setActiveTab] = useState('basic');
    
    const tabs = [
        { id: 'basic', label: 'Basic Constructor' },
        { id: 'arrays', label: 'Array Groups' },
        { id: 'mixed', label: 'Mixed Types' },
        { id: 'nested', label: 'Nested' },
    ];
    
    return (
        <div style={{ padding: '40px', fontFamily: 'system-ui' }}>
            <h1>Child Binding Tests</h1>
            <p style={{ color: '#666', marginBottom: '30px' }}>
                Testing Chemistry's children-as-constructor-arguments system.
            </p>
            
            {/* Tab Navigation */}
            <div style={{ 
                display: 'flex', 
                gap: '10px', 
                borderBottom: '2px solid #ddd',
                marginBottom: '30px'
            }}>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                            padding: '10px 20px',
                            background: activeTab === tab.id ? '#007bff' : 'transparent',
                            color: activeTab === tab.id ? 'white' : '#333',
                            border: 'none',
                            borderRadius: '4px 4px 0 0',
                            cursor: 'pointer',
                            fontWeight: activeTab === tab.id ? 'bold' : 'normal'
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            
            {/* Test Content */}
            {activeTab === 'basic' && (
                <div>
                    <h2>Basic Constructor Arguments</h2>
                    <p>Children become constructor arguments in order</p>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h3>Test 1: Simple Items</h3>
                        <Container>
                            <Item id="1" value="First" />
                            <Item id="2" value="Second" />
                            <Item id="3" value="Third" />
                        </Container>
                        <div style={{ marginTop: '10px', color: '#666', fontSize: '12px' }}>
                            ✓ Check console - should log "3 items"<br/>
                            ✓ Items should appear in order
                        </div>
                    </div>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h3>Test 2: Empty Container</h3>
                        <Container />
                        <div style={{ marginTop: '10px', color: '#666', fontSize: '12px' }}>
                            ✓ Should handle no children gracefully
                        </div>
                    </div>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h3>Test 3: Many Items</h3>
                        <Container>
                            {Array.from({ length: 10 }, (_, i) => (
                                <Item key={i} id={\`m\${i}\`} value={\`Item \${i}\`} />
                            ))}
                        </Container>
                        <div style={{ marginTop: '10px', color: '#666', fontSize: '12px' }}>
                            ✓ Should handle many children via rest parameters
                        </div>
                    </div>
                </div>
            )}
            
            {activeTab === 'arrays' && (
                <div>
                    <h2>Array Groups with $</h2>
                    <p>The $ component groups children into arrays</p>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h3>Test 1: Single Array Group</h3>
                        <Mixed>
                            <Header title="My Header" />
                            <$>
                                <Item id="a1" value="Array Item 1" />
                                <Item id="a2" value="Array Item 2" />
                                <Item id="a3" value="Array Item 3" />
                            </$>
                        </Mixed>
                        <div style={{ marginTop: '10px', color: '#666', fontSize: '12px' }}>
                            ✓ Header passed as first arg<br/>
                            ✓ Array items passed as second arg (array)
                        </div>
                    </div>
                    
                    <div style={{ marginBottom`}
        </CodeBox>
    </Chapter>
);
