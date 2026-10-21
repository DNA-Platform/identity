import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--russian-custody-and-visitation-enforcement-across-borders--e552fa7d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--russian-custody-and-visitation-enforcement-across-borders--e552fa7d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--russian-custody-and-visitation-enforcement-across-borders--e552fa7d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--russian-custody-and-visitation-enforcement-across-borders--e552fa7d/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--russian-custody-and-visitation-enforcement-across-borders--e552fa7d/1-conversation';

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
