import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

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
