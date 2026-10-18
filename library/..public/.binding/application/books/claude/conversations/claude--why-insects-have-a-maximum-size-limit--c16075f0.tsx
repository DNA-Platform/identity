import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--why-insects-have-a-maximum-size-limit--c16075f0/.book';
import Cover from '../../../../../../.claude/.conversations/claude--why-insects-have-a-maximum-size-limit--c16075f0/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--why-insects-have-a-maximum-size-limit--c16075f0/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--why-insects-have-a-maximum-size-limit--c16075f0/.table';
import July220261 from '../../../../../../.claude/.conversations/claude--why-insects-have-a-maximum-size-limit--c16075f0/1-july-2-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
