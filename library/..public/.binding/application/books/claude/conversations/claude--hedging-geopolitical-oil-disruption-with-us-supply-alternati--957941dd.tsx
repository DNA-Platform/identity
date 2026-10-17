import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--hedging-geopolitical-oil-disruption-with-us-supply-alternati--957941dd/.book';
import Cover from '../../../../../../.claude/.conversations/claude--hedging-geopolitical-oil-disruption-with-us-supply-alternati--957941dd/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--hedging-geopolitical-oil-disruption-with-us-supply-alternati--957941dd/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--hedging-geopolitical-oil-disruption-with-us-supply-alternati--957941dd/.table';
import March2620261 from '../../../../../../.claude/.conversations/claude--hedging-geopolitical-oil-disruption-with-us-supply-alternati--957941dd/1-march-26-2026';
import March2920262 from '../../../../../../.claude/.conversations/claude--hedging-geopolitical-oil-disruption-with-us-supply-alternati--957941dd/2-march-29-2026';
import April720263 from '../../../../../../.claude/.conversations/claude--hedging-geopolitical-oil-disruption-with-us-supply-alternati--957941dd/3-april-7-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2620261()}
        {March2920262()}
        {April720263()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
