import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-28-september-2024--f3a2a24f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-28-september-2024--f3a2a24f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-28-september-2024--f3a2a24f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-28-september-2024--f3a2a24f/.table';
import September2820241 from '../../../../../../.claude/.conversations/claude--untitled-28-september-2024--f3a2a24f/1-september-28-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September2820241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
