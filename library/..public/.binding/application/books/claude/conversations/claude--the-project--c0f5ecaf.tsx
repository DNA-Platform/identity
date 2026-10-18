import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--the-project--c0f5ecaf/.book';
import Cover from '../../../../../../.claude/.conversations/claude--the-project--c0f5ecaf/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--the-project--c0f5ecaf/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--the-project--c0f5ecaf/.table';
import September1320261 from '../../../../../../.claude/.conversations/claude--the-project--c0f5ecaf/1-september-13-2026';
import September1420262 from '../../../../../../.claude/.conversations/claude--the-project--c0f5ecaf/2-september-14-2026';
import September1520263 from '../../../../../../.claude/.conversations/claude--the-project--c0f5ecaf/3-september-15-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September1320261()}
        {September1420262()}
        {September1520263()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
