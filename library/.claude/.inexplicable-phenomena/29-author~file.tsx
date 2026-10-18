import { Reference } from './Reference';

export class Author extends Reference {
  displayName: string = '';
  
  component() {
    return <div className="author"></div>;
  }
}

const author = new Author();
export default author.render();