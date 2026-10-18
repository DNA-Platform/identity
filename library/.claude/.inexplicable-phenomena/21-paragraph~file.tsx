import { Rose } from '../interactive/Rose';
import { Section } from './Section';

export class Paragraph extends Section {
  rose?: Rose;
  
  // Semantic properties that drive styling
  indent: boolean = false;
  emphasis: boolean = false;
  compact: boolean = false;
  align: 'left' | 'center' | 'right' | 'justify' = 'left';
  
  processChildren(): void {
    super.processChildren();
    
    this.childChemicals.forEach((child: any) => {
      if (child instanceof Rose) {
        this.rose = child;
        this.rose.owner = this;
      }
    });
  }
  
  // Semantic style methods - each does ONE thing
  
  spacingStyles(): React.CSSProperties {
    return {
      marginTop: this.compact ? '0.5em' : '0',
      marginBottom: this.compact ? '0.5em' : '1em',
      marginLeft: this.indent ? '2em' : (this.rose ? '36px' : '0'),
      marginRight: this.rose ? '36px' : '0'
    };
  }
  
  typographyStyles(): React.CSSProperties {
    return {
      fontSize: this.emphasis ? '1.1em' : '16px',
      fontWeight: this.emphasis ? 600 : 'normal',
      fontStyle: this.emphasis ? 'italic' : 'normal',
      lineHeight: this.compact ? 1.4 : 1.6
    };
  }
  
  fontFamilyStyles(): React.CSSProperties {
    return {
      fontFamily: 'Georgia, serif'
    };
  }
  
  colorStyles(): React.CSSProperties {
    return {
      color: this.emphasis ? 'var(--emphasis-color, #2c3e50)' : 'var(--text-color, #333)'
    };
  }
  
  alignmentStyles(): React.CSSProperties {
    return {
      textAlign: this.align
    };
  }
  
  mobileFontStyles(): React.CSSProperties {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return {
        fontFamily: 'Roboto Mono, monospace',
        fontSize: '15.5px'
      };
    }
    return {};
  }
  
  // Compose the final styles
  paragraphStyles(): React.CSSProperties {
    return {
      ...this.spacingStyles(),
      ...this.typographyStyles(),
      ...this.fontFamilyStyles(),
      ...this.colorStyles(),
      ...this.alignmentStyles(),
      ...this.mobileFontStyles()
    };
  }
  
  containerStyles(): React.CSSProperties {
    return {
      position: 'relative'
    };
  }
  
  roseStyles(): React.CSSProperties {
    return {
      position: 'absolute',
      top: '50%',
      right: '20px',
      transform: 'translateY(-50%)'
    };
  }
  
  renderRose(): React.ReactNode {
    if (!this.rose) return null;
    return (
      <div style={this.roseStyles()}>
        {this.rose.component()}
      </div>
    );
  }
  
  component(): React.ReactNode {
    this.processChildren();
    
    if (this.rose) {
      return (
        <div style={this.containerStyles()}>
          <p style={this.paragraphStyles()}>
            {this.content}
          </p>
          {this.renderRose()}
        </div>
      );
    }
    
    return (
      <p style={this.paragraphStyles()}>
        {this.content}
      </p>
    );
  }
}

const paragraph = new Paragraph();
export default paragraph.render();