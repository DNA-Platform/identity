import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--p-equals-np-arguments-barriers-and-cryptographic-implication--212ee355/.book';
import Cover from '../../../../../../.claude/.conversations/claude--p-equals-np-arguments-barriers-and-cryptographic-implication--212ee355/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--p-equals-np-arguments-barriers-and-cryptographic-implication--212ee355/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--p-equals-np-arguments-barriers-and-cryptographic-implication--212ee355/.table';
import June2120261 from '../../../../../../.claude/.conversations/claude--p-equals-np-arguments-barriers-and-cryptographic-implication--212ee355/1-june-21-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June2120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
