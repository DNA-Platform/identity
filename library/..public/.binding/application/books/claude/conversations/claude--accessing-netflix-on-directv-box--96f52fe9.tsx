import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--accessing-netflix-on-directv-box--96f52fe9/.book';
import Cover from '../../../../../../.claude/.conversations/claude--accessing-netflix-on-directv-box--96f52fe9/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--accessing-netflix-on-directv-box--96f52fe9/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--accessing-netflix-on-directv-box--96f52fe9/.table';
import November2920241 from '../../../../../../.claude/.conversations/claude--accessing-netflix-on-directv-box--96f52fe9/1-november-29-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November2920241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
