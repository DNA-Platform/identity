import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--identifying-satoshi-nakamoto-through-technical-fingerprints--951d18a9/.book';
import Cover from '../../../../../../.claude/.conversations/claude--identifying-satoshi-nakamoto-through-technical-fingerprints--951d18a9/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--identifying-satoshi-nakamoto-through-technical-fingerprints--951d18a9/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--identifying-satoshi-nakamoto-through-technical-fingerprints--951d18a9/.table';
import January1120261 from '../../../../../../.claude/.conversations/claude--identifying-satoshi-nakamoto-through-technical-fingerprints--951d18a9/1-january-11-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
