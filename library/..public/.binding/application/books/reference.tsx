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
import TheBars90 from '../../../../..reference/90-the-bars';
import TheShelf91 from '../../../../..reference/91-the-shelf';
import TheBlackAndSky92 from '../../../../..reference/92-the-black-and-sky';

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
        {TheBars90()}
        {TheShelf91()}
        {TheBlackAndSky92()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
