import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--mons-role-in-telegrams-cryptocurrency-ecosystem/.book';
import Cover from '../../../../../../.claude/.conversations/claude--mons-role-in-telegrams-cryptocurrency-ecosystem/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--mons-role-in-telegrams-cryptocurrency-ecosystem/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--mons-role-in-telegrams-cryptocurrency-ecosystem/.table';
import April820261 from '../../../../../../.claude/.conversations/claude--mons-role-in-telegrams-cryptocurrency-ecosystem/1-april-8-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
