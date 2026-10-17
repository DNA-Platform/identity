import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/telegrams-cryptocurrency-infrastructure-play/.book';
import Cover from '../../../../../../.claude/.conversations/telegrams-cryptocurrency-infrastructure-play/.cover';
import Synopsis from '../../../../../../.claude/.conversations/telegrams-cryptocurrency-infrastructure-play/.synopsis';
import Table from '../../../../../../.claude/.conversations/telegrams-cryptocurrency-infrastructure-play/.table';
import February220261 from '../../../../../../.claude/.conversations/telegrams-cryptocurrency-infrastructure-play/1-february-2-2026';

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
