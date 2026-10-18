import { Reference } from './Reference';

export class Up extends Reference {
  component() {
    return <div className="up"></div>;
  }
}

const up = new Up();
export default up.render();