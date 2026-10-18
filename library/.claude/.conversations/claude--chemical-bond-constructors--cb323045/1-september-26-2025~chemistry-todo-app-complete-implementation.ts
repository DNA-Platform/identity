// app/todo/page.tsx
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
        //