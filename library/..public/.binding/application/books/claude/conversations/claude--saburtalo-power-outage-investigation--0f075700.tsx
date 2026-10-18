import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--saburtalo-power-outage-investigation--0f075700/.book';
import Cover from '../../../../../../.claude/.conversations/claude--saburtalo-power-outage-investigation--0f075700/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--saburtalo-power-outage-investigation--0f075700/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--saburtalo-power-outage-investigation--0f075700/.table';
import July2320261 from '../../../../../../.claude/.conversations/claude--saburtalo-power-outage-investigation--0f075700/1-july-23-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July2320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
