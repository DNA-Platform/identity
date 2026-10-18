import { Section } from '../../content/Section';
import { Book } from './Book';

export class Synopsis extends Section {
  book?: Book;
  className(): string {
    return 'synopsis';
  }
}

const synopsis = new Synopsis();
export default synopsis.render();