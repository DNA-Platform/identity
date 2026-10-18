import { Reference } from './Reference';

export class Link extends Reference {
  component() {
    return <div className="link"></div>;
  }
}

const link = new Link();
export default link.render();