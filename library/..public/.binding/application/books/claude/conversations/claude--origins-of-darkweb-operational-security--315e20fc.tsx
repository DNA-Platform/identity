import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--origins-of-darkweb-operational-security--315e20fc/.book';
import Cover from '../../../../../../.claude/.conversations/claude--origins-of-darkweb-operational-security--315e20fc/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--origins-of-darkweb-operational-security--315e20fc/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--origins-of-darkweb-operational-security--315e20fc/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--origins-of-darkweb-operational-security--315e20fc/1-conversation';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
