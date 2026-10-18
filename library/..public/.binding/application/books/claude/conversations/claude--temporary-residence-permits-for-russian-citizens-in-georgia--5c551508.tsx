import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--temporary-residence-permits-for-russian-citizens-in-georgia--5c551508/.book';
import Cover from '../../../../../../.claude/.conversations/claude--temporary-residence-permits-for-russian-citizens-in-georgia--5c551508/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--temporary-residence-permits-for-russian-citizens-in-georgia--5c551508/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--temporary-residence-permits-for-russian-citizens-in-georgia--5c551508/.table';
import January1420261 from '../../../../../../.claude/.conversations/claude--temporary-residence-permits-for-russian-citizens-in-georgia--5c551508/1-january-14-2026';

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
