import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--hedging-geopolitical-oil-disruption-with-us-supply-alternati--957941dd/.book';
import Cover from '../../../../../../.claude/.conversations/claude--hedging-geopolitical-oil-disruption-with-us-supply-alternati--957941dd/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--hedging-geopolitical-oil-disruption-with-us-supply-alternati--957941dd/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--hedging-geopolitical-oil-disruption-with-us-supply-alternati--957941dd/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--hedging-geopolitical-oil-disruption-with-us-supply-alternati--957941dd/1-conversation';

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
