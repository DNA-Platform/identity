import { Chapter } from '../books/Chapter';

export class EncyclopediaEntry extends Chapter {
  synopsis?: string;
  relatedEntries?: string[];
  
  entryStyles(): string {
    return `
      padding: 40px;
      max-width: 800px;
      margin: 0 auto;
    `;
  }
  
  component(): React.ReactNode {
    return (
      <article className="encyclopedia-entry">
        <h1>{this.title?.text()}</h1>
        {this.synopsis && (
          <div style={{ 
            fontStyle: 'italic', 
            marginBottom: '20px',
            color: '#666',
            borderLeft: '3px solid #ddd',
            paddingLeft: '15px'
          }}>
            {this.synopsis}
          </div>
        )}
        {this.content}
        {this.relatedEntries && (
          <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #ddd' }}>
            <strong>See also:</strong> {this.relatedEntries.join(', ')}
          </div>
        )}
      </article>
    );
  }
}

const encyclopediaEntry = new EncyclopediaEntry();
export default encyclopediaEntry.render();