import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--extra-ge-app-english-language-support--0786f8ea/.book';
import Cover from '../../../../../../.claude/.conversations/claude--extra-ge-app-english-language-support--0786f8ea/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--extra-ge-app-english-language-support--0786f8ea/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--extra-ge-app-english-language-support--0786f8ea/.table';
import February1920261 from '../../../../../../.claude/.conversations/claude--extra-ge-app-english-language-support--0786f8ea/1-february-19-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
