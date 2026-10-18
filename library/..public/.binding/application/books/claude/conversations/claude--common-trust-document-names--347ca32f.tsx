import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--common-trust-document-names--347ca32f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--common-trust-document-names--347ca32f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--common-trust-document-names--347ca32f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--common-trust-document-names--347ca32f/.table';
import November1120241 from '../../../../../../.claude/.conversations/claude--common-trust-document-names--347ca32f/1-november-11-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November1120241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
