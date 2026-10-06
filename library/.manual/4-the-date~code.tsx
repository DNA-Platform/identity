import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Date, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';

export class $Dateline extends $Annotation {
    specification = new DatedSpecification();
    get date(): $Date | undefined { return this.text.find($Date)[0]; }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-dateline');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }

    override note(): ReactNode {
        const Date = $(this.date!);
        return (
            <Date />
        );
    }
}

export class DatedSpecification extends AnnotationSpecification {
    @specify('dated is said of a chapter')
    $saidOfAChapter(writing: $Writing): void {
        $check(writing instanceof $Chapter, 'dated is said of a chapter, and this is not one');
    }

    @specify('a chapter is dated once')
    $datedOnce(writing: $Writing): void {
        $check(writing.annotations.containsOne($Dateline), 'a chapter is dated once, and this one is dated more than once');
    }

    @specify('a dated chapter is given one date')
    $givenOneDate(writing: $Writing): void {
        $check(writing.annotations.expressed($Dateline)?.text.find($Date).length === 1,
            'a dated chapter is given one date, and this one is given none or more than one');
    }
}

export const Dateline = $($Dateline);
