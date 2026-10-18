import { Reference } from '../../references/Reference';

export class Citation extends Reference {
  year?: number;
  publisher?: string;
  authors?: string[];
  title?: string;

  constructor() {
    super();
    this.validateCitation();
  }
  
  validateCitation(): void {
    if (!this.title && !this.authors?.length) {
      console.warn('Citation missing title and authors');
    }
  }
  
  component() {
    return <div className="citation"></div>;
  }
}

const citation = new Citation();
export default citation.render();