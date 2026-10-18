import { Chapter } from '../collections/books/Chapter';
import { Reference } from './Reference';

export class Next extends Reference {
  chapter?: Chapter;
  component() {
    return <div className="next"></div>;
  }
}

const next = new Next();
export default next.render();