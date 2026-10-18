import { Chapter } from './Chapter';
import { Writing } from '../../Writing';
import { Next } from '../../references/Next';
import { Section } from '@/writing/content/Section';
import { Chemical } from '@/chemistry';

export class TitlePage extends Chapter {
    additionalContent: Writing[] = [];

    setupNavigation(): void {
        // Title page only has Next (to ToC or first chapter)
        if (!this.book) return;

        this.next = new Next();
        this.next.target = this.book.tableOfContents || this.book.chapters[0];
        // No previous or up for title page
    }

    processChildren(): void {
        if (!this.childChemicals) return;
        this.childChemicals.values().forEach((child: Chemical) => {
            if (child instanceof Section) {
                child.owner = this;
                this.sections.push(child);
            } else if (child) {
                throw new Error(`Writing only accepts Section children, received ${child.constructor.name}`);
            }
        });
    }

    titlePageStyles(): React.CSSProperties {
        return {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#ffffff',
            padding: '40px',
            position: 'relative'
        };
    }

    titleStyles(): React.CSSProperties {
        return {
            fontSize: '4em',
            color: '#000000',
            textAlign: 'center',
            marginBottom: '30px',
            fontFamily: 'Merriweather, serif',
            fontWeight: 300
        };
    }

    authorStyles(): React.CSSProperties {
        return {
            fontSize: '1.5em',
            color: '#333333',
            fontStyle: 'italic',
            marginBottom: '60px'
        };
    }

    additionalContentStyles(): React.CSSProperties {
        return {
            marginTop: '40px',
            textAlign: 'center',
            color: '#666666',
            maxWidth: '600px'
        };
    }

    renderHeader(): React.ReactNode {
        // Title page doesn't show the standard chapter header
        return null;
    }

    component(): React.ReactNode {
        if (!this.book) return null;

        this.setupNavigation();

        return (
            <div style={this.titlePageStyles()}>
                <h1 style={this.titleStyles()}>
                    {this.book.title?.text()}
                </h1>

                <div style={this.authorStyles()}>
                    {this.book.author?.displayName}
                </div>

                {this.additionalContent.length > 0 && (
                    <div style={this.additionalContentStyles()}>
                        {this.additionalContent.map((content, i) => (
                            <div key={i}>{content.component()}</div>
                        ))}
                    </div>
                )}

                {this.next && (
                    <div style={{ position: 'absolute', bottom: '40px', right: '40px' }}>
                        {this.next.component()}
                    </div>
                )}
            </div>
        );
    }
}

const titlePage = new TitlePage();
export default titlePage.render();