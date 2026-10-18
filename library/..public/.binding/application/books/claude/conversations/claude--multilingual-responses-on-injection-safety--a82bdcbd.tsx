import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--multilingual-responses-on-injection-safety--a82bdcbd/.book';
import Cover from '../../../../../../.claude/.conversations/claude--multilingual-responses-on-injection-safety--a82bdcbd/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--multilingual-responses-on-injection-safety--a82bdcbd/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--multilingual-responses-on-injection-safety--a82bdcbd/.table';
import August2820261 from '../../../../../../.claude/.conversations/claude--multilingual-responses-on-injection-safety--a82bdcbd/1-august-28-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August2820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
