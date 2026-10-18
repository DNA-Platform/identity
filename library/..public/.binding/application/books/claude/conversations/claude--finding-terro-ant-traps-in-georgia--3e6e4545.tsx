import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--finding-terro-ant-traps-in-georgia--3e6e4545/.book';
import Cover from '../../../../../../.claude/.conversations/claude--finding-terro-ant-traps-in-georgia--3e6e4545/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--finding-terro-ant-traps-in-georgia--3e6e4545/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--finding-terro-ant-traps-in-georgia--3e6e4545/.table';
import March2920261 from '../../../../../../.claude/.conversations/claude--finding-terro-ant-traps-in-georgia--3e6e4545/1-march-29-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
