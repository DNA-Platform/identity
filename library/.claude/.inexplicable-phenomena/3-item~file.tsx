import { Chemical } from '../chemistry';
import { Work } from './Work';

export class Item extends Chemical {
  id?: string;
  owner?: Work;
  
  component(): React.ReactNode {
    return (
      <div id={this.id} className={this.className()}></div>
    );
  }
  
  className(): string {
    return 'work';
  }
}

const item = new Item();
export default item.render();