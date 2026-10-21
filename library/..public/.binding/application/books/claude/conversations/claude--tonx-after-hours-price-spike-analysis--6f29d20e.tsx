import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--tonx-after-hours-price-spike-analysis--6f29d20e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--tonx-after-hours-price-spike-analysis--6f29d20e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--tonx-after-hours-price-spike-analysis--6f29d20e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--tonx-after-hours-price-spike-analysis--6f29d20e/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--tonx-after-hours-price-spike-analysis--6f29d20e/1-conversation';

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
