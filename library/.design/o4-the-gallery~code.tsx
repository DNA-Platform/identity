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
            grid-template-columns: minmax(0, 1fr);
            grid-template-areas: 'pictures' 'name';
            gap: calc(${({ theme }) => theme.space} / 2);
        }
        .pa-gallery .pa-concept .pa-self-reference.pd-container { grid-area: name; }
        .pa-gallery .pa-concept .pd-paragraph { grid-column: auto; }
        .pa-gallery .pa-concept .pd-paragraph.pa-plates {
            grid-area: pictures;
            display: flex;
            gap: calc(${({ theme }) => theme.space} / 2);
            overflow: hidden;
        }
        .pa-gallery .pa-concept .pa-plates img { height: ${({ theme }) => theme.plate}; width: auto; max-width: none; }
        .pa-gallery .pa-concept .pd-paragraph.pa-source { display: none; }
        .pa-gallery .pa-concept.pa-open { grid-column: 1 / -1; }
        .pa-gallery .pa-concept.pa-open .pa-plates { flex-wrap: wrap; }
        .pa-gallery .pa-concept.pa-open .pa-plates img { height: auto; max-width: 100%; }
        .pa-gallery .pa-concept.pa-open .pd-paragraph.pa-source { display: block; }
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
