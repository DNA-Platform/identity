import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--shutterstock-description-character-limit-changes--9997e2f6/.book';
import Cover from '../../../../../../.claude/.conversations/claude--shutterstock-description-character-limit-changes--9997e2f6/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--shutterstock-description-character-limit-changes--9997e2f6/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--shutterstock-description-character-limit-changes--9997e2f6/.table';
import March820261 from '../../../../../../.claude/.conversations/claude--shutterstock-description-character-limit-changes--9997e2f6/1-march-8-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
