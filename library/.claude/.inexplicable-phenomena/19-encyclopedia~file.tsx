import { Book } from '@/writing/collections/books/Book';
import { EncyclopediaEntry } from './EncyclopediaEntry';

export class Encyclopedia extends Book {
  
  processChildren(): void {
    // Let Book handle its normal children (Cover, TitlePage, TableOfContents, etc.)
    super.processChildren();
    
    // Also process EncyclopediaEntry children
    if (!this.childChemicals) return;
    
    this.childChemicals.values().forEach((child: any) => {
      if (child instanceof EncyclopediaEntry) {
        child.owner = this;
        this.chapters.push(child);
      }
    });
    
    // Encyclopedia alphabetizes its entries
    this.alphabetizeEntries();
  }
  
  alphabetizeEntries(): void {
    this.chapters.sort((a, b) => {
      const aTitle = a.title?.text() || '';
      const bTitle = b.title?.text() || '';
      return aTitle.localeCompare(bTitle);
    });
    
    // Re-number after sorting
    this.assignChapterNumbers();
  }
  
  assignChapterNumbers(): void {
    this.chapters.forEach((chapter, index) => {
      chapter.number = index + 1;
    });
  }
}

const encyclopedia = new Encyclopedia();
export default encyclopedia.render();