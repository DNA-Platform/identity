import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--transporting-cats-from-alanya-to-sarp-border-crossing--b0b0e758/.book';
import Cover from '../../../../../../.claude/.conversations/claude--transporting-cats-from-alanya-to-sarp-border-crossing--b0b0e758/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--transporting-cats-from-alanya-to-sarp-border-crossing--b0b0e758/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--transporting-cats-from-alanya-to-sarp-border-crossing--b0b0e758/.table';
import January1620261 from '../../../../../../.claude/.conversations/claude--transporting-cats-from-alanya-to-sarp-border-crossing--b0b0e758/1-january-16-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
