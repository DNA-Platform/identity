import { Title } from '@/writing/content/Title';
import { Work } from '../../../base/Work';
import { Book } from './Book';
import { Author } from '@/writing/references/Author';

export class Cover extends Work {
  book?: Book;
  title?: Title;
  author?: Author;
  color: string = '#0f1419';
  accentColor: string = '#1e3a5f';
  visible: boolean = true;
  duration: number = 3000; // How long to show the cover
  fadeTime: number = 1500; // How long the fade takes
  
  setBook(book: Book) {
    book.title = this.title;
    book.author = this.author;
    this.book = book;
  }
  
  componentDidMount(): void {
    // Auto-hide after duration
    setTimeout(() => {
      this.visible = false;
    }, this.duration);
  }
  
  coverStyles(): React.CSSProperties {
    return {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      background: `linear-gradient(135deg, ${this.color} 0%, ${this.accentColor} 100%)`,
      display: this.visible ? 'flex' : 'none',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      animation: this.visible ? 'fadeIn 0.5s ease-in' : `fadeOut ${this.fadeTime}ms ease-out`,
      pointerEvents: this.visible ? 'all' : 'none'
    };
  }
  
  titleStyles(): React.CSSProperties {
    return {
      fontSize: '5em',
      color: '#ffffff',
      textAlign: 'center',
      marginBottom: '20px',
      fontFamily: 'Merriweather, serif',
      textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 0 40px rgba(255,255,255,0.1)',
      fontWeight: 300,
      letterSpacing: '2px',
      animation: 'slideUp 1s ease-out'
    };
  }
  
  authorStyles(): React.CSSProperties {
    return {
      fontSize: '1.8em',
      color: '#ffffff',
      fontStyle: 'italic',
      opacity: 0.95,
      textShadow: '0 1px 10px rgba(0,0,0,0.3)',
      fontWeight: 300,
      animation: 'slideUp 1.2s ease-out'
    };
  }
  
  component(): React.ReactNode {
    // Only render if visible
    if (!this.visible) return null;
    
    return (
      <div style={this.coverStyles()}>
        <h1 style={this.titleStyles()}>
          {this.title?.text() || this.book?.title?.text()}
        </h1>
        <div style={this.authorStyles()}>
          by {this.author?.displayName || this.book?.author?.displayName}
        </div>
      </div>
    );
  }
}

const cover = new Cover();
export default cover.render();