import { Reference } from './Reference';

export class Bottom extends Reference {
  
  handleClick = (): void => {
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'smooth' 
    });
  }
  
  buttonStyles(): React.CSSProperties {
    return {
      position: 'fixed',
      bottom: '20px',
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
        title="Go to bottom"
      >
        â†“
      </button>
    );
  }
}

const bottom = new Bottom();
export default bottom.render();