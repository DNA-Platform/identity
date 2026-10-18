import React from 'react';
import { Work } from './Work';

export class Collection<T extends Work = Work> extends Work {
  items: T[] = [];
  
  constructor() {
    super();
  }
  
  processChildren(): void {
    // In Chemistry, children passed as props are already instances
    if (!this.childChemicals) return;
    this.childChemicals.values().forEach((child: any) => {
      if (child instanceof Work) {
        this.items.push(child as T);
      }
    });
  }
  
  component(): React.ReactNode {
    return (
      <>
        {this.items.map((item, i) => (
          <div key={item.id || i}>{item.component()}</div>
        ))}
      </>
    );
  }
}

const collection = new Collection();
export default collection.render();