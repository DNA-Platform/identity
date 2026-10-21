import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--moving-luggage-from-turkey-to-georgia-via-cargo--fe3171cf/.book';
import Cover from '../../../../../../.claude/.conversations/claude--moving-luggage-from-turkey-to-georgia-via-cargo--fe3171cf/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--moving-luggage-from-turkey-to-georgia-via-cargo--fe3171cf/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--moving-luggage-from-turkey-to-georgia-via-cargo--fe3171cf/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--moving-luggage-from-turkey-to-georgia-via-cargo--fe3171cf/1-conversation';

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
