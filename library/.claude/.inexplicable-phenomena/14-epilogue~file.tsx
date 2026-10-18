import { Section } from '../../content/Section';
import { Book } from './Book';

export class Epilogue extends Section {
  book?: Book;
  className(): string {
    return 'epilogue';
  }
}

const epilogue = new Epilogue();
export default epilogue.render();