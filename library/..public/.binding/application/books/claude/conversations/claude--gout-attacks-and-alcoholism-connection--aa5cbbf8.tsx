import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--gout-attacks-and-alcoholism-connection--aa5cbbf8/.book';
import Cover from '../../../../../../.claude/.conversations/claude--gout-attacks-and-alcoholism-connection--aa5cbbf8/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--gout-attacks-and-alcoholism-connection--aa5cbbf8/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--gout-attacks-and-alcoholism-connection--aa5cbbf8/.table';
import January2020261 from '../../../../../../.claude/.conversations/claude--gout-attacks-and-alcoholism-connection--aa5cbbf8/1-january-20-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
