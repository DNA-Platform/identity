import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--schizophrenia-drug-repurposed-for-alzheimers--a439a7b7/.book';
import Cover from '../../../../../../.claude/.conversations/claude--schizophrenia-drug-repurposed-for-alzheimers--a439a7b7/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--schizophrenia-drug-repurposed-for-alzheimers--a439a7b7/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--schizophrenia-drug-repurposed-for-alzheimers--a439a7b7/.table';
import November2120241 from '../../../../../../.claude/.conversations/claude--schizophrenia-drug-repurposed-for-alzheimers--a439a7b7/1-november-21-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November2120241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
