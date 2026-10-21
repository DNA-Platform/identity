import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--monad-labs-tokenomics-and-valuation-problems--769751fe/.book';
import Cover from '../../../../../../.claude/.conversations/claude--monad-labs-tokenomics-and-valuation-problems--769751fe/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--monad-labs-tokenomics-and-valuation-problems--769751fe/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--monad-labs-tokenomics-and-valuation-problems--769751fe/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--monad-labs-tokenomics-and-valuation-problems--769751fe/1-conversation';

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
