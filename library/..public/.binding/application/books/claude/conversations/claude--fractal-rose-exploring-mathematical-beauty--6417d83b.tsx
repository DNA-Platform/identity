import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--fractal-rose-exploring-mathematical-beauty--6417d83b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--fractal-rose-exploring-mathematical-beauty--6417d83b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--fractal-rose-exploring-mathematical-beauty--6417d83b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--fractal-rose-exploring-mathematical-beauty--6417d83b/.table';
import March920251 from '../../../../../../.claude/.conversations/claude--fractal-rose-exploring-mathematical-beauty--6417d83b/1-march-9-2025';
import GoldenRoseWithProgressivelyThickerPetalsV1o1 from '../../../../../../.claude/.conversations/claude--fractal-rose-exploring-mathematical-beauty--6417d83b/o1-golden-rose-with-progressively-thicker-petals-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March920251()}
        {GoldenRoseWithProgressivelyThickerPetalsV1o1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
