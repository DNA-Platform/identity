import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--hp-printer-alignment-troubleshooting-and-setup--3dd9089e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--hp-printer-alignment-troubleshooting-and-setup--3dd9089e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--hp-printer-alignment-troubleshooting-and-setup--3dd9089e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--hp-printer-alignment-troubleshooting-and-setup--3dd9089e/.table';
import April520261 from '../../../../../../.claude/.conversations/claude--hp-printer-alignment-troubleshooting-and-setup--3dd9089e/1-april-5-2026';
import April1420262 from '../../../../../../.claude/.conversations/claude--hp-printer-alignment-troubleshooting-and-setup--3dd9089e/2-april-14-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April520261()}
        {April1420262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
