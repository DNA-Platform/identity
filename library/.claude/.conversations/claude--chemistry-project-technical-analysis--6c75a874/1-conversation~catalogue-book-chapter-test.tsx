import React from 'react';
import { $Chemical, $use } from './chemistry';

// Bottom level: Chapter
class $Chapter extends $Chemical {
    $title = 'Untitled Chapter';
    $pageCount = 0;
    
    view() {
        return (
            <div style={{ 
                padding: '8px', 
                margin: '4px 0',
                background: '#e3f2fd',
                borderLeft: '3px solid #2196f3',
                borderRadius: '4px'
            }}>
                <strong>{this.$title}</strong> ({this.$pageCount} pages)
            </div>
        );
    }
}

// Middle level: Book
class $Book extends $Chemical {
    $title = 'Untitled Book';
    chapters: $Chapter[] = [];
    
    // Constructor receives fully-bonded chapters
    $Book(...chapters: $Chapter[]) {
        console.log(`📘 $Book["${this.$title}"] constructor called with ${chapters.length} chapters`);
        chapters.forEach((ch, i) => {
            console.log(`  Chapter ${i}: ${ch.constructor.name}[${ch.key}], title="${ch.$title}", pages=${ch.$pageCount}`);
        });
        
        this.chapters = chapters;
        
        // Verify chapters are fully bonded
        if (chapters.length > 0 && !chapters[0].$title) {
            console.error('❌ ERROR: Chapters not bonded before Book constructor!');
        } else if (chapters.length > 0) {
            console.log(`✅ Chapters are fully bonded with data`);
        }
    }
    
    view() {
        const chapterComponents = this.chapters.map(ch => {
            const [Chapter, key] = $use(ch, 'key');
            return <Chapter key={key} />;
        });
        
        return (
            <div style={{ 
                padding: '12px', 
                margin: '8px 0',
                background: '#fff3e0',
                border: '2px solid #ff9800',
                borderRadius: '8px'
            }}>
                <h3 style={{ margin: '0 0 8px 0' }}>📖 {this.$title}</h3>
                <div style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
                    {this.chapters.length} chapter{this.chapters.length !== 1 ? 's' : ''}
                </div>
                {chapterComponents}
            </div>
        );
    }
}

// Top level: Catalogue
class $Catalogue extends $Chemical {
    $title = 'Book Catalogue';
    books: $Book[] = [];
    
    // Constructor receives fully-bonded books (which have fully-bonded chapters)
    $Catalogue(...books: $Book[]) {
        console.log(`📚 $Catalogue["${this.$title}"] constructor called with ${books.length} books`);
        books.forEach((book, i) => {
            console.log(`  Book ${i}: ${book.constructor.name}[${book.key}], title="${book.$title}", chapters=${book.chapters.length}`);
            book.chapters.forEach((ch, j) => {
                console.log(`    Chapter ${j}: "${ch.$title}", ${ch.$pageCount} pages`);
            });
        });
        
        this.books = books;
        
        // Verify books have their chapters
        if (books.length > 0) {
            if (books[0].chapters.length === 0) {
                console.error('❌ ERROR: Books have no chapters! Book constructor didn\'t run before Catalogue constructor!');
            } else {
                console.log(`✅ Books have their chapters - bonding order is correct!`);
            }
        }
    }
    
    view() {
        const bookComponents = this.books.map(book => {
            const [Book, key] = $use(book, 'key');
            return <Book key={key} />;
        });
        
        return (
            <div style={{ 
                padding: '20px',
                background: '#f5f5f5',
                border: '3px solid #4caf50',
                borderRadius: '12px',
                fontFamily: 'system-ui, sans-serif'
            }}>
                <h2 style={{ margin: '0 0 16px 0' }}>📚 {this.$title}</h2>
                <div style={{ fontSize: '16px', color: '#666', marginBottom: '16px' }}>
                    {this.books.length} book{this.books.length !== 1 ? 's' : ''} in catalogue
                </div>
                {bookComponents}
            </div>
        );
    }
}

// Export components
const Chapter = new $Chapter().Component;
const Book = new $Book().Component;
const Catalogue = new $Catalogue().Component;

export default function HierarchyTest() {
    console.log('\n🔄 ========== RENDER STARTED ==========\n');
    
    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Chemistry Bonding Order Test</h1>
            <p style={{ color: '#666', marginBottom: '30px' }}>
                Testing that children bond before parents:<br/>
                Chapters must be bonded before Books receive them,<br/>
                Books must be bonded before Catalogue receives them.
            </p>
            
            <div style={{ marginBottom: '30px', padding: '15px', background: '#fff9c4', borderRadius: '8px' }}>
                <h3>Expected Bonding Order:</h3>
                <ol>
                    <li>Chapter 1.1 bonds (receives title, pageCount props)</li>
                    <li>Chapter 1.2 bonds (receives props)</li>
                    <li>Chapter 1.3 bonds (receives props)</li>
                    <li><strong>Book 1 constructor runs</strong> with 3 fully-bonded Chapters</li>
                    <li>Chapter 2.1 bonds</li>
                    <li>Chapter 2.2 bonds</li>
                    <li><strong>Book 2 constructor runs</strong> with 2 fully-bonded Chapters</li>
                    <li><strong>Catalogue constructor runs</strong> with 2 fully-bonded Books (which have Chapters)</li>
                </ol>
            </div>
            
            <Catalogue title="Technical Library">
                <Book title="React Patterns">
                    <Chapter title="Introduction" pageCount={15} />
                    <Chapter title="Hooks Deep Dive" pageCount={42} />
                    <Chapter title="Performance" pageCount={28} />
                </Book>
                <Book title="TypeScript Guide">
                    <Chapter title="Advanced Types" pageCount={35} />
                    <Chapter title="Generics" pageCount={22} />
                </Book>
            </Catalogue>
            
            <div style={{ marginTop: '30px', padding: '15px', background: '#e8f5e9', borderRadius: '8px' }}>
                <h3>✅ Success Criteria:</h3>
                <ul>
                    <li>Console shows chapters bonding before books</li>
                    <li>Book constructors receive chapters with titles and page counts</li>
                    <li>Catalogue constructor receives books with populated chapters arrays</li>
                    <li>No "Chapters not bonded" errors</li>
                </ul>
            </div>
            
            <div style={{ marginTop: '15px', padding: '15px', background: '#ffebee', borderRadius: '8px' }}>
                <h3>❌ Failure Indicators:</h3>
                <ul>
                    <li>Book constructors receive empty/undefined chapter data</li>
                    <li>Catalogue sees books with empty chapters arrays</li>
                    <li>Console shows "ERROR: Chapters not bonded"</li>
                </ul>
            </div>
        </div>
    );
}