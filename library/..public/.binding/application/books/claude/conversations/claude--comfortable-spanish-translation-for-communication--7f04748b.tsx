import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--comfortable-spanish-translation-for-communication--7f04748b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--comfortable-spanish-translation-for-communication--7f04748b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--comfortable-spanish-translation-for-communication--7f04748b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--comfortable-spanish-translation-for-communication--7f04748b/.table';
import October2320241 from '../../../../../../.claude/.conversations/claude--comfortable-spanish-translation-for-communication--7f04748b/1-october-23-2024';
import October2420242 from '../../../../../../.claude/.conversations/claude--comfortable-spanish-translation-for-communication--7f04748b/2-october-24-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October2320241()}
        {October2420242()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
