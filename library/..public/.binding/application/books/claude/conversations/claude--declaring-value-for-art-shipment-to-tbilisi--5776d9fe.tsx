import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--declaring-value-for-art-shipment-to-tbilisi--5776d9fe/.book';
import Cover from '../../../../../../.claude/.conversations/claude--declaring-value-for-art-shipment-to-tbilisi--5776d9fe/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--declaring-value-for-art-shipment-to-tbilisi--5776d9fe/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--declaring-value-for-art-shipment-to-tbilisi--5776d9fe/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--declaring-value-for-art-shipment-to-tbilisi--5776d9fe/1-conversation';

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
