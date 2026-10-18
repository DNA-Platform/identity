import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--sonnet-4-5-godel-and-goldbach--c42597f2/.book';
import Cover from '../../../../../../.claude/.conversations/claude--sonnet-4-5-godel-and-goldbach--c42597f2/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--sonnet-4-5-godel-and-goldbach--c42597f2/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--sonnet-4-5-godel-and-goldbach--c42597f2/.table';
import October1220251 from '../../../../../../.claude/.conversations/claude--sonnet-4-5-godel-and-goldbach--c42597f2/1-october-12-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October1220251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
