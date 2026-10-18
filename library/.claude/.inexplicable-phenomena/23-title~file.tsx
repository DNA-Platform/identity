import { Paragraph } from './Paragraph';

export class Title extends Paragraph {
  content: string = '';
  component(): React.ReactNode {
    return <span className="title">{this.content}</span>;
  }
}

const title = new Title();
export default title.render();