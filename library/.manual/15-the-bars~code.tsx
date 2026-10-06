import { $, $check, selection } from '@dna-platform/chemistry';
import { $Cover, $Format, $TableOfContents, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';

export class $TopBar extends $Format {
    specification = new TopBarSpecification();
    themeProvider = true;
    style = selection.header`
        .pd-chapter.pa-top-bar { margin-block: 0; }
        .pa-top-bar .pd-title {
            font-family: ${({ theme }) => theme.serif};
            font-size: calc(1.8 * ${({ theme }) => theme.size});
            font-weight: 600;
            line-height: 1.04;
            color: ${({ theme }) => theme.heading};
        }
    `;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-top-bar');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }
}

export class $SideBar extends $Format {
    specification = new SideBarSpecification();
    themeProvider = true;
    style = selection.nav`
        .pd-chapter.pa-side-bar {
            margin-block: 0;
            color: ${({ theme }) => theme.barDim};
        }
        .pa-side-bar .pd-section { margin-block: ${({ theme }) => theme.space} 0; }
        .pa-side-bar .pd-heading {
            display: flex;
            justify-content: space-between;
            margin-block: 0 calc(${({ theme }) => theme.space} / 3);
            padding-inline: calc(${({ theme }) => theme.space} * 0.375);
            font-size: calc(0.76 * ${({ theme }) => theme.size});
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: ${({ theme }) => theme.barDim};
        }
        .pa-side-bar .pd-paragraph.pa-entry {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: calc(${({ theme }) => theme.space} * 0.375);
            margin-block: 0;
            padding: calc(${({ theme }) => theme.space} / 4) calc(${({ theme }) => theme.space} * 0.375) calc(${({ theme }) => theme.space} / 4) calc(${({ theme }) => theme.space} * 1.1);
            border-radius: calc(${({ theme }) => theme.space} / 3);
            font-weight: 500;
            color: ${({ theme }) => theme.barInk};
        }
        .pa-side-bar .pd-paragraph.pa-entry::before {
            content: '';
            position: absolute;
            inset-inline-start: calc(${({ theme }) => theme.space} * 0.375);
            width: calc(${({ theme }) => theme.space} * 0.375);
            height: calc(${({ theme }) => theme.space} * 0.375);
            border-radius: 50%;
            background: ${({ theme }) => theme.sea};
        }
        .pa-side-bar .pd-paragraph.pa-entry.pa-open { background: ${({ theme }) => theme.barOn}; }
        .pa-side-bar .pa-reference.pa-reference { color: inherit; text-decoration: none; }
    `;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-side-bar');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }
}

export class TopBarSpecification extends AnnotationSpecification {
    @specify('a top bar is said of a cover')
    $saidOfACover(writing: $Writing): void {
        $check(writing.is($Cover), 'a top bar is said of a cover, and this chapter is not one');
    }
}

export class SideBarSpecification extends AnnotationSpecification {
    @specify('a side bar is said of a table of contents')
    $saidOfATableOfContents(writing: $Writing): void {
        $check(writing.is($TableOfContents), 'a side bar is said of a table of contents, and this chapter is not one');
    }
}

export const TopBar = $($TopBar);
export const SideBar = $($SideBar);
