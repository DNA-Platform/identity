import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--pricing-tonx-as-a-closed-end-fund-without-redemption/.book';
import Cover from '../../../../../../.claude/.conversations/claude--pricing-tonx-as-a-closed-end-fund-without-redemption/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--pricing-tonx-as-a-closed-end-fund-without-redemption/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--pricing-tonx-as-a-closed-end-fund-without-redemption/.table';
import February220261 from '../../../../../../.claude/.conversations/claude--pricing-tonx-as-a-closed-end-fund-without-redemption/1-february-2-2026';

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
