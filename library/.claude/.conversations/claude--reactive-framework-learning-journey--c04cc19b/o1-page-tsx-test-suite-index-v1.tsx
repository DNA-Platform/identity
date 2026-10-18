import { Chapter, List, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ page..tsx - Test Suite Index v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}'use client'
import { Chemical, child, first, second, dynamic } from '@/chemistry';
import { ReactNode, useState } from 'react';

// Test runner component
class TestRunner extends Chemical {
    currentTest: string = 'index';
    
    runTest(testName: string) {
        this.currentTest = testName;
    }
    
    view() {
        // Render the appropriate test based on current selection
        switch(this.currentTest) {
            case 'basic-binding':
                return <BasicBindingTest onBack={() => this.runTest('index')} />;
            case 'navigation':
                return <NavigationTest onBack={() => this.runTest('index')} />;
            case 'reactivity':
                return <ReactivityTest onBack={() => this.runTest('index')} />;
            case 'array-binding':
                return <ArrayBindingTest onBack={() => this.runTest('index')} />;
            case 'positional-binding':
                return <PositionalBindingTest onBack={() => this.runTest('index')} />;
            default:
                return this.renderIndex();
        }
    }
    
    renderIndex() {
        return (
            <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
                <h1>Chemistry Framework Test Suite</h1>
                <p>Select a test to run:</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
                    <button 
                        onClick={() => this.runTest('basic-binding')}
                        style={{ padding: '10px', textAlign: 'left' }}
                    >
                        <strong>Basic Binding Test</strong>
                        <br />
                        <small>Test simple parent-child binding with @child decorator</small>
                    </button>
                    
                    <button 
                        onClick={() => this.runTest('navigation')}
                        style={{ padding: '10px', textAlign: 'left' }}
                    >
                        <strong>Navigation Test</strong>
                        <br />
                        <small>Test the Book/Cover/Chapter navigation scenario</small>
                    </button>
                    
                    <button 
                        onClick={() => this.runTest('reactivity')}
                        style={{ padding: '10px', textAlign: 'left' }}
                    >
                        <strong>Reactivity Test</strong>
                        <br />
                        <small>Test property changes trigger re-renders</small>
                    </button>
                    
                    <button 
                        onClick={() => this.runTest('array-binding')}
                        style={{ padding: '10px', textAlign: 'left' }}
                    >
                        <strong>Array Binding Test</strong>
                        <br />
                        <small>Test binding multiple children to an array property</small>
                    </button>
                    
                    <button 
                        onClick={() => this.runTest('positional-binding')}
                        style={{ padding: '10px', textAlign: 'left' }}
                    >
                        <strong>Positional Binding Test</strong>
                        <br />
                        <small>Test @first, @second decorators</small>
                    </button>
                </div>
            </div>
        );
    }
}

// Test 1: Basic Binding
class $Parent extends Chemical {
    @child($Child)
    child?: $Child;
    
    view() {
        return (
            <div style={{ border: '2px solid blue', padding: '20px' }}>
                <h3>Parent Component</h3>
                <p>Child bound: {this.child ? 'YES' : 'NO'}</p>
                <p>Child name: {this.child?.name || 'N/A'}</p>
                <div style={{ marginLeft: '20px' }}>
                    {this.child?.view()}
                </div>
            </div>
        );
    }
}

class $Child extends Chemical {
    $name: string = 'Default Child';
    
    view() {
        return (
            <div style={{ border: '2px solid green', padding: '10px' }}>
                <h4>Child Component</h4>
                <p>Name: {this.$name}</p>
            </div>
        );
    }
}

function BasicBindingTest({ onBack }: { onBack: () => void }) {
    const Parent = new $Parent().component();
    const Child = new $Child().component();
    
    return (
        <div style={{ padding: '40px' }}>
            <button onClick={onBack}>← Back to Index</button>
            <h2>Basic Binding Test</h2>
            <p>This should show a parent with a bound child component.</p>
            
            <Parent>
                <Child name="Test Child" />
            </Parent>
        </div>
    );
}

// Test 2: Navigation (Book/Cover/Chapter)
class $Book extends Chemical {
    @child($Cover)
    cover!: $Cover;
    
    @child($Chapter)
    chapters: $Chapter[] = [];
    
    currentView: 'cover' | number = 'cover';
    
    goToFirstChapter = () => {
        if (this.chapters.length > 0) {
            this.currentView = 0;
        }
    };
    
    goToCover = () => {
        this.currentView = 'cover';
    };
    
    goToChapter = (index: number) => {
        if (index >= 0 && index < this.chapters.length) {
            this.currentView = index;
        }
    };
    
    view(): ReactNode {
        // Wire up references
        if (this.cover) {
            this.cover.book = this;
        }
        
        this.chapters.forEach((ch, i) => {
            ch.book = this;
            ch.chapterNumber = i + 1;
            ch.totalChapters = this.chapters.length;
            ch.chapterIndex = i;
        });
        
        // Determine what to show
        const currentComponent = this.currentView === 'cover' 
            ? this.cover 
            : this.chapters[this.currentView as number];
        
        return (
            <div style={{ border: '2px solid purple', padding: '20px' }}>
                <div style={{ marginBottom: '10px', fontSize: '12px', background: '#f0f0f0', padding: '5px' }}>
                    Current View: {this.currentView === 'cover' ? 'Cover' : \`Chapter \${(this.currentView as number) + 1}\`}
                </div>
                {currentComponent?.view()}
            </div>
        );
    }
}

class $Cover extends Chemical {
    $title: string = "Book Title";
    $author: string = "Author";
    book?: $Book;
    
    view() {
        return (
            <div style={{ padding: '20px', textAlign: 'center', background: '#e0e0e0' }}>
                <h2>{this.$title}</h2>
                <p>by {this.$author}</p>
                <button onClick={() => this.book?.goToFirstChapter()}>
                    Start Reading →
                </button>
            </div>
        );
    }
}

class $Chapter extends Chemical {
    $title: string = "Chapter";
    $content: string = "Content";
    chapterNumber: number = 0;
    chapterIndex: number = 0;
    totalChapters: number = 0;
    book?: $Book;
    
    view() {
        const hasPrevious = this.chapterIndex > 0;
        const hasNext = this.chapterIndex < this.totalChapters - 1;
        
        return (
            <div style={{ padding: '20px' }}>
                <h3>Chapter {this.chapterNumber}: {this.$title}</h3>
                <p>{this.$content}</p>
                <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                    <button 
                        onClick={() => this.book?.goToChapter(this.chapterIndex - 1)}
                        disabled={!hasPrevious}
                    >
                        ← Previous
                    </button>
                    <button onClick={() => this.book?.goToCover()}>
                        Cover
                    </button>
                    <button 
                        onClick={() => this.book?.goToChapter(this.chapterIndex + 1)}
                        disabled={!hasNext}
                    >
                        Next →
                    </button>
                </div>
            </div>
        );
    }
}

function NavigationTest({ onBack }: { onBack: () => void }) {
    const Cover = new $Cover().component();
    const Chapter = new $Chapter().component();
    const Book = new $Book().component();
    
    return (
        <div style={{ padding: '40px' }}>
            <button onClick={onBack}>← Back to Index</button>
            <h2>Navigation Test</h2>
            <p>Click "Start Reading" on the cover, then navigate between chapters.</p>
            
            <Book>
                <Cover title="Test Book" author="Test Author" />
                <Chapter title="Introduction" content="Welcome to the book..." />
                <Chapter title="Main Content" content="This is the main chapter..." />
                <Chapter title="Conclusion" content="Thanks for reading!" />
            </Book>
        </div>
    );
}

// Test 3: Reactivity
class $Counter extends Chemical {
    count: number = 0;
    
    increment() {
        this.count++;
    }
    
    decrement() {
        this.count--;
    }
    
    view() {
        return (
            <div style={{ border: '2px solid orange', padding: '20px', textAlign: 'center' }}>
                <h3>Counter: {this.count}</h3>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button onClick={() => this.decrement()}>-</button>
                    <button onClick={() => this.increment()}>+</button>
                </div>
            </div>
        );
    }
}

function ReactivityTest({ onBack }: { onBack: () => void }) {
    const Counter = new $Counter().component();
    
    return (
        <div style={{ padding: '40px' }}>
            <button onClick={onBack}>← Back to Index</button>
            <h2>Reactivity Test</h2>
            <p>Click the buttons to change the counter. The display should update automatically.</p>
            
            <Counter />
        </div>
    );
}

// Test 4: Array Binding
class $List extends Chemical {
    @child($Item)
    items: $Item[] = [];
    
    view() {
        return (
            <div style={{ border: '2px solid teal', padding: '20px' }}>
                <h3>List Component</h3>
                <p>Items count: {this.items.length}</p>
                <ul>
                    {this.items.map((item, i) => (
                        <li key={i}>{item.view()}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

class $Item extends Chemical {
    $label: string = 'Item';
    
    view() {
        return <span>{this.$label}</span>;
    }
}

function ArrayBindingTest({ onBack }: { onBack: () => void }) {
    const List = new $List().component();
    const Item = new $Item().component();
    
    return (
        <div style={{ padding: '40px' }}>
            <button onClick={onBack}>← Back to Index</button>
            <h2>Array Binding Test</h2>
            <p>This should show a list with all items bound to the items array.</p>
            
            <List>
                <Item label="First Item" />
                <Item label="Second Item" />
                <Item label="Third Item" />
            </List>
        </div>
    );
}

// Test 5: Positional Binding
class $Container extends Chemical {
    @first($Box)
    firstBox?: $Box;
    
    @second($Box)
    secondBox?: $Box;
    
    view() {
        return (
            <div style={{ border: '2px solid brown', padding: '20px' }}>
                <h3>Container with Positional Binding</h3>
                <div>First: {this.firstBox?.view() || 'Not bound'}</div>
                <div>Second: {this.secondBox?.view() || 'Not bound'}</div>
            </div>
        );
    }
}

class $Box extends Chemical {
    $color: string = 'gray';
    
    view() {
        return (
            <span style={{ 
                display: 'inline-block', 
                padding: '5px 10px', 
                background: this.$color,
                color: 'white',
                borderRadius: '3px'
            }}>
                Box ({this.$color})
            </span>
        );
    }
}

function PositionalBindingTest({ onBack }: { onBack: () => void }) {
    const Container = new $Container().component();
    const Box = new $Box().component();
    
    return (
        <div style={{ padding: '40px' }}>
            <button onClick={onBack}>← Back to Index</button>
            <h2>Positional Binding Test</h2>
            <p>The red box should bind to firstBox, the blue box to secondBox.</p>
            
            <Container>
                <Box color="red" />
                <Box color="blue" />
                <Box color="green" />
            </Container>
        </div>
    );
}

// Main export
const Runner = new TestRunner().component();

export default function Page() {
    return <Runner />;
}`}
        </CodeBox>
    </Chapter>
);
