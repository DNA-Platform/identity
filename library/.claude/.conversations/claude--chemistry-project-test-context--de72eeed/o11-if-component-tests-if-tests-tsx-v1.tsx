import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ If Component Tests - if-tests..tsx v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`'use client'
import { $Chemical, If } from '@/chemistry';
import React from 'react';

// Test 1: Basic condition toggling
export class $ConditionalDisplay extends $Chemical {
    showContent = false;
    clickCount = 0;
    
    $toggleCondition() {
        this.showContent = !this.showContent;
        this.clickCount++;
    }
    
    $getMessage() {
        return (
            <div style={{ padding: '10px', background: '#e8f5e9', borderRadius: '4px' }}>
                ✅ Condition is TRUE - Message displayed (click #{this.clickCount})
            </div>
        );
    }
    
    view() {
        return (
            <div style={{ padding: '15px', border: '1px solid #4caf50', borderRadius: '8px' }}>
                <h4>Test 1: Basic Condition Toggle</h4>
                <div style={{ marginBottom: '10px' }}>
                    Condition: <strong>{this.showContent ? 'TRUE' : 'FALSE'}</strong>
                </div>
                <If condition={this.showContent} result={this.$getMessage} />
                <button 
                    onClick={this.$toggleCondition}
                    style={{ marginTop: '10px', padding: '8px 16px' }}
                >
                    Toggle Condition
                </button>
            </div>
        );
    }
}

// Test 2: Async action with loading state
export class $AsyncLoader extends $Chemical {
    loadData = false;
    loadStartTime: number | null = null;
    
    async $fetchData() {
        this.loadStartTime = Date.now();
        await new Promise(resolve => setTimeout(resolve, 2000));
        const elapsed = Date.now() - this.loadStartTime;
        
        return (
            <div style={{ padding: '10px', background: '#e3f2fd', borderRadius: '4px' }}>
                📦 Data loaded successfully after {elapsed}ms
                <div style={{ fontSize: '12px', marginTop: '5px' }}>
                    Random value: {Math.floor(Math.random() * 100)}
                </div>
            </div>
        );
    }
    
    $startLoading() {
        this.loadData = true;
    }
    
    $reset() {
        this.loadData = false;
        this.loa`}
        </CodeBox>
    </Chapter>
);
