import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--alisa-surveillance-risks-and-russian-state-data-sharing--06c9642b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--alisa-surveillance-risks-and-russian-state-data-sharing--06c9642b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--alisa-surveillance-risks-and-russian-state-data-sharing--06c9642b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--alisa-surveillance-risks-and-russian-state-data-sharing--06c9642b/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--alisa-surveillance-risks-and-russian-state-data-sharing--06c9642b/1-conversation';

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
