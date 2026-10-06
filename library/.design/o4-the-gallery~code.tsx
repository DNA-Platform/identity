import { $, $check, selection } from '@dna-platform/chemistry';
import { $Chapter, $Format, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';

export class $Gallery extends $Format {
    specification = new GallerySpecification();
    themeProvider = true;
    style = selection.div`
        .pd-chapter.pa-gallery .pd-section {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(${({ theme }) => theme.card}, 1fr));
            gap: ${({ theme }) => theme.space};
            align-items: start;
        }
        .pa-gallery .pd-section .pa-self-reference.pd-container, .pa-gallery .pd-section .pd-paragraph { grid-column: 1 / -1; }
        .pa-gallery .pd-section.pa-concept {
            display: grid;
            grid-template-columns: auto minmax(0, 1fr);
            grid-template-areas: 'pictures pictures' 'number name';
            align-items: baseline;
            gap: calc(${({ theme }) => theme.space} / 2);
        }
        .pa-gallery .pa-concept .pa-number { grid-area: number; }
        .pa-gallery .pa-concept .pa-self-reference.pd-container { grid-area: name; }
        .pa-gallery .pa-concept .pd-paragraph { grid-column: 1 / -1; }
        .pa-gallery .pa-concept .pd-paragraph.pa-photographs {
            grid-area: pictures;
            display: flex;
            gap: calc(${({ theme }) => theme.space} / 2);
            overflow: hidden;
        }
        .pa-gallery .pa-concept .pa-photographs img { height: ${({ theme }) => theme.photo}; width: auto; max-width: none; }
        .pa-gallery .pa-concept .pd-paragraph.pa-source { display: none; }
        .pa-gallery .pd-section.pa-concept.pa-open {
            position: fixed;
            inset: 0 0 0 ${({ theme }) => theme.side};
            z-index: 1;
            overflow-y: auto;
            padding: ${({ theme }) => theme.space} calc(${({ theme }) => theme.space} * 1.17);
            background: ${({ theme }) => theme.paper};
            grid-template-areas: 'number name' 'pictures pictures';
            align-content: start;
        }
        .pa-gallery .pa-concept.pa-open .pd-paragraph.pa-photographs, .pa-gallery .pa-concept.pa-open .pd-paragraph.pa-source { max-width: none; }
        .pa-gallery .pa-concept.pa-open .pa-photographs { flex-wrap: wrap; overflow: visible; }
        .pa-gallery .pa-concept.pa-open .pa-photographs img { height: auto; max-width: 100%; }
        .pa-gallery .pa-concept.pa-open .pd-paragraph.pa-source { display: block; }
        @media (max-width: ${({ theme }) => theme.narrow}) {
            .pa-gallery .pd-section.pa-concept.pa-open { inset: 0; }
        }
    `;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-gallery');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }
}

export class GallerySpecification extends AnnotationSpecification {
    @specify('a gallery is said of a chapter')
    $saidOfAChapter(writing: $Writing): void {
        $check(writing instanceof $Chapter, 'a gallery is said of a chapter, and this is not one');
    }
}

export const Gallery = $($Gallery);
