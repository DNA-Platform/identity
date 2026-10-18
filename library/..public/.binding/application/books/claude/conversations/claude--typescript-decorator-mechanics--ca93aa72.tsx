import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--typescript-decorator-mechanics--ca93aa72/.book';
import Cover from '../../../../../../.claude/.conversations/claude--typescript-decorator-mechanics--ca93aa72/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--typescript-decorator-mechanics--ca93aa72/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--typescript-decorator-mechanics--ca93aa72/.table';
import August2620251 from '../../../../../../.claude/.conversations/claude--typescript-decorator-mechanics--ca93aa72/1-august-26-2025';
import August2720252 from '../../../../../../.claude/.conversations/claude--typescript-decorator-mechanics--ca93aa72/2-august-27-2025';
import August2820253 from '../../../../../../.claude/.conversations/claude--typescript-decorator-mechanics--ca93aa72/3-august-28-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August2620251()}
        {August2720252()}
        {August2820253()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
