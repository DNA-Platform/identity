import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem--a3aa6b90/.book';
import Cover from '../../../../../../.claude/.conversations/claude--uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem--a3aa6b90/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem--a3aa6b90/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem--a3aa6b90/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem--a3aa6b90/1-conversation';

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
