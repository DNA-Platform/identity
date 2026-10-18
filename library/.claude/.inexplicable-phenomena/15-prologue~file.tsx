import { Section } from '../../content/Section';
import { Book } from './Book';

export class Prologue extends Section {
  book?: Book;
  className(): string {
    return 'prologue';
  }
}

const prologue = new Prologue();
export default prologue.render();