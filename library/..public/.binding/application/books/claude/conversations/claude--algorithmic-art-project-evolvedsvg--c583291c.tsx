import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--algorithmic-art-project-evolvedsvg--c583291c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--algorithmic-art-project-evolvedsvg--c583291c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--algorithmic-art-project-evolvedsvg--c583291c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--algorithmic-art-project-evolvedsvg--c583291c/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--algorithmic-art-project-evolvedsvg--c583291c/1-conversation';

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
