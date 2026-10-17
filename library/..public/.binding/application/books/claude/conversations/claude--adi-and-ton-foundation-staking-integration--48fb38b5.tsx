import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--adi-and-ton-foundation-staking-integration--48fb38b5/.book';
import Cover from '../../../../../../.claude/.conversations/claude--adi-and-ton-foundation-staking-integration--48fb38b5/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--adi-and-ton-foundation-staking-integration--48fb38b5/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--adi-and-ton-foundation-staking-integration--48fb38b5/.table';
import January1320261 from '../../../../../../.claude/.conversations/claude--adi-and-ton-foundation-staking-integration--48fb38b5/1-january-13-2026';

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
