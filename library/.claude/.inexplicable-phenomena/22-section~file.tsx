import { Chemical } from '@/chemistry';
import { Writing } from '../Writing';
import { Paragraph } from './Paragraph';
import { Title } from './Title';

export class Section extends Writing {
  title?: Title;
  paragraph?: Paragraph;

  processChildren(): void {
    if (!this.childChemicals) return;

    this.childChemicals.values().forEach((child: Chemical, index: number) => {
      if (index == 0 && child instanceof Title) {
        child.owner = this;
        this.title = child;
      } else if (index == 0 && !this.title && child instanceof Paragraph) {
        child.owner = this;
        this.paragraph = child;
      } else if (index == 1 && this.title && child instanceof Paragraph) {
        child.owner = this;
        this.paragraph = child;
      } else if (child instanceof Section) {
        child.owner = this;
        this.sections.push(child);
      } else if (child) {
        throw new Error(`Writing only accepts Section children, received ${child.constructor.name}`);
      }
    });
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
}

const section = new Section();
export default section.render();