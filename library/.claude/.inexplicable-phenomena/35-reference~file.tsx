import { Item } from '@/base/Item';
import { Work } from '@/base/Work';

export class Reference extends Item {
  source?: Work | string | null;
  target: Work | string = '';
  
  component() {
    return <div className="reference"></div>;
  }
}

const reference = new Reference();
export default reference.render();