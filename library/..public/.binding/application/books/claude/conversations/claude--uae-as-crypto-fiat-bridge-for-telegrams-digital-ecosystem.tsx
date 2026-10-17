import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem/.book';
import Cover from '../../../../../../.claude/.conversations/claude--uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem/.table';
import February220261 from '../../../../../../.claude/.conversations/claude--uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem/1-february-2-2026';

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
