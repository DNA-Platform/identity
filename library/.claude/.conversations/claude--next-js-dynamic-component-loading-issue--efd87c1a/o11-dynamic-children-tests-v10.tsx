import { Chapter, List, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Dynamic Children Tests v10 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// app/tests/dynamic-children/page.tsx
'use client'
import { $Chemical, $, $use } from '@/chemistry';
import React, { useState } from 'react';
import styled from 'styled-components';

// ============================================
// LIBRARY DOMAIN MODEL
// ============================================

export class $Cover extends $Chemical {
    $imageUrl?: string;
    $color = '#4a90e2';
    $title = 'Untitled';
    $author = 'Unknown';
    
    // Styled components
    protected Container = styled.div<{ $color: string }>\`
        width: 100%;
        height: 100%;
        background: \${props => props.$color 
            ? \`linear-gradient(135deg, \${props.$color}, \${this.darken(props.$color, 0.3)})\`
            : '#4a90e2'};
        background-size: cover;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 15px;
        color: white;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        position: relative;
        overflow: hidden;
        
        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 12px rgba(0,0,0,0.2);
        }
    \`;
    
    protected Spine = styled.div\`
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 6px;
        background: linear-gradient(180deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1));
        box-shadow: 2px 0 4px rgba(0,0,0,0.2);
    \`;
    
    protected TitleArea = styled.div\`\`;
    
    protected Title = styled.div\`
        font-size: 18px;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        line-height: 1.2;
        margin-bottom: 8px;
    \`;
    
    protected Author = styled.div\`
        font-size: 13px;
        opacity: 0.9;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    \`;
    
    protected Decoration = styled.div\`
        position: absolute;
        bottom: 10px;
        right: 10px;
        opacity: 0.3;
        font-size: 24px;
    \`;
    
    view() {
        const Container = this.Container;
        const Spine = this.Spine;
        const TitleArea = this.TitleArea;
        const Title = this.Title;
        const Author = this.Author;
        const Decoration = this.Decoration;
        
        return (
            <Container $color={this.$color}>
                <Spine />
                <TitleArea>
                    <Title>{this.$title}</Title>
                    <Author>{this.$author}</Author>
                </TitleArea>
                <Decoration>📖</Decoration>
            </Container>
        );
    }
    
    private darken(color: string, amount: number): string {
        return color + Math.floor(amount * 100).toString(16);
    }
}

export class $Title extends $Chemical {
    $text = 'Untitled';
    $subtitle?: string;
    
    protected TitleText = styled.div\`
        font-weight: bold;
        font-size: 14px;
    \`;
    
    protected Subtitle = styled.div\`
        font-size: 11px;
        color: #666;
    \`;
    
    view() {
        const Title = this.TitleText;
        const Subtitle = this.Subtitle;
        
        return (
            <div>
                <Title>{this.$text}</Title>
                {this.$subtitle && <Subtitle>{this.$subtitle}</Subtitle>}
            </div>
        );
    }
}

export class $Chapter extends $Chemical {
    $number = 1;
    $title = 'Chapter';
    $pages = 10;
    
    protected Container = styled.div<{ $inLibrary: boolean }>\`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: \${props => props.$inLibrary ? '6px 0' : '8px 12px'};
        background: \${props => props.$inLibrary ? 'transparent' : '#f8f8f8'};
        border-radius: \${props => props.$inLibrary ? '0' : '4px'};
        border-bottom: \${props => props.$inLibrary ? '1px solid #eee' : 'none'};
        font-size: \${props => props.$inLibrary ? '11px' : '13px'};
        transition: background 0.2s;
        cursor: pointer;
        
        &:hover {
            background: \${props => props.$inLibrary ? 'transparent' : '#e8e8e8'};
        }
    \`;
    
    protected ChapterInfo = styled.div\`
        display: flex;
        align-items: baseline;
        gap: 8px;
    \`;
    
    protected Number = styled.span<{ $inLibrary: boolean }>\`
        font-weight: bold;
        color: #666;
        min-width: \${props => props.$inLibrary ? '20px' : '30px'};
    \`;
    
    protected ChapterTitle = styled.span\`
        color: #333;
    \`;
    
    protected Pages = styled.span<{ $inLibrary: boolean }>\`
        color: #999;
        font-size: \${props => props.$inLibrary ? '10px' : '11px'};
        font-style: italic;
    \`;
    
    view() {
        const inLibraryBook = this.parent && this.parent.parent && 
                             this.parent.parent.constructor.name === '$Library';
        
        const Container = this.Container;
        const Info = this.ChapterInfo;
        const Number = this.Number;
        const Title = this.ChapterTitle;
        const Pages = this.Pages;
        
        return (
            <Container $inLibrary={inLibraryBook}>
                <Info>
                    <Number $inLibrary={inLibraryBook}>{this.$number}.</Number>
                    <Title>{this.$title}</Title>
                </Info>
                <Pages $inLibrary={inLibraryBook}>{this.$pages} pages</Pages>
            </Container>
        );
    }
}

export class $Book extends $Chemical {
    $author = 'Unknown Author';
    cover?: $Cover;
    title?: $Title;
    chapters: $Chapter[] = [];
    
    private _isOpen = false;
    
    // Styled components that subclasses can override
    protected LibraryBookContainer = styled.div<{ $isOpen: boolean }>\`
        width: 180px;
        height: \${props => props.$isOpen ? 'auto' : '240px'};
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        overflow: hidden;
        transition: all 0.3s ease;
        cursor: pointer;
    \`;
    
    protected StandaloneContainer = styled.div\`
        max-width: 500px;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        overflow: hidden;
    \`;
    
    protected CoverSection = styled.div\`
        height: 300px;
        position: relative;
    \`;
    
    protected OpenContent = styled.div\`
        padding: 15px;
    \`;
    
    protected BackButton = styled.div\`
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 12px;
        color: #666;
        font-size: 12px;
        cursor: pointer;
    \`;
    
    protected TitlePage = styled.div\`
        border-bottom: 2px solid #eee;
        padding-bottom: 12px;
        margin-bottom: 12px;
    \`;
    
    protected AuthorCredit = styled.div\`
        font-size: 11px;
        color: #666;
        font-style: italic;
        margin-top: 4px;
    \`;
    
    protected ContentsLabel = styled.div\`
        font-size: 11px;
        font-weight: bold;
        color: #888;
        margin-bottom: 8px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    \`;
    
    protected StandaloneContent = styled.div\`
        padding: 24px;
    \`;
    
    protected StandaloneTitleSection = styled.div\`
        margin-bottom: 16px;
    \`;
    
    protected StandaloneAuthor = styled.div\`
        font-size: 14px;
        color: #666;
        margin-top: 8px;
    \`;
    
    protected ChaptersSection = styled.div\`
        border-top: 1px solid #eee;
        padding-top: 16px;
    \`;
    
    protected ChaptersSectionLabel = styled.div\`
        font-size: 13px;
        font-weight: bold;
        color: #888;
        margin-bottom: 12px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    \`;
    
    protected ChapterList = styled.div\`
        display: flex;
        flex-direction: column;
        gap: 6px;
    \`;
    
    protected EmptyMessage = styled.div\`
        color: #999;
        font-size: 12px;
        font-style: italic;
        text-align: center;
        padding: 20px;
    \`;
    
    $Book(first?: $Cover | $Title, ...rest: ($Title | $Chapter)[]) {
        if (first instanceof $Cover) {
            this.cover = first;
            this.title = rest[0] instanceof $Title ? rest[0] as $Title : undefined;
            this.chapters = rest.filter(r => r instanceof $Chapter) as $Chapter[];
            
            if (this.cover && this.title) {
                this.cover.$title = this.title.$text;
                this.cover.$author = this.$author;
            }
        } else if (first instanceof $Title) {
            this.title = first;
            this.chapters = rest.filter(r => r instanceof $Chapter) as $Chapter[];
        }
    }
    
    $toggleOpen() {
        this._isOpen = !this._isOpen;
    }
    
    view() {
        const inLibrary = this.parent && this.parent.constructor.name === '$Library';
        
        if (inLibrary) {
            return this.renderLibraryView();
        } else {
            return this.renderStandaloneView();
        }
    }
    
    protected renderLibraryView() {
        const Container = this.LibraryBookContainer;
        const Content = this.OpenContent;
        const Back = this.BackButton;
        const TitlePage = this.TitlePage;
        const Author = this.AuthorCredit;
        const Label = this.ContentsLabel;
        
        return (
            <Container onClick={this.$toggleOpen} $isOpen={this._isOpen}>
                {!this._isOpen ? (
                    this.cover && (() => {
                        const [Cover, key] = $use(this.cover, 'key');
                        return (
                            <div style={{ width: '100%', height: '100%' }}>
                                <Cover key={key} />
                            </div>
                        );
                    })()
                ) : (
                    <Content>
                        <Back>
                            <span>← Back to cover</span>
                        </Back>
                        
                        <TitlePage>
                            {this.title && (() => {
                                const [Title, key] = $use(this.title, 'key');
                                return <Title key={key} />;
                            })()}
                            <Author>by {this.$author}</Author>
                        </TitlePage>
                        
                        <div>
                            <Label>Contents</Label>
                            {this.chapters.map(ch => {
                                const [Chapter, key] = $use(ch, 'key');
                                return <Chapter key={key} />;
                            })}
                        </div>
                    </Content>
                )}
            </Container>
        );
    }
    
    protected renderStandaloneView() {
        const Container = this.StandaloneContainer;
        const CoverSection = this.CoverSection;
        const Content = this.StandaloneContent;
        const TitleSection = this.StandaloneTitleSection;
        const Author = this.StandaloneAuthor;
        const Chapters = this.ChaptersSection;
        const Label = this.ChaptersSectionLabel;
        const List = this.ChapterList;
        const Empty = this.EmptyMessage;
        
        return (
            <Container>
                <CoverSection>
                    {this.cover && (() => {
                        const [Cover, key] = $use(this.cover, 'key');
                        return (
                            <div style={{ width: '100%', height: '100%' }}>
                                <Cover key={key} />
                            </div>
                        );
                    })()}
                </CoverSection>
                
                <Content>
                    <TitleSection>
                        {this.title && (() => {
                            const [Title, key] = $use(this.title, 'key');
                            return <Title key={key} />;
                        })()}
                        <Author>by {this.$author}</Author>
                    </TitleSection>
                    
                    <Chapters>
                        <Label>Table of Contents</Label>
                        <List>
                            {this.chapters.map(ch => {
                                const [Chapter, key] = $use(ch, 'key');
                                return <Chapter key={key} />;
                            })}
                        </List>
                        {this.chapters.length === 0 && (
                            <Empty>No chapters yet</Empty>
                        )}
                    </Chapters>
                </Content>
            </Container>
        );
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
            <div style={{ 
                padding: '30px',
                background: 'linear-gradient(to bottom, #8b7355, #6b5644)',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                minHeight: '400px'
            }}>
                {/* Library header */}
                <div style={{ 
                    marginBottom: '25px',
                    borderBottom: '2px solid rgba(255,255,255,0.2)',
                    paddingBottom: '15px'
                }}>
                    <h2 style={{ 
                        margin: '0 0 8px 0',
                        color: '#fff',
                        fontSize: '28px',
                        fontFamily: 'Georgia, serif',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}>
                        📚 The Library
                    </h2>
                    <div style={{ 
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '14px'
                    }}>
                        {this.books.length} {this.books.length === 1 ? 'volume' : 'volumes'} in collection
                    </div>
                </div>
                
                {/* Bookshelf */}
                <div style={{ 
                    background: 'linear-gradient(to bottom, #5d4a3a, #4a3829)',
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '20px',
                    boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.3)'
                }}>
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                        gap: '20px',
                        minHeight: '240px',
                        alignItems: 'end'
                    }}>
                        {this.books.map(book => {
                            const [Book, key] = $use(book, 'key');
                            return <Book key={key} />;
                        })}
                        {this.books.length === 0 && (
                            <div style={{ 
                                gridColumn: '1 / -1',
                                textAlign: 'center',
                                color: 'rgba(255,255,255,0.5)',
                                fontSize: '14px',
                                fontStyle: 'italic',
                                padding: '40px'
                            }}>
                                The shelves are empty...
                            </div>
                        )}
                    </div>
                </div>
                
                {/* Catalogue section */}
                {this.catalogue && (
                    <div style={{ 
                        background: 'rgba(255,255,255,0.95)',
                        borderRadius: '8px',
                        padding: '20px'
                    }}>
                        {(() => {
                            const [Catalogue, key] = $use(this.catalogue, 'key');
                            return <Catalogue key={key} />;
                        })()}
                    </div>
                )}
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
                        title={\`Chapter \${i + 1}\`} 
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
            <Book key={i} author={\`Author \${i + 1}\`}>
                <Cover color={\`hsl(\${i * 60}, 70%, 60%)\`} />
                <Title text={\`Book \${i + 1}\`} />
                {Array.from({ length: chapters }, (_, j) => (
                    <Chapter 
                        key={j}
                        number={j + 1} 
                        title={\`Ch \${j + 1}\`} 
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
                    <Title text={\`Minimal Book \${index}\`} />
                    <Chapter number={1} title="Only Chapter" pages={10} />
                </>
            );
        } else if (mode === 'full') {
            return (
                <>
                    <Cover color={\`hsl(\${index * 90}, 60%, 50%)\`} />
                    <Title text={\`Full Book \${index}\`} subtitle="Complete Edition" />
                    <Chapter number={1} title="Part 1" pages={15} />
                    <Chapter number={2} title="Part 2" pages={20} />
                    <Chapter number={3} title="Part 3" pages={18} />
                </>
            );
        } else { // mixed
            return index % 2 === 0 ? (
                <>
                    <Cover color="#e91e63" />
                    <Title text={\`Full Book \${index}\`} />
                    <Chapter number={1} title="Chapter" pages={15} />
                </>
            ) : (
                <>
                    <Title text={\`Minimal Book \${index}\`} />
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
                    <Book key={i} author={\`Author \${i + 1}\`}>
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
}`}
        </CodeBox>
    </Chapter>
);
