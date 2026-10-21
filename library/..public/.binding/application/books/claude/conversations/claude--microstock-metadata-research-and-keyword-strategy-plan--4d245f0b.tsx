import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--microstock-metadata-research-and-keyword-strategy-plan--4d245f0b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--microstock-metadata-research-and-keyword-strategy-plan--4d245f0b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--microstock-metadata-research-and-keyword-strategy-plan--4d245f0b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--microstock-metadata-research-and-keyword-strategy-plan--4d245f0b/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--microstock-metadata-research-and-keyword-strategy-plan--4d245f0b/1-conversation';

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
