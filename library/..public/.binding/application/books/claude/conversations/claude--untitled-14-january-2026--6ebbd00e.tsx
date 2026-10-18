import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-14-january-2026--6ebbd00e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-14-january-2026--6ebbd00e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-14-january-2026--6ebbd00e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-14-january-2026--6ebbd00e/.table';
import January1420261 from '../../../../../../.claude/.conversations/claude--untitled-14-january-2026--6ebbd00e/1-january-14-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
