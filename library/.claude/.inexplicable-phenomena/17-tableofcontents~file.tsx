import { Collection } from '../../../base/Collection';
import { Chapter } from './Chapter';
import { Book } from './Book';

export class TableOfContents extends Chapter {
  book?: Book;
  tocStyles(): React.CSSProperties {
    return {
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px'
    };
  }
  
  entryStyles(): React.CSSProperties {
    return {
      marginBottom: '20px',
      padding: '15px',
      borderLeft: '3px solid var(--primary-color)',
      background: 'var(--header-bg)'
    };
  }
  
  component(): React.ReactNode {
    const book = this.owner;
    if (!book || !('chapters' in book)) return null;
    
    return (
      <nav style={this.tocStyles()}>
        <h2>Contents</h2>
        <div>
          {(book as any).chapters.map((chapter: Chapter, i: number) => (
            <div key={chapter.id || i} style={this.entryStyles()}>
              <a href={`#chapter-${chapter.number || i}`}>
                <h3>{chapter.title?.text()}</h3>
              </a>
              {(chapter as any).synopsis && (
                <p style={{ marginTop: '10px', color: '#666' }}>
                  {(chapter as any).synopsis}
                </p>
              )}
            </div>
          ))}
        </div>
      </nav>
    );
  }
}

const tableOfContents = new TableOfContents();
export default tableOfContents.render();