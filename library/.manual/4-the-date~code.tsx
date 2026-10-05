import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Date, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';

export class $Dated extends $Annotation {
    specification = new DatedSpecification();
    get date(): $Date | undefined { return this.text.find($Date)[0]; }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-dated');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }

    override note(): ReactNode {
        const date = this.date;
        if (date === undefined) return null;
        const Date = $(date);
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
        $check(writing.annotations.containsOne($Dated), 'a chapter is dated once, and this one is dated more than once');
    }

    @specify('a dated chapter is given one date')
    $givenOneDate(writing: $Writing): void {
        $check(writing.annotations.expressed($Dated)?.text.find($Date).length === 1,
            'a dated chapter is given one date, and this one is given none or more than one');
    }
}

export const Dated = $($Dated);
