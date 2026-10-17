import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--adi-and-ton-foundation-staking-integration/.book';
import Cover from '../../../../../../.claude/.conversations/claude--adi-and-ton-foundation-staking-integration/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--adi-and-ton-foundation-staking-integration/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--adi-and-ton-foundation-staking-integration/.table';
import January1320261 from '../../../../../../.claude/.conversations/claude--adi-and-ton-foundation-staking-integration/1-january-13-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
