import { Collection } from '../base/Collection';
import { Book } from './collections/books/Book';

export class Bookshelf extends Collection<Book> {
  currentBook?: Book;
  
  shelfStyles(): React.CSSProperties {
    return {
      minHeight: '100vh',
      background: 'var(--background-color)'
    };
  }
  
  component(): React.ReactNode {
    // For now, just show the first book
    if (this.items.length > 0) {
      this.currentBook = this.items[0];
      return (
        <div style={this.shelfStyles()}>
          {this.currentBook.component()}
        </div>
      );
    }
    
    return <div>No books on shelf</div>;
  }
}

const bookshelf = new Bookshelf();
export default bookshelf.render();