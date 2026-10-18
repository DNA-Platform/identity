import { Chemical } from '@/chemistry';
import { Work } from '../base/Work';
import { Section } from './content/Section';

export class Writing extends Work {
  sections: Section[] = [];
  
  processChildren(): void {
    if (!this.childChemicals) return;
    this.childChemicals.values().forEach((child: any) => {
      if (child instanceof Section) {
        child.owner = this;
        this.sections.push(child);
      } else if (child) {
        throw new Error(`Writing only accepts Section children, received ${child.constructor.name}`);
      }
    });
  }
  
  text(): string {
    return this.sections.map(section => section.text()).join('\n\n');
  }
  
  component(): React.ReactNode {
    this.processChildren();
    
    return (
      <div className={this.className()}>
        {this.sections.map((section, i) => (
          <div key={section.id || i}>
            {section.component()}
          </div>
        ))}
      </div>
    );
  }
  
  className(): string {
    return 'writing markdown-body';
  }
}

const writing = new Writing();
export default writing.render();