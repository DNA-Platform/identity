import { ReactNode } from 'react';
import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $Annotation, $Writing, Given, Theme } from '@dna-platform/public';
import { $DougsBook, $Imposition, Imposition, Tab as tab } from '../.manual/.book';
import { GalleryMode as galleryMode, LibraryMode as libraryMode } from './o5-the-frame~theme.tsx';

export class $DougsDesign extends $DougsBook {
    get modes(): Given<$Annotation>[] {
        return [libraryMode, galleryMode];
    }

    override write(): ReactNode {
        const Cover = $(this.cover!);
        const Synopsis = $(this.synopsis!);
        const Table = $(this.table!);
        return (
            <>
                <div className="pd-side">
                    {this.classmark()}
                    <Table />
                    {this.byline()}
                </div>
                <div className="pd-main">
                    <div className="pd-head">
                        <Cover />
                        <div className="pd-switches">
                            {this.switches()}
                        </div>
                    </div>
                    <div className="pd-leaves">
                        {this.front(
                            <div className="pd-words">
                                <Synopsis />
                            </div>
                        )}
                        {this.leaves()}
                    </div>
                </div>
            </>
        );
    }

    override switches(): ReactNode {
        const Tab = $(tab);
        return (
            <>
                <Tab
                    chapter={this.cover}
                    of={libraryMode}
                    among={this.modes}
                >
                    library
                </Tab>
                <Tab
                    chapter={this.cover}
                    of={galleryMode}
                    among={this.modes}
                >
                    gallery
                </Tab>
                {super.switches()}
            </>
        );
    }
}

export class $Frame extends $Imposition {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-frame');
    }

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.areas(), this.narrow()];
    }

    protected areas(): RuleSet {
        return css`
            .pd-book.pa-frame {
                display: grid;
                grid-template-columns: ${({ theme }) => theme.side} minmax(0, 1fr);
                grid-template-areas: 'side main';
                height: 100vh;
            }
            .pa-frame .pd-side {
                grid-area: side;
                display: grid;
                grid-template-rows: auto minmax(0, 1fr) auto;
                grid-template-areas: 'home' 'contents' 'me';
                overflow: hidden;
            }
            .pa-frame .pd-side .pd-classmark { grid-area: home; }
            .pa-frame .pd-side .pa-table-of-contents.pd-container { grid-area: contents; overflow-y: auto; }
            .pa-frame .pd-side .pd-byline { grid-area: me; }
            .pa-frame .pd-main {
                grid-area: main;
                display: grid;
                grid-template-rows: auto minmax(0, 1fr);
                grid-template-areas: 'head' 'pages';
            }
            .pa-frame .pd-head {
                grid-area: head;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                column-gap: ${({ theme }) => theme.space};
            }
            .pa-frame .pd-switches {
                display: flex;
                gap: calc(${({ theme }) => theme.space} / 3);
            }
            .pa-frame .pd-leaves { grid-area: pages; overflow-y: auto; }
            .pa-frame .pd-words .pd-chapter { scroll-margin-block-start: ${({ theme }) => theme.space}; }
        `;
    }

    protected narrow(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-book.pa-frame { display: block; height: auto; }
                .pa-frame .pd-side { display: block; }
                .pa-frame .pd-main { display: block; }
                .pa-frame.pa-turned .pa-table-of-contents { display: none; }
            }
        `;
    }
}

export const DougsDesign = $($DougsDesign);
export const Frame = $($Frame);
$(DougsDesign, Imposition)(Frame);
$(DougsDesign, Theme)(galleryMode);
