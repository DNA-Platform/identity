import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--chemistry-module-design-review--0cd2eb99/.book';
import Cover from '../../../../../../.claude/.conversations/claude--chemistry-module-design-review--0cd2eb99/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--chemistry-module-design-review--0cd2eb99/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--chemistry-module-design-review--0cd2eb99/.table';
import October2820251 from '../../../../../../.claude/.conversations/claude--chemistry-module-design-review--0cd2eb99/1-october-28-2025';
import October2920252 from '../../../../../../.claude/.conversations/claude--chemistry-module-design-review--0cd2eb99/2-october-29-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October2820251()}
        {October2920252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
