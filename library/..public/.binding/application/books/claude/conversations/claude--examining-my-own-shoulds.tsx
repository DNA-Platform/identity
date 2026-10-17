import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--examining-my-own-shoulds/.book';
import Cover from '../../../../../../.claude/.conversations/claude--examining-my-own-shoulds/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--examining-my-own-shoulds/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--examining-my-own-shoulds/.table';
import December1420251 from '../../../../../../.claude/.conversations/claude--examining-my-own-shoulds/1-december-14-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {December1420251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
