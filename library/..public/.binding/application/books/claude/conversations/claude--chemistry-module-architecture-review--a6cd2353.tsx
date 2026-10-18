import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--chemistry-module-architecture-review--a6cd2353/.book';
import Cover from '../../../../../../.claude/.conversations/claude--chemistry-module-architecture-review--a6cd2353/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--chemistry-module-architecture-review--a6cd2353/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--chemistry-module-architecture-review--a6cd2353/.table';
import October820251 from '../../../../../../.claude/.conversations/claude--chemistry-module-architecture-review--a6cd2353/1-october-8-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October820251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
