import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/hypothetical-net-worth/.book';
import Cover from '../../../../../../.claude/.conversations/hypothetical-net-worth/.cover';
import Synopsis from '../../../../../../.claude/.conversations/hypothetical-net-worth/.synopsis';
import Table from '../../../../../../.claude/.conversations/hypothetical-net-worth/.table';
import January1220261 from '../../../../../../.claude/.conversations/hypothetical-net-worth/1-january-12-2026';
import January1320262 from '../../../../../../.claude/.conversations/hypothetical-net-worth/2-january-13-2026';

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
