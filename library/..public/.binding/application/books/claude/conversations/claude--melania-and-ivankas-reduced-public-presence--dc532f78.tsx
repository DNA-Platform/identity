import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--melania-and-ivankas-reduced-public-presence--dc532f78/.book';
import Cover from '../../../../../../.claude/.conversations/claude--melania-and-ivankas-reduced-public-presence--dc532f78/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--melania-and-ivankas-reduced-public-presence--dc532f78/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--melania-and-ivankas-reduced-public-presence--dc532f78/.table';
import April220261 from '../../../../../../.claude/.conversations/claude--melania-and-ivankas-reduced-public-presence--dc532f78/1-april-2-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
