import { Writing } from '../../Writing';

export class Article extends Writing {
  text(): string {
    return '';
  }
  
  component() {
    return <div className="article"></div>;
  }
}

const article = new Article();
export default article.render();