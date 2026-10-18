import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--getting-married-in-georgia-this-saturday--ca6d5c76/.book';
import Cover from '../../../../../../.claude/.conversations/claude--getting-married-in-georgia-this-saturday--ca6d5c76/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--getting-married-in-georgia-this-saturday--ca6d5c76/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--getting-married-in-georgia-this-saturday--ca6d5c76/.table';
import January2020261 from '../../../../../../.claude/.conversations/claude--getting-married-in-georgia-this-saturday--ca6d5c76/1-january-20-2026';
import January2620262 from '../../../../../../.claude/.conversations/claude--getting-married-in-georgia-this-saturday--ca6d5c76/2-january-26-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2020261()}
        {January2620262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
