// app/tests/dynamic-children/page.tsx
'use client'
import { $Chemical, $, $use } from '@/chemistry';
import React, { useState } from 'react';

// ============================================
// LIBRARY DOMAIN MODEL
// ============================================

export class $Cover extends $Chemical {
    $imageUrl?: string;
    $color = '#4a90e2';
    $title = 'Untitled';
    $author = 'Unknown';
    
    view() {
        return (
            <div style={{ 
                width: '100%', 
                height: '100%', 
                background: this.$imageUrl 
                    ? `linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${this.$imageUrl})`
                    : `linear-gradient(135deg, ${this.$color}, ${this.darken(this.$color, 0.3)})`,
                backgroundSize: 'cover',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '15px',
                color: 'white',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                position: 'relative',
                overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 12px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }}>
                {/* Decorative book spine effect */}
                <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '6px',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))',
                    boxShadow: '2px 0 4px rgba(0,0,0,0.2)'
                }} />
                
                {/* Title area */}
                <div>
                    <div style={{ 
                        fontSize: '18px', 
                        fontWeight: 'bold',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        lineHeight: '1.2',
                        marginBottom: '8px'
                    }}>
                        {this.$title}
                    </div>
                    <div style={{ 
                        fontSize: '13px',
                        opacity: 0.9,
                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                    }}>
                        {this.$author}
                    </div>
                </div>
                
                {/* Decorative corner */}
                <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    opacity: 0.3,
                    fontSize: '24px'
                }}>
                    📖
                </div>
            </div>
        );
    }
    
    private darken(color: string, amount: number): string {
        // Simple color darkening
        return color + Math.floor(amount * 100).toString(16);
    }
}

export class $Title extends $Chemical {
    $text = 'Untitled';
    $subtitle?: string;
    
    view() {
        return (
            <div>
                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{this.$text}</div>
                {this.$subtitle && <div style={{ fontSize: '11px', color: '#666' }}>{this.$subtitle}</div>}
            </div>
        );
    }
}

export class $Chapter extends $Chemical {
    $number = 1;
    $title = 'Chapter';
    $pages = 10;
    
    view() {
        return (
            <div style={{ 
                padding: '4px 8px', 
                background: '#f5f5f5', 
                borderRadius: '3px',
                fontSize: '11px',
                marginBottom: '2px'
            }}>
                {this.$number}. {this.$title} ({this.$pages}p)
            </div>
        );
    }
}

export class $Book extends $Chemical {
    $author = 'Unknown Author';
    cover?: $Cover;
    title?: $Title;
    chapters: $Chapter[] = [];
    
    // Polymorphic constructor - accepts different combinations
    $Book(first?: $Cover | $Title, ...rest: ($Title | $Chapter)[]) {
        // Handle different argument patterns
        if (first instanceof $Cover) {
            this.cover = first;
            this.title = rest[0] instanceof $Title ? rest[0] as $Title : undefined;
            this.chapters = rest.filter(r => r instanceof $Chapter) as $Chapter[];
        } else if (first instanceof $Title) {
            this.title = first;
            this.chapters = rest.filter(r => r instanceof $Chapter) as $Chapter[];
        } else {
            // No arguments - keep existing state
        }
    }
    
    view() {
        // Render differently based on parent
        const inLibrary = this.parent && this.parent.constructor.name === '$Library';
        
        if (inLibrary) {
            // Compact library view
            return (
                <div style={{ 
                    display: 'flex', 
                    gap: '10px', 
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    background: '#fff'
                }}>
                    {this.cover && (() => {
                        const [Cover, key] = $use(this.cover, 'key');
                        return <Cover key={key} />;
                    })()}
                    <div style={{ flex: 1 }}>
                        {this.title && (() => {
                            const [Title, key] = $use(this.title, 'key');
                            return <Title key={key} />;
                        })()}
                        <div style={{ fontSize: '11px', color: '#666', marginTop: '4px' }}>
                            by {this.$author}
                        </div>
                        <div style={{ fontSize: '10px', color: '#999', marginTop: '2px' }}>
                            {this.chapters.length} chapters
                        </div>
                    </div>
                </div>
            );
        } else {
            // Standalone detailed view
            return (
                <div style={{ 
                    border: '2px solid #333',
                    borderRadius: '8px',
                    padding: '15px',
                    background: '#fff'
                }}>
                    <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                        {this.cover && (() => {
                            const [Cover, key] = $use(this.cover, 'key');
                            return <Cover key={key} />;
                        })()}
                        <div>
                            {this.title && (() => {
                                const [Title, key] = $use(this.title, 'key');
                                return <Title key={key} />;
                            })()}
                            <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                                by {this.$author}
                            </div>
                        </div>
                    </div>
                    <div>
                        <strong style={{ fontSize: '12px' }}>Chapters ({this.chapters.length}):</strong>
                        <div style={{ marginTop: '5px' }}>
                            {this.chapters.map(ch => {
                                const [Chapter, key] = $use(ch, 'key');
                                return <Chapter key={key} />;
                            })}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export class $Reference extends $Chemical {
    book?: $Book;
    $notes = '';
    $category = 'general';
    
    $Reference(book: $Book) {
        this.book = book;
    }
    
    view() {
        if (!this.book) return null;
        
        return (
            <div style={{ 
                padding: '8px',
                background: '#f9f9f9',
                borderRadius: '4px',
                border: '1px solid #e0e0e0',
                fontSize: '11px'
            }}>
                <div style={{ fontWeight: 'bold' }}>
                    {this.book.title?.$text || 'Unknown'}
                </div>
                <div style={{ color: '#666', fontSize: '10px' }}>
                    {this.book.$author} • {this.book.chapters.length} chapters
                </div>
                {this.$notes && (
                    <div style={{ 
                        marginTop: '4px', 
                        padding: '4px', 
                        background: '#fff',
                        borderRadius: '2px',
                        fontSize: '10px'
                    }}>
                        📝 {this.$notes}
                    </div>
                )}
                <div style={{ 
                    marginTop: '4px',
                    padding: '2px 6px',
                    background: '#e3f2fd',
                    borderRadius: '2px',
                    display: 'inline-block',
                    fontSize: '9px'
                }}>
                    {this.$category}
                </div>
            </div>
        );
    }
}

export class $Catalogue extends $Chemical {
    references: $Reference[] = [];
    $filterCategory = 'all';
    
    get library() { return this.parent as $Library; }
    
    $Catalogue() {
        // Dynamically create references from parent library's books
        if (this.library && this.library.books) {
            // Keep existing references for books that still exist
            const existingRefs = new Map(
                this.references.map(ref => [ref.book, ref])
            );
            
            this.references = this.library.books.map(book => {
                // Reuse existing reference if available
                if (existingRefs.has(book)) {
                    return existingRefs.get(book)!;
                }
                // Create new reference
                const ref = new $Reference();
                ref.book = book;
                ref.$category = book.chapters.length > 3 ? 'extensive' : 'brief';
                return ref;
            });
        }
    }
    
    view() {
        const filtered = this.$filterCategory === 'all' 
            ? this.references 
            : this.references.filter(r => r.$category === this.$filterCategory);
        
        return (
            <div style={{ 
                padding: '15px',
                background: '#fff',
                border: '2px solid #2196f3',
                borderRadius: '8px'
            }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>
                    📚 Reading Catalogue
                </h3>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
                    {this.references.length} references from library
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
                    {filtered.map(ref => {
                        const [Ref, key] = $use(ref, 'key');
                        return <Ref key={key} />;
                    })}
                </div>
                {filtered.length === 0 && (
                    <div style={{ textAlign: 'center', color: '#999', padding: '20px' }}>
                        No references match filter
                    </div>
                )}
            </div>
        );
    }
}

export class $Library extends $Chemical {
    books: $Book[] = [];
    catalogue?: $Catalogue;
    
    $Library(...children: ($Book | $Catalogue)[]) {
        this.books = children.filter(c => c instanceof $Book) as $Book[];
        this.catalogue = children.find(c => c instanceof $Catalogue) as $Catalogue;
    }
    
    view() {
        return (
            <div style={{ padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
                <h2 style={{ margin: '0 0 15px 0' }}>📖 Library</h2>
                <div style={{ marginBottom: '15px' }}>
                    <strong>Books in Library ({this.books.length}):</strong>
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                        gap: '10px',
                        marginTop: '10px'
                    }}>
                        {this.books.map(book => {
                            const [Book, key] = $use(book, 'key');
                            return <Book key={key} />;
                        })}
                    </div>
                </div>
                {this.catalogue && (() => {
                    const [Catalogue, key] = $use(this.catalogue, 'key');
                    return <Catalogue key={key} />;
                })()}
            </div>
        );
    }
}

// ============================================
// TEST COMPONENTS
// ============================================

const Cover = new $Cover().Component;
const Title = new $Title().Component;
const Chapter = new $Chapter().Component;
const Book = new $Book().Component;
const Catalogue = new $Catalogue().Component;
const Library = new $Library().Component;

// Test 1: Polymorphic Single Argument
function Test1PolymorphicArg() {
    const [showCover, setShowCover] = useState(true);
    const [useSubtitle, setUseSubtitle] = useState(false);
    
    return (
        <div style={{ border: '2px solid purple', padding: '15px', borderRadius: '8px' }}>
            <h4>Test 1: Polymorphic Single Argument</h4>
            <div style={{ marginBottom: '10px', fontSize: '12px' }}>
                Book constructor accepts: (Cover | Title, ...chapters)
            </div>
            
            <div style={{ marginBottom: '10px' }}>
                <button onClick={() => setShowCover(!showCover)} style={{ marginRight: '5px', padding: '5px 10px' }}>
                    Toggle: {showCover ? 'Cover' : 'Title'} First
                </button>
                <button onClick={() => setUseSubtitle(!useSubtitle)} style={{ padding: '5px 10px' }}>
                    {useSubtitle ? 'Remove' : 'Add'} Subtitle
                </button>
            </div>
            
            <Book author="Test Author">
                {showCover ? (
                    <>
                        <Cover color="#e91e63" />
                        <Title text="Dynamic Book" subtitle={useSubtitle ? "Polymorphic Args" : undefined} />
                    </>
                ) : (
                    <Title text="Title First Book" subtitle={useSubtitle ? "No Cover Mode" : undefined} />
                )}
                <Chapter number={1} title="Introduction" pages={15} />
                <Chapter number={2} title="Content" pages={20} />
            </Book>
            
            <div style={{ marginTop: '10px', fontSize: '11px', color: '#666' }}>
                ✓ First arg changes type (Cover ↔ Title)<br/>
                ✓ Constructor handles both patterns<br/>
                ✓ Book maintains state across changes
            </div>
        </div>
    );
}

// Test 2: Dynamic Array Length
function Test2DynamicArrayLength() {
    const [chapterCount, setChapterCount] = useState(3);
    
    return (
        <div style={{ border: '2px solid blue', padding: '15px', borderRadius: '8px' }}>
            <h4>Test 2: Dynamic Array Length</h4>
            <div style={{ marginBottom: '10px', fontSize: '12px' }}>
                Constructor receives variable-length chapter array
            </div>
            
            <div style={{ marginBottom: '10px' }}>
                <button onClick={() => setChapterCount(Math.max(1, chapterCount - 1))} style={{ marginRight: '5px', padding: '5px 10px' }}>
                    Remove Chapter
                </button>
                <button onClick={() => setChapterCount(chapterCount + 1)} style={{ padding: '5px 10px' }}>
                    Add Chapter
                </button>
                <span style={{ marginLeft: '10px', fontSize: '12px' }}>
                    Current: {chapterCount} chapters
                </span>
            </div>
            
            <Book author="Variable Author">
                <Cover color="#4caf50" />
                <Title text="Growing Book" />
                {Array.from({ length: chapterCount }, (_, i) => (
                    <Chapter 
                        key={i} 
                        number={i + 1} 
                        title={`Chapter ${i + 1}`} 
                        pages={10 + i * 5} 
                    />
                ))}
            </Book>
            
            <div style={{ marginTop: '10px', fontSize: '11px', color: '#666' }}>
                ✓ Array length changes dynamically<br/>
                ✓ Constructor handles variable args<br/>
                ✓ Book updates chapter count
            </div>
        </div>
    );
}

// Test 3: Context-Aware Rendering
function Test3ContextAwareRendering() {
    const [inLibrary, setInLibrary] = useState(true);
    
    const bookContent = (
        <>
            <Cover color="#ff9800" />
            <Title text="Context-Aware Book" subtitle="Renders differently based on parent" />
            <Chapter number={1} title="Adaptation" pages={12} />
            <Chapter number={2} title="Context" pages={18} />
            <Chapter number={3} title="Rendering" pages={15} />
        </>
    );
    
    return (
        <div style={{ border: '2px solid orange', padding: '15px', borderRadius: '8px' }}>
            <h4>Test 3: Context-Aware Rendering</h4>
            <div style={{ marginBottom: '10px', fontSize: '12px' }}>
                Book renders differently when inside Library vs standalone
            </div>
            
            <div style={{ marginBottom: '10px' }}>
                <button onClick={() => setInLibrary(!inLibrary)} style={{ padding: '5px 10px' }}>
                    Toggle: {inLibrary ? 'In Library' : 'Standalone'}
                </button>
            </div>
            
            {inLibrary ? (
                <Library>
                    <Book author="Context Author">{bookContent}</Book>
                    <Book author="Another Author">
                        <Cover color="#9c27b0" />
                        <Title text="Second Book" />
                        <Chapter number={1} title="First" pages={10} />
                    </Book>
                </Library>
            ) : (
                <Book author="Context Author">{bookContent}</Book>
            )}
            
            <div style={{ marginTop: '10px', fontSize: '11px', color: '#666' }}>
                ✓ Book detects parent type<br/>
                ✓ Renders compact in Library<br/>
                ✓ Renders detailed standalone
            </div>
        </div>
    );
}

// Test 4: Dynamic Object Graph (Catalogue)
function Test4DynamicObjectGraph() {
    const [bookCount, setBookCount] = useState(3);
    const [filterCategory, setFilterCategory] = useState<'all' | 'extensive' | 'brief'>('all');
    
    const books = Array.from({ length: bookCount }, (_, i) => {
        const chapters = i % 2 === 0 ? 5 : 2; // Alternating extensive/brief
        return (
            <Book key={i} author={`Author ${i + 1}`}>
                <Cover color={`hsl(${i * 60}, 70%, 60%)`} />
                <Title text={`Book ${i + 1}`} />
                {Array.from({ length: chapters }, (_, j) => (
                    <Chapter 
                        key={j}
                        number={j + 1} 
                        title={`Ch ${j + 1}`} 
                        pages={10} 
                    />
                ))}
            </Book>
        );
    });
    
    return (
        <div style={{ border: '2px solid green', padding: '15px', borderRadius: '8px' }}>
            <h4>Test 4: Dynamic Object Graph (Catalogue)</h4>
            <div style={{ marginBottom: '10px', fontSize: '12px' }}>
                Catalogue dynamically creates references from Library books
            </div>
            
            <div style={{ marginBottom: '10px' }}>
                <button onClick={() => setBookCount(Math.max(1, bookCount - 1))} style={{ marginRight: '5px', padding: '5px 10px' }}>
                    Remove Book
                </button>
                <button onClick={() => setBookCount(bookCount + 1)} style={{ marginRight: '10px', padding: '5px 10px' }}>
                    Add Book
                </button>
                <select 
                    value={filterCategory} 
                    onChange={(e) => setFilterCategory(e.target.value as any)}
                    style={{ padding: '5px' }}
                >
                    <option value="all">All Categories</option>
                    <option value="extensive">Extensive (5+ chapters)</option>
                    <option value="brief">Brief (2 chapters)</option>
                </select>
            </div>
            
            <Library>
                {books}
                <Catalogue filterCategory={filterCategory} />
            </Library>
            
            <div style={{ marginTop: '10px', fontSize: '11px', color: '#666' }}>
                ✓ Catalogue accesses parent Library<br/>
                ✓ Creates references dynamically<br/>
                ✓ Updates when books change<br/>
                ✓ Maintains reference state
            </div>
        </div>
    );
}

// Test 5: Mixed Polymorphic Array
function Test5MixedPolymorphicArray() {
    const [mode, setMode] = useState<'minimal' | 'full' | 'mixed'>('mixed');
    
    const getBookContent = (index: number) => {
        if (mode === 'minimal') {
            return (
                <>
                    <Title text={`Minimal Book ${index}`} />
                    <Chapter number={1} title="Only Chapter" pages={10} />
                </>
            );
        } else if (mode === 'full') {
            return (
                <>
                    <Cover color={`hsl(${index * 90}, 60%, 50%)`} />
                    <Title text={`Full Book ${index}`} subtitle="Complete Edition" />
                    <Chapter number={1} title="Part 1" pages={15} />
                    <Chapter number={2} title="Part 2" pages={20} />
                    <Chapter number={3} title="Part 3" pages={18} />
                </>
            );
        } else { // mixed
            return index % 2 === 0 ? (
                <>
                    <Cover color="#e91e63" />
                    <Title text={`Full Book ${index}`} />
                    <Chapter number={1} title="Chapter" pages={15} />
                </>
            ) : (
                <>
                    <Title text={`Minimal Book ${index}`} />
                    <Chapter number={1} title="Chapter" pages={10} />
                </>
            );
        }
    };
    
    return (
        <div style={{ border: '2px solid red', padding: '15px', borderRadius: '8px' }}>
            <h4>Test 5: Mixed Polymorphic Array</h4>
            <div style={{ marginBottom: '10px', fontSize: '12px' }}>
                Books in array change polymorphically (with/without Cover)
            </div>
            
            <div style={{ marginBottom: '10px' }}>
                <button onClick={() => setMode('minimal')} style={{ marginRight: '5px', padding: '5px 10px' }}>
                    All Minimal
                </button>
                <button onClick={() => setMode('full')} style={{ marginRight: '5px', padding: '5px 10px' }}>
                    All Full
                </button>
                <button onClick={() => setMode('mixed')} style={{ padding: '5px 10px' }}>
                    Mixed
                </button>
            </div>
            
            <Library>
                {[0, 1, 2].map(i => (
                    <Book key={i} author={`Author ${i + 1}`}>
                        {getBookContent(i)}
                    </Book>
                ))}
            </Library>
            
            <div style={{ marginTop: '10px', fontSize: '11px', color: '#666' }}>
                ✓ Array elements change shape<br/>
                ✓ Some have Cover, some don't<br/>
                ✓ Constructor handles all variations<br/>
                ✓ Library displays all correctly
            </div>
        </div>
    );
}

// Main test page
export default function DynamicChildrenTests() {
    return (
        <div style={{ padding: '40px', fontFamily: 'system-ui' }}>
            <h1>Dynamic Children Tests</h1>
            <p style={{ color: '#666', marginBottom: '30px' }}>
                Testing dynamic children where constructor arguments change shape, type, and length through user interaction and conditional logic.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <Test1PolymorphicArg />
                <Test2DynamicArrayLength />
                <Test3ContextAwareRendering />
                <Test4DynamicObjectGraph />
                <Test5MixedPolymorphicArray />
            </div>
            
            <div style={{ 
                marginTop: '40px', 
                padding: '20px', 
                background: '#e8f5e9', 
                borderRadius: '8px',
                border: '2px solid #4caf50'
            }}>
                <h3>🎯 Test Summary</h3>
                <p style={{ margin: '10px 0' }}>These tests demonstrate:</p>
                <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
                    <li>Polymorphic first arguments (Cover | Title)</li>
                    <li>Dynamic array lengths (add/remove chapters)</li>
                    <li>Context-aware rendering (parent detection)</li>
                    <li>Dynamic object graphs (Catalogue creating References)</li>
                    <li>Mixed polymorphic arrays (varying book structures)</li>
                    <li>State persistence across structural changes</li>
                    <li>Parent-child property access (Library → Books)</li>
                </ul>
            </div>
        </div>
    );
}