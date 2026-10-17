import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--anonymous-cryptographers--0c566126/.book';
import Cover from '../../../../../../.claude/.conversations/claude--anonymous-cryptographers--0c566126/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--anonymous-cryptographers--0c566126/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--anonymous-cryptographers--0c566126/.table';
import January1820261 from '../../../../../../.claude/.conversations/claude--anonymous-cryptographers--0c566126/1-january-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
