import { Image } from './Image';

export class SVG extends Image {
  viewBox?: string;
  preserveAspectRatio?: string;
  
  component() {
    return <div className="svg"></div>;
  }
}

const svg = new SVG();
export default svg.render();