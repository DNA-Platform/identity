import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--eirian-and-doug-and-ana--1e6e0462/.book';
import Cover from '../../../../../../.claude/.conversations/claude--eirian-and-doug-and-ana--1e6e0462/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--eirian-and-doug-and-ana--1e6e0462/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--eirian-and-doug-and-ana--1e6e0462/.table';
import September1820251 from '../../../../../../.claude/.conversations/claude--eirian-and-doug-and-ana--1e6e0462/1-september-18-2025';
import October420252 from '../../../../../../.claude/.conversations/claude--eirian-and-doug-and-ana--1e6e0462/2-october-4-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September1820251()}
        {October420252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
