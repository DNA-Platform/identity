import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--pentagon-ufo-footage-six-sided-object-analysis--392e897c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--pentagon-ufo-footage-six-sided-object-analysis--392e897c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--pentagon-ufo-footage-six-sided-object-analysis--392e897c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--pentagon-ufo-footage-six-sided-object-analysis--392e897c/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--pentagon-ufo-footage-six-sided-object-analysis--392e897c/1-conversation';

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
