import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--identifying-the-correct-divorce-certificate-for-tulsi-weddin--c3eae23d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--identifying-the-correct-divorce-certificate-for-tulsi-weddin--c3eae23d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--identifying-the-correct-divorce-certificate-for-tulsi-weddin--c3eae23d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--identifying-the-correct-divorce-certificate-for-tulsi-weddin--c3eae23d/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--identifying-the-correct-divorce-certificate-for-tulsi-weddin--c3eae23d/1-conversation';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
