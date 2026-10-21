import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--dr-helga-doustafost--c5056deb/.book';
import Cover from '../../../../../../.claude/.conversations/claude--dr-helga-doustafost--c5056deb/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--dr-helga-doustafost--c5056deb/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--dr-helga-doustafost--c5056deb/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--dr-helga-doustafost--c5056deb/1-conversation';

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
