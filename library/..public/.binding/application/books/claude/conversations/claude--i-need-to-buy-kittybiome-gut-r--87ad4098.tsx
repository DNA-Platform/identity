import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--i-need-to-buy-kittybiome-gut-r--87ad4098/.book';
import Cover from '../../../../../../.claude/.conversations/claude--i-need-to-buy-kittybiome-gut-r--87ad4098/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--i-need-to-buy-kittybiome-gut-r--87ad4098/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--i-need-to-buy-kittybiome-gut-r--87ad4098/.table';
import March1420261 from '../../../../../../.claude/.conversations/claude--i-need-to-buy-kittybiome-gut-r--87ad4098/1-march-14-2026';
import March1520262 from '../../../../../../.claude/.conversations/claude--i-need-to-buy-kittybiome-gut-r--87ad4098/2-march-15-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March1420261()}
        {March1520262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
