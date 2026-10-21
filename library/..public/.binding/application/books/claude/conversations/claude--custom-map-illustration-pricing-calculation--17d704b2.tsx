import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--custom-map-illustration-pricing-calculation--17d704b2/.book';
import Cover from '../../../../../../.claude/.conversations/claude--custom-map-illustration-pricing-calculation--17d704b2/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--custom-map-illustration-pricing-calculation--17d704b2/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--custom-map-illustration-pricing-calculation--17d704b2/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--custom-map-illustration-pricing-calculation--17d704b2/1-conversation';

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
