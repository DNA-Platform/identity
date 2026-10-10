import { ElementType, ReactNode } from 'react';
import { $, $check, $Chemical, selection } from '@dna-platform/chemistry';
import { $Annotation, $Append, $Chapter, $Paragraph, $Writing, AnnotationSpecification, Code as code, ContainerProps, Given, Word as word, html, specify } from '@dna-platform/public';
import type { $LibraryBook } from './1-the-book~code.tsx';
import { $Tab } from './9-the-switch~code.tsx';
import { $Manual } from './10-the-manual~code.tsx';
import { $Keyed } from './o1-the-key~code.tsx';

export const languages: Record<string, string> = { tsx: 'typescript', ts: 'typescript', mjs: 'javascript', js: 'javascript', css: 'css', html: 'xml', svg: 'xml', json: 'json', md: 'markdown' };

const fileMark = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>';

export const fileNameOf = (file: $Append): string => `${file.$identifier}${file.$type}`;

export const fileLinesOf = (file: $Append | undefined): string[] =>
    file === undefined ? [] : html.copy(file.text).split('\n');

export const manualOf = (file: $Append | undefined): $Manual | undefined =>
    file?.chapter?.annotations.expressed($Manual);

export class $FileListing extends $Paragraph {
    $file?: $Append;
    $filePanelState?: Given<$Annotation>;
    $family: Given<$Annotation>[] = [];
    get name(): string { return this.$file === undefined ? '' : fileNameOf(this.$file); }
    get language(): string { return languages[(this.$file?.$type ?? '').replace(/^\./u, '')] ?? ''; }
    get manual(): $Manual | undefined { return manualOf(this.$file); }
    override get chapter(): $Chapter | undefined { return this.$file?.chapter ?? super.chapter; }

    $FileListing(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this.containers.replace(this, 'span', 'div');
    }

    override container(props: ContainerProps): ReactNode {
        return super.container({ onClick: () => this.press(), ...props });
    }

    press(): void {
        if (this.$filePanelState === undefined) return;
        const book = this.book!;
        const annotations = [book.$is].flat().filter(annotation => !this.$family.includes(annotation));
        book.$is = [this.$filePanelState, ...annotations];
    }

    override write(): ReactNode {
        const Word = $(word);
        const Code = $(code);
        return (
            <>
                <Word>
                    {this.name}
                </Word>
                <Code
                    identifier={this.$file?.$identifier}
                    type={this.$file?.$type}
                    language={this.language}
                    numbered
                />
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-file-listing');
        const Given = $(openListing);
        this.annotations.add(this,
            <Given />
        );
    }
}

export class $OpenListing extends $Annotation {
    specification = new OpenListingSpecification();

    override defines(writing: $Writing): void {
        const fileListing = writing as $FileListing;
        if (fileListing.$file !== undefined && fileListing.manual?.openFile === fileListing.$file) writing.classes.add(this, 'pa-open');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class OpenListingSpecification extends AnnotationSpecification {
    @specify('an open listing is a file listing')
    $isAFileListing(writing: $Writing): void {
        $check(writing instanceof $FileListing, 'an open listing is a file listing, and this is not one');
    }
}

export class $FileTab extends $Tab {
    $file?: $Append;
    $skeleton = false;
    style: ElementType = selection.button<{ $colour: string }>`
        --colour: ${props => props.$colour};
    `;
    override get on(): boolean {
        const chapter = this.$file?.chapter;
        return chapter !== undefined && chapter === (this.book as $LibraryBook).open && this.manual?.openFile === this.$file;
    }
    get name(): string { return this.$file === undefined ? '' : fileNameOf(this.$file); }
    get manual(): $Manual | undefined { return manualOf(this.$file); }
    get colour(): string { return this.$file?.chapter?.annotations.expressed($Keyed)?.colour ?? ''; }
    get lines(): string[] { return fileLinesOf(this.$file); }
    override get chapter(): $Chapter | undefined { return this.$file?.chapter ?? super.chapter; }

    $FileTab(...chemicals: $Chemical[]) {
        this.$Switch(...chemicals);
        this.containers.replace(this, 'button', this.style);
    }

    override container(props: ContainerProps): ReactNode {
        return super.container({ $colour: this.colour, ...props });
    }

    override press(): void {
        const manual = this.manual;
        if (manual !== undefined) manual.$openFile = this.$file;
        if (this.$annotation !== undefined) super.press();
    }

    override write(): ReactNode {
        return (
            <>
                <span
                    className="pd-drawing"
                    dangerouslySetInnerHTML={{ __html: fileMark }}
                />
                <span className="pd-tab-name">
                    {this.name}
                </span>
                {this.$skeleton ? (
                    <span className="pd-skeleton">
                        {this.lines.slice(0, 14).map((line, index) => (
                            <i
                                key={index}
                                style={{ width: `${Math.max(12, Math.min(100, line.length * 2.2))}%` }}
                            />
                        ))}
                    </span>
                ) : undefined}
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-file-tab');
    }
}

export const FileListing = $($FileListing);
export const OpenListing = $($OpenListing);
export const FileTab = $($FileTab);
const openListing = OpenListing;
