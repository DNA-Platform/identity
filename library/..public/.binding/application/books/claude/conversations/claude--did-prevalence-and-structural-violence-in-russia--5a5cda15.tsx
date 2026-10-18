import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--did-prevalence-and-structural-violence-in-russia--5a5cda15/.book';
import Cover from '../../../../../../.claude/.conversations/claude--did-prevalence-and-structural-violence-in-russia--5a5cda15/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--did-prevalence-and-structural-violence-in-russia--5a5cda15/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--did-prevalence-and-structural-violence-in-russia--5a5cda15/.table';
import February320261 from '../../../../../../.claude/.conversations/claude--did-prevalence-and-structural-violence-in-russia--5a5cda15/1-february-3-2026';
import February420262 from '../../../../../../.claude/.conversations/claude--did-prevalence-and-structural-violence-in-russia--5a5cda15/2-february-4-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February320261()}
        {February420262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
