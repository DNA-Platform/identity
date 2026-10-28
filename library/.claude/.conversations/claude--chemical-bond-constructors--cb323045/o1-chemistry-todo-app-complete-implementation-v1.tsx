import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Chemistry Todo App - Complete Implementation v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`// app/todo/page.tsx
'use client'
import { $Chemical, $ } from '@/chemistry3';
import React from 'react';

// Basic Task Chemical
class $Task extends $Chemical {
    $id = '';
    $text = '';
    $completed = false;
    $priority: 'low' | 'medium' | 'high' = 'medium';
    
    $toggle() {
        this.$completed = !this.$completed;
    }
    
    $delete() {
        //`}
        </CodeBox>
    </Chapter>
);
