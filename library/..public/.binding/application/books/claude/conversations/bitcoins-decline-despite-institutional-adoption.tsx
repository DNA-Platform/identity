import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/bitcoins-decline-despite-institutional-adoption/.book';
import Cover from '../../../../../../.claude/.conversations/bitcoins-decline-despite-institutional-adoption/.cover';
import Synopsis from '../../../../../../.claude/.conversations/bitcoins-decline-despite-institutional-adoption/.synopsis';
import Table from '../../../../../../.claude/.conversations/bitcoins-decline-despite-institutional-adoption/.table';
import July220261 from '../../../../../../.claude/.conversations/bitcoins-decline-despite-institutional-adoption/1-july-2-2026';

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
