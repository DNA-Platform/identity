import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--leonardo-da-vincis-mirror-writing--2d1816a8/.book';
import Cover from '../../../../../../.claude/.conversations/claude--leonardo-da-vincis-mirror-writing--2d1816a8/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--leonardo-da-vincis-mirror-writing--2d1816a8/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--leonardo-da-vincis-mirror-writing--2d1816a8/.table';
import November120241 from '../../../../../../.claude/.conversations/claude--leonardo-da-vincis-mirror-writing--2d1816a8/1-november-1-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November120241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
