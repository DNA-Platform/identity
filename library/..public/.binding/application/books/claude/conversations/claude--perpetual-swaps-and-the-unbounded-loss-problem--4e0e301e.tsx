import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--perpetual-swaps-and-the-unbounded-loss-problem--4e0e301e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--perpetual-swaps-and-the-unbounded-loss-problem--4e0e301e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--perpetual-swaps-and-the-unbounded-loss-problem--4e0e301e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--perpetual-swaps-and-the-unbounded-loss-problem--4e0e301e/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--perpetual-swaps-and-the-unbounded-loss-problem--4e0e301e/1-conversation';

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
