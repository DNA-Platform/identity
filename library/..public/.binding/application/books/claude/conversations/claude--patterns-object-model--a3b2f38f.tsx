import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--patterns-object-model--a3b2f38f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--patterns-object-model--a3b2f38f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--patterns-object-model--a3b2f38f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--patterns-object-model--a3b2f38f/.table';
import August1820251 from '../../../../../../.claude/.conversations/claude--patterns-object-model--a3b2f38f/1-august-18-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August1820251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
