import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--screenshot-translation-request--be4414e7/.book';
import Cover from '../../../../../../.claude/.conversations/claude--screenshot-translation-request--be4414e7/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--screenshot-translation-request--be4414e7/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--screenshot-translation-request--be4414e7/.table';
import March2420261 from '../../../../../../.claude/.conversations/claude--screenshot-translation-request--be4414e7/1-march-24-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
