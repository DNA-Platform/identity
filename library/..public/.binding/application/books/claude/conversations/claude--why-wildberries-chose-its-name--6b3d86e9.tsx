import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--why-wildberries-chose-its-name--6b3d86e9/.book';
import Cover from '../../../../../../.claude/.conversations/claude--why-wildberries-chose-its-name--6b3d86e9/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--why-wildberries-chose-its-name--6b3d86e9/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--why-wildberries-chose-its-name--6b3d86e9/.table';
import February220261 from '../../../../../../.claude/.conversations/claude--why-wildberries-chose-its-name--6b3d86e9/1-february-2-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
