import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--contrado-uk-alternative-to-spoonflower--1177f778/.book';
import Cover from '../../../../../../.claude/.conversations/claude--contrado-uk-alternative-to-spoonflower--1177f778/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--contrado-uk-alternative-to-spoonflower--1177f778/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--contrado-uk-alternative-to-spoonflower--1177f778/.table';
import February2020261 from '../../../../../../.claude/.conversations/claude--contrado-uk-alternative-to-spoonflower--1177f778/1-february-20-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February2020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
