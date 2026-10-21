import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--normal-body-temperature-and-fever-thresholds-in-children--0f928900/.book';
import Cover from '../../../../../../.claude/.conversations/claude--normal-body-temperature-and-fever-thresholds-in-children--0f928900/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--normal-body-temperature-and-fever-thresholds-in-children--0f928900/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--normal-body-temperature-and-fever-thresholds-in-children--0f928900/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--normal-body-temperature-and-fever-thresholds-in-children--0f928900/1-conversation';

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
