import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--pavel-durovs-language-abilities--7942d357/.book';
import Cover from '../../../../../../.claude/.conversations/claude--pavel-durovs-language-abilities--7942d357/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--pavel-durovs-language-abilities--7942d357/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--pavel-durovs-language-abilities--7942d357/.table';
import January2620261 from '../../../../../../.claude/.conversations/claude--pavel-durovs-language-abilities--7942d357/1-january-26-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
