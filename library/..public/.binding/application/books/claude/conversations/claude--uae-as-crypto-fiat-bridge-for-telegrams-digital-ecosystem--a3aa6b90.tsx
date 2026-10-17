import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem--a3aa6b90/.book';
import Cover from '../../../../../../.claude/.conversations/claude--uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem--a3aa6b90/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem--a3aa6b90/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem--a3aa6b90/.table';
import February220261 from '../../../../../../.claude/.conversations/claude--uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem--a3aa6b90/1-february-2-2026';

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
