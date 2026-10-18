import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Chemistry Child Binding Tests v2 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// app > tests > child-binding
'use client'
import { $Chemical, $ } from '@/chemistry';
import React from 'react';

// Test 1: Basic children as constructor arguments
class $Chapter extends $Chemical {
    $title = 'Default Chapter';
    $page = 1;
    
    view() {
        return (
            <div style={{ 
                padding: '8px', 
                margin: '4px',
                background: '#f0f0f0',
                borderRadius: '4px' 
            }}>
                Chapter: {this.$title} (Page {this.$page})
            </div>
        );
    }
}

class $Book extends $Chemical {
    chapters: $Chapter[] = [];
    
    // Children become constructor arguments!
    $Book(...chapters: $Chapter[]) {
        console.log('$Book constructor called with', chapters.length, 'chapters');
        console.log('Chapter instances:', chapters);
        this.chapters = chapters;
    }
    
    view() {
        return (
            <div style={{ 
                border: '2px solid #333', 
                padding: '15px',
                borderRadius: '8px'
            }}>
                <h3>Book with {this.chapters.length} chapters</h3>
                <div>{this.children}</div>
            </div>
        );
    }
}

// Test 2: Mixed types with structural components ($Array)
class $Title extends $Chemical {
    $text = 'Untitled';
    
    view() {
        return <h2 style={{ color: '#444', marginBottom: '10px' }}>{this.$text}</h2>;
    }
}

class $Footer extends $Chemical {
    $copyright = '© 2024';
    
    view() {
        return (
            <div style={{ 
                marginTop: '15px', 
                paddingTop: '10px',
                borderTop: '1px solid #ccc',
                fontSize: '12px',
                color: '#666'
            }}>
                {this.$copyright}
            </div>
        );
    }
}

class $Document extends $Chemical {
    title?: $Title;
    chapters: $Chapter[] = [];
    footer?: $Footer;
    
    $Document(title: $Title, chapters: $Chapter[], footer: $Footer) {
        console.log('$Document constructor:', { 
            title: title,
            titleText: title?.$text,
            chapterCount: chapters?.length,
            footer: footer,
            footerText: footer?.$copyright 
        });
        this.title = title;
        this.chapters = chapters || [];
        this.footer = footer;
    }
    
    view() {
        return (
            <div style={{ 
                border: '2px solid #666',
                padding: '20px',
                borderRadius: '8px',
                background: '#fafafa'
            }}>
                <div style={{ color: 'blue', fontSize: '10px', marginBottom: '10px' }}>
                    Document received: title={this.title ? '✓' : '✗'}, 
                    chapters={this.chapters.length}, 
                    footer={this.footer ? '✓' : '✗'}
                </div>
                {this.children}
            </div>
        );
    }
}

// Test 3: Polymorphism - subclasses as children
class $FancyChapter extends $Chapter {
    $color = 'gold';
    
    view() {
        return (
            <div style={{ 
                padding: '10px',
                margin: '5px',
                background: this.$color,
                border: '2px solid #888',
                borderRadius: '6px',
                fontWeight: 'bold'
            }}>
                ✨ Fancy Chapter: {this.$title} (Page {this.$page})
            </div>
        );
    }
}

class $PolyBook extends $Chemical {
    chapters: $Chapter[] = [];
    
    $PolyBook(...chapters: $Chapter[]) {
        console.log('$PolyBook received chapters:', chapters);
        console.log('Chapter types:', chapters.map(c => c.constructor.name));
        this.chapters = chapters;
        
        // Test polymorphism - can we detect subclasses?
        chapters.forEach((ch, i) => {
            if (ch instanceof $FancyChapter) {
                console.log(\`Chapter \${i} is fancy!\`);
            }
        });
    }
    
    view() {
        return (
            <div style={{ 
                border: '3px solid purple',
                padding: '15px',
                borderRadius: '8px'
            }}>
                <h3>Polymorphic Book</h3>
                <div style={{ fontSize: '11px', color: '#666', marginBottom: '10px' }}>
                    Regular chapters: {this.chapters.filter(c => !(c instanceof $FancyChapter)).length} | 
                    Fancy chapters: {this.chapters.filter(c => c instanceof $FancyChapter).length}
                </div>
                {this.children}
            </div>
        );
    }
}

// Test 4: Dynamic binding and instance control
class $Section extends $Chemical {
    $name = 'Section';
    items: string[] = [];
    
    addItem(item: string) {
        console.log(\`Adding "\${item}" to section \${this.$name}\`);
        this.items.push(item);
    }
    
    view() {
        return (
            <div style={{
                padding: '10px',
                margin: '5px',
                border: '1px dashed #999',
                borderRadius: '4px'
            }}>
                <strong>{this.$name}</strong>
                <ul>
                    {this.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

class $Article extends $Chemical {
    sections: $Section[] = [];
    
    $Article(...sections: $Section[]) {
        console.log('$Article constructor with', sections.length, 'sections');
        console.log('Section instances:', sections);
        this.sections = sections;
        
        // Test: Can parent manipulate children after construction?
        sections.forEach((section, i) => {
            if (section && typeof section.addItem === 'function') {
                section.addItem(\`Auto-added by Article at index \${i}\`);
            } else {
                console.error('Section missing addItem method:', section);
            }
        });
    }
    
    $addToAllSections(text: string) {
        this.sections.forEach(s => {
            if (s && typeof s.addItem === 'function') {
                s.addItem(text);
            }
        });
    }
    
    view() {
        return (
            <div style={{
                border: '2px solid green',
                padding: '15px',
                borderRadius: '8px'
            }}>
                <h3>Article with Dynamic Sections</h3>
                <button 
                    onClick={() => this.$addToAllSections(\`Added at \${new Date().toLocaleTimeString()}\`)}
                    style={{
                        padding: '8px 16px',
                        marginBottom: '10px',
                        background: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Add to All Sections
                </button>
                {this.children}
            </div>
        );
    }
}

// Test 5: Constructor validation and error cases
class $StrictContainer extends $Chemical {
    header?: $Title;
    content: $Chapter[] = [];
    
    $StrictContainer(header: $Title, ...content: $Chapter[]) {
        console.log('$StrictContainer validating inputs...');
        console.log('Header:', header);
        console.log('Content:', content);
        
        if (!header) {
            console.error('Warning: No header provided!');
        }
        
        if (content.length === 0) {
            console.error('Warning: No content provided!');
        }
        
        if (content.length > 3) {
            console.warn('Warning: More than 3 chapters, only taking first 3');
            content = content.slice(0, 3);
        }
        
        this.header = header;
        this.content = content;
    }
    
    view() {
        return (
            <div style={{
                border: '2px solid red',
                padding: '15px',
                borderRadius: '8px',
                background: '#fff5f5'
            }}>
                <div style={{ color: 'red', fontSize: '11px', marginBottom: '10px' }}>
                    Strict Container - Header: {this.header ? '✓' : '✗ MISSING'} | 
                    Content: {this.content.length} items
                    {this.content.length > 3 && ' (truncated)'}
                </div>
                {this.children}
            </div>
        );
    }
}

// Test 6: Nested children with arrays
class $NestedChild extends $Chemical {
    $value = '';
    
    view() {
        return (
            <span style={{
                padding: '2px 6px',
                margin: '2px',
                background: '#e0e0e0',
                borderRadius: '3px',
                display: 'inline-block'
            }}>
                {this.$value}
            </span>
        );
    }
}

class $NestedContainer extends $Chemical {
    groups: any[][] = [];
    
    $NestedContainer(...groups: any[]) {
        console.log('$NestedContainer received:', groups);
        // We expect arrays from $ structural component
        this.groups = groups.filter(g => Array.isArray(g));
        console.log('Filtered to', this.groups.length, 'groups');
        console.log('Group details:', this.groups.map((g, i) => \`Group \${i}: \${g.length} items\`));
    }
    
    view() {
        return (
            <div style={{
                border: '2px solid teal',
                padding: '15px',
                borderRadius: '8px'
            }}>
                <h3>Nested Container</h3>
                <div style={{ fontSize: '11px', color: '#666', marginBottom: '10px' }}>
                    Groups: {this.groups.length} | 
                    Total items: {this.groups.reduce((acc, g) => acc + g.length, 0)}
                </div>
                <div>
                    {this.groups.map((group, i) => (
                        <div key={i} style={{
                            margin: '5px',
                            padding: '5px',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                        }}>
                            Group {i + 1}: {group.length} items
                        </div>
                    ))}
                </div>
                {this.children}
            </div>
        );
    }
}

// Export the chemicals and their components
export const Chapter = new $Chapter().Component;
export const Book = new $Book().Component;
export const Title = new $Title().Component;
export const Footer = new $Footer().Component;
export const Document = new $Document().Component;
export const FancyChapter = new $FancyChapter().Component;
export const PolyBook = new $PolyBook().Component;
export const Section = new $Section().Component;
export const Article = new $Article().Component;
export const StrictContainer = new $StrictContainer().Component;
export const NestedChild = new $NestedChild().Component;
export const NestedContainer = new $NestedContainer().Component;

export default function ChildBindingTest() {
    return (
        <div style={{ padding: '40px', fontFamily: 'system-ui' }}>
            <h1>Child Binding Tests</h1>
            <p style={{ color: '#666', marginBottom: '30px' }}>
                Testing Chemistry's revolutionary children-as-constructor-arguments system.
            </p>
            
            {/* Test 1: Basic children binding */}
            <div style={{ marginBottom: '40px' }}>
                <h2>Test 1: Basic Children as Constructor Args</h2>
                <div style={{ marginBottom: '10px' }}>
                    <strong>Expected:</strong> Book receives 3 Chapter instances in constructor
                </div>
                <Book>
                    <Chapter title="Introduction" page={1} />
                `}
        </CodeBox>
    </Chapter>
);
