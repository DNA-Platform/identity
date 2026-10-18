import { Reference } from './Reference';

export class Footnote extends Reference {
  component() {
    return <div className="footnote"></div>;
  }
}

const footnote = new Footnote();
export default footnote.render();