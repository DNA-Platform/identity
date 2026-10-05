import { $ } from '@dna-platform/chemistry';
import { opened } from '../opened';
import $Book from '../../../../..reference/.book';
import Cover from '../../../../..reference/.cover';
import Synopsis from '../../../../..reference/.synopsis';
import Table from '../../../../..reference/.table';
import TheShelves1 from '../../../../..reference/1-the-shelves';
import DougsStory2 from '../../../../..reference/2-dougs-story';
import DougsDesign3 from '../../../../..reference/3-dougs-design';
import DougsReferenceManual4 from '../../../../..reference/4-dougs-reference-manual';
import TheTwoBars90 from '../../../../..reference/90-the-two-bars';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheShelves1()}
        {DougsStory2()}
        {DougsDesign3()}
        {DougsReferenceManual4()}
        {TheTwoBars90()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
