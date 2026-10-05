import { ElementType } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, $check, selection } from '@dna-platform/chemistry';
import { $Book, $Format, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';

export class $Paged extends $Format {
    specification = new PagedSpecification();
    themeProvider = true;
    style: ElementType = selection.div`${this.parts()}`;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-paged');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }

    protected parts(): RuleSet[] {
        return [this.paging()];
    }

    protected paging(): RuleSet {
        return css`
            .pd-page:not(.pd-open) { display: none; }
        `;
    }
}

export class PagedSpecification extends AnnotationSpecification {
    @specify('paged is said of a book')
    $saidOfABook(writing: $Writing): void {
        $check(writing instanceof $Book, 'paged is said of a book, and this is not one');
    }
}

export const Paged = $($Paged);
