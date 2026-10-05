import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Annotation, $Append, $Chapter, $Content, $Paginated, $Paragraph, $Section, $TableOfContents, $Word, $Writing } from '@dna-platform/public';
import { $Shelfmark } from './4-the-shelfmark~code.tsx';

export class $Entry extends $Annotation {
    get paragraph(): $Paragraph | undefined { return this.parent instanceof $Paragraph ? this.parent : undefined; }
    get content(): $Content | undefined {
        const paragraph = this.paragraph;
        return paragraph?.annotations.expressed($Content) ?? paragraph?.text.find($Word)[0]?.annotations.expressed($Content);
    }

    get meant(): $Chapter | undefined {
        const identifier = this.content?.identifier;
        if (identifier === undefined || identifier === '') return undefined;
        return this.book?.text.find($Chapter).find(chapter => chapter.mention?.identifier === identifier);
    }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-entry');
        const chapter = this.meant;
        if (chapter !== undefined && this.book?.annotations.expressed($Paginated)?.open === chapter)
            writing.classes.add(this, 'pa-open');
        if (this.paragraph?.text.find($Word).some(word => word.is($Shelfmark)) === true)
            writing.classes.add(this, 'pa-answer');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }

    override note(): ReactNode {
        const appends = this.meant?.annotations.find($Append) ?? [];
        if (appends.length === 0) return null;
        return (
            <span className="pd-appended">
                {appends.map(append => append.$type).join(' ')}
            </span>
        );
    }
}

export class $DougsTableOfContents extends $TableOfContents {
    protected override $Bound(): void {
        const Entry = $(entry);
        for (const section of this.chapter?.text.find($Section) ?? [])
            for (const paragraph of section.text.find($Paragraph))
                if (!paragraph.is($Entry))
                    paragraph.annotations.add(this, <Entry />);
        super.$Bound();
    }
}

export const Entry = $($Entry);
const entry = Entry;
export const TableOfContents = $($DougsTableOfContents);
