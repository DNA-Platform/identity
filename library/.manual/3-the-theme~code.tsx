import { ElementType } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, selection } from '@dna-platform/chemistry';
import { $Theme } from '@dna-platform/public';

declare module 'styled-components' {
    export interface DefaultTheme extends $DougsTheme {}
}

export class $DougsTheme extends $Theme {
    measure = '44rem';
    space = '1.5rem';
    style: ElementType = selection.div`${this.parts()}`;

    protected parts(): RuleSet[] {
        return [this.page(), this.writing(), this.figures()];
    }

    protected page(): RuleSet {
        return css`
            max-width: ${({ theme }) => theme.measure};
            margin-inline: auto;
            padding: ${({ theme }) => theme.space};
        `;
    }

    protected writing(): RuleSet {
        return css`
            .pd-chapter, .pd-section, .pd-paragraph { margin-block: ${({ theme }) => theme.space}; }
        `;
    }

    protected figures(): RuleSet {
        return css`
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pd-code { overflow-x: auto; }
        `;
    }
}

export const DougsTheme = $($DougsTheme);
