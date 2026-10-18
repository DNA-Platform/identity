import { Item } from '@/base/Item';

export class Referent extends Item {
  component() {
    return <div className="referent"></div>;
  }
}

const referent = new Referent();
export default referent.render();