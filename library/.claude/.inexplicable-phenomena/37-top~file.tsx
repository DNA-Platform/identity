import { Reference } from './Reference';

export class Top extends Reference {
  
  handleClick = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  buttonStyles(): React.CSSProperties {
    return {
      position: 'fixed',
      bottom: '60px',
      right: '20px',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: 'var(--primary-color, #2c3e50)',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      opacity: 0.8,
      zIndex: 100
    };
  }
  
  component() {
    return (
      <button 
        style={this.buttonStyles()}
        onClick={this.handleClick} 
        title="Back to top"
      >
        â†‘
      </button>
    );
  }
}

const top = new Top();
export default top.render();