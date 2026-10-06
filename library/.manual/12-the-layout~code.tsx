import { ElementType } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, selection } from '@dna-platform/chemistry';
import { $Format, $Writing } from '@dna-platform/public';
import type { $DougsBook } from './1-the-book~code.tsx';
import { OfABookSpecification } from './1-the-book~said.tsx';

export class $Layout extends $Format {
    specification = new OfABookSpecification();
    themeProvider = true;
    style: ElementType = selection.div`${this.parts()}`;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-layout');
        if ((writing as $DougsBook).open !== undefined) writing.classes.add(this, 'pa-turned');
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
            .pd-leaf:not(.pd-open) { display: none; }
        `;
    }
}

export const Layout = $($Layout);
