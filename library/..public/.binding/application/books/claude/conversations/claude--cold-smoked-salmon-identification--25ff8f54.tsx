import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--cold-smoked-salmon-identification--25ff8f54/.book';
import Cover from '../../../../../../.claude/.conversations/claude--cold-smoked-salmon-identification--25ff8f54/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--cold-smoked-salmon-identification--25ff8f54/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--cold-smoked-salmon-identification--25ff8f54/.table';
import March2920261 from '../../../../../../.claude/.conversations/claude--cold-smoked-salmon-identification--25ff8f54/1-march-29-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
