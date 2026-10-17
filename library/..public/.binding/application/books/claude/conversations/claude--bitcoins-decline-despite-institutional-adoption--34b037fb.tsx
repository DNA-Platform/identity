import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--bitcoins-decline-despite-institutional-adoption--34b037fb/.book';
import Cover from '../../../../../../.claude/.conversations/claude--bitcoins-decline-despite-institutional-adoption--34b037fb/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--bitcoins-decline-despite-institutional-adoption--34b037fb/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--bitcoins-decline-despite-institutional-adoption--34b037fb/.table';
import July220261 from '../../../../../../.claude/.conversations/claude--bitcoins-decline-despite-institutional-adoption--34b037fb/1-july-2-2026';

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
