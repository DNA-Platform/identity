import { Chapter } from '../collections/books/Chapter';
import { Reference } from './Reference';

export class Previous extends Reference {
  chapter?: Chapter;
  component() {
    return <div className="previous"></div>;
  }
}

const previous = new Previous();
export default previous.render();