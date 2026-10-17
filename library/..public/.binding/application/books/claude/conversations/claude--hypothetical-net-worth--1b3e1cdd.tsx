import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--hypothetical-net-worth--1b3e1cdd/.book';
import Cover from '../../../../../../.claude/.conversations/claude--hypothetical-net-worth--1b3e1cdd/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--hypothetical-net-worth--1b3e1cdd/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--hypothetical-net-worth--1b3e1cdd/.table';
import January1220261 from '../../../../../../.claude/.conversations/claude--hypothetical-net-worth--1b3e1cdd/1-january-12-2026';
import January1320262 from '../../../../../../.claude/.conversations/claude--hypothetical-net-worth--1b3e1cdd/2-january-13-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1220261()}
        {January1320262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
