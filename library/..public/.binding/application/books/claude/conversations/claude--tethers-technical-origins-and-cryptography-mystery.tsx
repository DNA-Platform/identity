import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--tethers-technical-origins-and-cryptography-mystery/.book';
import Cover from '../../../../../../.claude/.conversations/claude--tethers-technical-origins-and-cryptography-mystery/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--tethers-technical-origins-and-cryptography-mystery/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--tethers-technical-origins-and-cryptography-mystery/.table';
import January3020261 from '../../../../../../.claude/.conversations/claude--tethers-technical-origins-and-cryptography-mystery/1-january-30-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January3020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
