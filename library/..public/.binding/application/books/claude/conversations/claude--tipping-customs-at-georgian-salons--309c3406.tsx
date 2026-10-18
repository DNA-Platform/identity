import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--tipping-customs-at-georgian-salons--309c3406/.book';
import Cover from '../../../../../../.claude/.conversations/claude--tipping-customs-at-georgian-salons--309c3406/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--tipping-customs-at-georgian-salons--309c3406/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--tipping-customs-at-georgian-salons--309c3406/.table';
import April720261 from '../../../../../../.claude/.conversations/claude--tipping-customs-at-georgian-salons--309c3406/1-april-7-2026';
import April820262 from '../../../../../../.claude/.conversations/claude--tipping-customs-at-georgian-salons--309c3406/2-april-8-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April720261()}
        {April820262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
