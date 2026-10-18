import { Collection } from './Collection';
import { Logo } from './Logo';

export class Organization extends Collection {
  logo: Logo;
  component() {
    return <div className="organization"></div>;
  }

  constructor() {
    super();
    this.logo = new Logo();
  }
}

const organization = new Organization();
export default organization.render();