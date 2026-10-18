import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--chemistry-framework-typescript-analysis--60bd16f3/.book';
import Cover from '../../../../../../.claude/.conversations/claude--chemistry-framework-typescript-analysis--60bd16f3/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--chemistry-framework-typescript-analysis--60bd16f3/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--chemistry-framework-typescript-analysis--60bd16f3/.table';
import October2420251 from '../../../../../../.claude/.conversations/claude--chemistry-framework-typescript-analysis--60bd16f3/1-october-24-2025';
import October2520252 from '../../../../../../.claude/.conversations/claude--chemistry-framework-typescript-analysis--60bd16f3/2-october-25-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October2420251()}
        {October2520252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
