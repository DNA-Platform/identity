import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--protecting-children-from-psychological-harm-in-abusive-situa--23e95ec1/.book';
import Cover from '../../../../../../.claude/.conversations/claude--protecting-children-from-psychological-harm-in-abusive-situa--23e95ec1/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--protecting-children-from-psychological-harm-in-abusive-situa--23e95ec1/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--protecting-children-from-psychological-harm-in-abusive-situa--23e95ec1/.table';
import January1820261 from '../../../../../../.claude/.conversations/claude--protecting-children-from-psychological-harm-in-abusive-situa--23e95ec1/1-january-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
