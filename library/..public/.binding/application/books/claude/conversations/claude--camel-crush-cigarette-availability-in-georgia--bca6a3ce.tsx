import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--camel-crush-cigarette-availability-in-georgia--bca6a3ce/.book';
import Cover from '../../../../../../.claude/.conversations/claude--camel-crush-cigarette-availability-in-georgia--bca6a3ce/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--camel-crush-cigarette-availability-in-georgia--bca6a3ce/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--camel-crush-cigarette-availability-in-georgia--bca6a3ce/.table';
import February220261 from '../../../../../../.claude/.conversations/claude--camel-crush-cigarette-availability-in-georgia--bca6a3ce/1-february-2-2026';

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
