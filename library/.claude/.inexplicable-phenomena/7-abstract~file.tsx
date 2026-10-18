import { Section } from '../../content/Section';

export class Abstract extends Section {
  component() {
    return <div className="abstract"></div>;
  }
}

const abstract = new Abstract();
export default abstract.render();