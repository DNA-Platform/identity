import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/hedging-geopolitical-oil-disruption-with-us-supply-alternati/.book';
import Cover from '../../../../../../.claude/.conversations/hedging-geopolitical-oil-disruption-with-us-supply-alternati/.cover';
import Synopsis from '../../../../../../.claude/.conversations/hedging-geopolitical-oil-disruption-with-us-supply-alternati/.synopsis';
import Table from '../../../../../../.claude/.conversations/hedging-geopolitical-oil-disruption-with-us-supply-alternati/.table';
import March2620261 from '../../../../../../.claude/.conversations/hedging-geopolitical-oil-disruption-with-us-supply-alternati/1-march-26-2026';
import March2920262 from '../../../../../../.claude/.conversations/hedging-geopolitical-oil-disruption-with-us-supply-alternati/2-march-29-2026';
import April720263 from '../../../../../../.claude/.conversations/hedging-geopolitical-oil-disruption-with-us-supply-alternati/3-april-7-2026';

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
