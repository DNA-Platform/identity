// app/tests/styled-example/page.tsx
'use client'
import { $Chemical, $use } from '@/chemistry';
import React from 'react';
import styled from 'styled-components';

// ============================================
// STYLED COMPONENTS PATTERN WITH CHEMISTRY
// ============================================

// Example 1: Basic Pattern - Define styles as methods
export class $Card extends $Chemical {
    $title = 'Card Title';
    $content = 'Card content goes here';
    
    // Style methods return styled components
    // Subclasses can override these to change styling
    protected CardContainer = styled.div`
        padding: 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s, box-shadow 0.2s;
        
        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }
    `;
    
    protected CardTitle = styled.h3`
        margin: 0 0 12px 0;
        font-size: 18px;
        color: #333;
        font-weight: bold;
    `;
    
    protected CardContent = styled.p`
        margin: 0;
        font-size: 14px;
        color: #666;
        line-height: 1.5;
    `;
    
    view() {
        const Container = this.CardContainer;
        const Title = this.CardTitle;
        const Content = this.CardContent;
        
        return (
            <Container>
                <Title>{this.$title}</Title>
                <Content>{this.$content}</Content>
            </Container>
        );
    }
}

// Example 2: Extending and Overriding Styles
export class $DarkCard extends $Card {
    // Override the styled components
    protected CardContainer = styled.div`
        padding: 20px;
        background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
        border: 1px solid #444;
        transition: all 0.3s;
        
        &:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
            border-color: #666;
        }
    `;
    
    protected CardTitle = styled.h3`
        margin: 0 0 12px 0;
        font-size: 18px;
        color: #fff;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    `;
    
    protected CardContent = styled.p`
        margin: 0;
        font-size: 14px;
        color: #ccc;
        line-height: 1.5;
    `;
}

// Example 3: Using Methods for Dynamic Styles
export class $Button extends $Chemical {
    $variant: 'primary' | 'secondary' | 'danger' = 'primary';
    $size: 'small' | 'medium' | 'large' = 'medium';
    $text = 'Click me';
    
    // Method that returns a styled component with props
    protected getStyledButton() {
        return styled.button<{ $variant: string; $size: string }>`
            padding: ${props => {
                switch(props.$size) {
                    case 'small': return '6px 12px';
                    case 'large': return '14px 28px';
                    default: return '10px 20px';
                }
            }};
            font-size: ${props => {
                switch(props.$size) {
                    case 'small': return '12px';
                    case 'large': return '18px';
                    default: return '14px';
                }
            }};
            background: ${props => {
                switch(props.$variant) {
                    case 'primary': return 'linear-gradient(135deg, #667eea, #764ba2)';
                    case 'secondary': return 'linear-gradient(135deg, #f093fb, #f5576c)';
                    case 'danger': return 'linear-gradient(135deg, #fa709a, #fee140)';
                    default: return '#ccc';
                }
            }};
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.2s;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            
            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
            }
            
            &:active {
                transform: translateY(0);
                box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
            }
        `;
    }
    
    $onClick() {
        console.log('Button clicked:', this.$text);
    }
    
    view() {
        const StyledButton = this.getStyledButton();
        
        return (
            <StyledButton 
                $variant={this.$variant} 
                $size={this.$size}
                onClick={this.$onClick}
            >
                {this.$text}
            </StyledButton>
        );
    }
}

// Example 4: Advanced Pattern - Book with Styled Components
export class $StyledBook extends $Chemical {
    $title = 'The Great Gatsby';
    $author = 'F. Scott Fitzgerald';
    $coverColor = '#4a90e2';
    $isOpen = false;
    chapters: { title: string; pages: number }[] = [
        { title: 'Chapter 1', pages: 15 },
        { title: 'Chapter 2', pages: 20 },
        { title: 'Chapter 3', pages: 18 }
    ];
    
    // Styled components as protected properties
    protected BookContainer = styled.div`
        width: 200px;
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        transition: all 0.3s;
        
        &:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
        }
    `;
    
    protected BookCover = styled.div<{ $color: string }>`
        height: 280px;
        background: linear-gradient(135deg, ${props => props.$color}, ${props => this.darken(props.$color)});
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: white;
        position: relative;
        
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 8px;
            background: linear-gradient(180deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1));
            box-shadow: 2px 0 4px rgba(0,0,0,0.2);
        }
    `;
    
    protected CoverTitle = styled.div`
        font-size: 22px;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        line-height: 1.2;
        margin-bottom: 10px;
    `;
    
    protected CoverAuthor = styled.div`
        font-size: 14px;
        opacity: 0.9;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    `;
    
    protected BookContent = styled.div`
        padding: 20px;
        max-height: ${props => props.theme?.isOpen ? '400px' : '0'};
        overflow: hidden;
        transition: max-height 0.3s ease;
    `;
    
    protected BackButton = styled.div`
        display: flex;
        align-items: center;
        gap: 8px;
        color: #666;
        font-size: 12px;
        margin-bottom: 12px;
        padding: 8px;
        border-radius: 4px;
        transition: background 0.2s;
        
        &:hover {
            background: #f0f0f0;
        }
    `;
    
    protected TitlePage = styled.div`
        border-bottom: 2px solid #eee;
        padding-bottom: 12px;
        margin-bottom: 12px;
    `;
    
    protected BookTitle = styled.div`
        font-size: 18px;
        font-weight: bold;
        color: #333;
        margin-bottom: 4px;
    `;
    
    protected BookAuthor = styled.div`
        font-size: 12px;
        color: #666;
        font-style: italic;
    `;
    
    protected ChapterList = styled.div`
        display: flex;
        flex-direction: column;
        gap: 6px;
    `;
    
    protected ChapterItem = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 8px;
        background: #f8f8f8;
        border-radius: 4px;
        font-size: 12px;
        transition: background 0.2s;
        
        &:hover {
            background: #e8e8e8;
        }
    `;
    
    protected ChapterTitle = styled.span`
        color: #333;
        font-weight: 500;
    `;
    
    protected ChapterPages = styled.span`
        color: #999;
        font-style: italic;
    `;
    
    $toggleOpen() {
        this.$isOpen = !this.$isOpen;
    }
    
    private darken(color: string): string {
        // Simple darkening function
        return color + '99';
    }
    
    view() {
        const Container = this.BookContainer;
        const Cover = this.BookCover;
        const CoverTitle = this.CoverTitle;
        const CoverAuthor = this.CoverAuthor;
        const Content = this.BookContent;
        const Back = this.BackButton;
        const TitlePage = this.TitlePage;
        const Title = this.BookTitle;
        const Author = this.BookAuthor;
        const Chapters = this.ChapterList;
        const Chapter = this.ChapterItem;
        const ChapterTitle = this.ChapterTitle;
        const ChapterPages = this.ChapterPages;
        
        return (
            <Container onClick={this.$toggleOpen}>
                {!this.$isOpen ? (
                    <Cover $color={this.$coverColor}>
                        <div>
                            <CoverTitle>{this.$title}</CoverTitle>
                            <CoverAuthor>{this.$author}</CoverAuthor>
                        </div>
                        <div style={{ textAlign: 'right', opacity: 0.3, fontSize: '24px' }}>
                            📖
                        </div>
                    </Cover>
                ) : (
                    <Content theme={{ isOpen: this.$isOpen }}>
                        <Back>
                            <span>←</span>
                            <span>Back to cover</span>
                        </Back>
                        <TitlePage>
                            <Title>{this.$title}</Title>
                            <Author>by {this.$author}</Author>
                        </TitlePage>
                        <Chapters>
                            {this.chapters.map((ch, i) => (
                                <Chapter key={i}>
                                    <ChapterTitle>{ch.title}</ChapterTitle>
                                    <ChapterPages>{ch.pages} pages</ChapterPages>
                                </Chapter>
                            ))}
                        </Chapters>
                    </Content>
                )}
            </Container>
        );
    }
}

// Example 5: Subclass that overrides just specific styles
export class $GlassBook extends $StyledBook {
    // Override just the container for a glassmorphism effect
    protected BookContainer = styled.div`
        width: 200px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.3s;
        
        &:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 48px rgba(0, 0, 0, 0.2);
            background: rgba(255, 255, 255, 0.15);
        }
    `;
    
    // Override the cover for frosted glass effect
    protected BookCover = styled.div<{ $color: string }>`
        height: 280px;
        background: linear-gradient(135deg, 
            ${props => props.$color}dd, 
            ${props => this.darken(props.$color)}dd
        );
        backdrop-filter: blur(20px);
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: white;
        position: relative;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    `;
}

// ============================================
// DEMO PAGE
// ============================================

const Card = new $Card().Component;
const DarkCard = new $DarkCard().Component;
const Button = new $Button().Component;
const StyledBook = new $StyledBook().Component;
const GlassBook = new $GlassBook().Component;

export default function StyledChemistryExample() {
    return (
        <div style={{ padding: '40px', fontFamily: 'system-ui' }}>
            <h1>Styled Components with Chemistry 🧪</h1>
            <p style={{ color: '#666', marginBottom: '30px' }}>
                Learn how to use styled-components with Chemistry's OOP approach
            </p>
            
            {/* Example 1: Basic Cards */}
            <section style={{ marginBottom: '40px' }}>
                <h2>Example 1: Basic Inheritance</h2>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
                    $Card defines styled components as protected properties. $DarkCard extends and overrides them.
                </p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Card 
                        title="Light Card" 
                        content="This uses the base $Card styling with light theme."
                    />
                    <DarkCard 
                        title="Dark Card" 
                        content="This extends $Card and overrides the styled components for a dark theme."
                    />
                </div>
                <details style={{ marginTop: '15px', fontSize: '13px' }}>
                    <summary style={{ cursor: 'pointer', color: '#4a90e2' }}>Show code pattern</summary>
                    <pre style={{ background: '#f5f5f5', padding: '15px', borderRadius: '4px', overflow: 'auto' }}>
{`class $Card extends $Chemical {
    protected CardContainer = styled.div\`
        padding: 20px;
        background: white;
        ...
    \`;
    
    view() {
        const Container = this.CardContainer;
        return <Container>...</Container>;
    }
}

class $DarkCard extends $Card {
    // Just override the styled component!
    protected CardContainer = styled.div\`
        background: black;
        ...
    \`;
}`}
                    </pre>
                </details>
            </section>
            
            {/* Example 2: Dynamic Buttons */}
            <section style={{ marginBottom: '40px' }}>
                <h2>Example 2: Dynamic Styles with Methods</h2>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
                    Use methods that return styled components for dynamic styling based on props.
                </p>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    <Button variant="primary" size="small" text="Small Primary" />
                    <Button variant="secondary" size="medium" text="Medium Secondary" />
                    <Button variant="danger" size="large" text="Large Danger" />
                </div>
                <details style={{ marginTop: '15px', fontSize: '13px' }}>
                    <summary style={{ cursor: 'pointer', color: '#4a90e2' }}>Show code pattern</summary>
                    <pre style={{ background: '#f5f5f5', padding: '15px', borderRadius: '4px', overflow: 'auto' }}>
{`class $Button extends $Chemical {
    protected getStyledButton() {
        return styled.button<{ $variant: string }>\`
            background: \${props => 
                props.$variant === 'primary' ? 'blue' : 'red'
            };
        \`;
    }
    
    view() {
        const StyledButton = this.getStyledButton();
        return <StyledButton $variant={this.$variant} />;
    }
}`}
                    </pre>
                </details>
            </section>
            
            {/* Example 3: Complex Components */}
            <section style={{ marginBottom: '40px' }}>
                <h2>Example 3: Complex Styled Components</h2>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
                    $StyledBook uses many styled components for different parts. Click to open/close.
                </p>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <StyledBook 
                        title="Pride & Prejudice"
                        author="Jane Austen"
                        coverColor="#8b5a8b"
                    />
                    <StyledBook 
                        title="1984"
                        author="George Orwell"
                        coverColor="#c0392b"
                    />
                    <StyledBook 
                        title="Moby Dick"
                        author="Herman Melville"
                        coverColor="#16a085"
                    />
                </div>
            </section>
            
            {/* Example 4: Override Specific Styles */}
            <section style={{ marginBottom: '40px' }}>
                <h2>Example 4: Partial Style Overrides</h2>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
                    $GlassBook extends $StyledBook but only overrides the container and cover styles for a glassmorphism effect.
                </p>
                <div style={{ 
                    display: 'flex', 
                    gap: '20px', 
                    flexWrap: 'wrap',
                    padding: '30px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '12px'
                }}>
                    <GlassBook 
                        title="The Great Gatsby"
                        author="F. Scott Fitzgerald"
                        coverColor="#f39c12"
                    />
                    <GlassBook 
                        title="To Kill a Mockingbird"
                        author="Harper Lee"
                        coverColor="#e74c3c"
                    />
                    <GlassBook 
                        title="The Catcher in the Rye"
                        author="J.D. Salinger"
                        coverColor="#3498db"
                    />
                </div>
                <details style={{ marginTop: '15px', fontSize: '13px' }}>
                    <summary style={{ cursor: 'pointer', color: '#4a90e2' }}>Show code pattern</summary>
                    <pre style={{ background: '#f5f5f5', padding: '15px', borderRadius: '4px', overflow: 'auto' }}>
{`class $GlassBook extends $StyledBook {
    // Only override specific styled components
    protected BookContainer = styled.div\`
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        ...
    \`;
    
    // All other styles inherited from $StyledBook!
}`}
                    </pre>
                </details>
            </section>
            
            {/* Best Practices */}
            <section style={{ 
                background: '#e8f5e9', 
                padding: '20px', 
                borderRadius: '8px',
                border: '2px solid #4caf50'
            }}>
                <h3>✨ Best Practices</h3>
                <ul style={{ margin: '10px 0', paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li><strong>Use protected properties</strong> - Store styled components as protected class properties so subclasses can override them</li>
                    <li><strong>Extract to local variables in view()</strong> - Makes JSX cleaner: <code>const Container = this.StyledContainer;</code></li>
                    <li><strong>Use methods for dynamic styles</strong> - When styles depend on props, use methods that return styled components</li>
                    <li><strong>Override selectively</strong> - Subclasses only need to override the styled components they want to change</li>
                    <li><strong>Compose with inheritance</strong> - Build style variants through class extension, not component wrapping</li>
                    <li><strong>Keep it semantic</strong> - Name your styled components clearly (Container, Title, Content, etc.)</li>
                </ul>
            </section>
        </div>
    );
}
