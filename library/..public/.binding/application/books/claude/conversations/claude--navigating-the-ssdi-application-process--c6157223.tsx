import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--navigating-the-ssdi-application-process--c6157223/.book';
import Cover from '../../../../../../.claude/.conversations/claude--navigating-the-ssdi-application-process--c6157223/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--navigating-the-ssdi-application-process--c6157223/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--navigating-the-ssdi-application-process--c6157223/.table';
import November620241 from '../../../../../../.claude/.conversations/claude--navigating-the-ssdi-application-process--c6157223/1-november-6-2024';
import November720242 from '../../../../../../.claude/.conversations/claude--navigating-the-ssdi-application-process--c6157223/2-november-7-2024';
import March1020253 from '../../../../../../.claude/.conversations/claude--navigating-the-ssdi-application-process--c6157223/3-march-10-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November620241()}
        {November720242()}
        {March1020253()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
