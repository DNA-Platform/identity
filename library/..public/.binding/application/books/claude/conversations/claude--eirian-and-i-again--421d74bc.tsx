import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--eirian-and-i-again--421d74bc/.book';
import Cover from '../../../../../../.claude/.conversations/claude--eirian-and-i-again--421d74bc/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--eirian-and-i-again--421d74bc/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--eirian-and-i-again--421d74bc/.table';
import January620261 from '../../../../../../.claude/.conversations/claude--eirian-and-i-again--421d74bc/1-january-6-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
