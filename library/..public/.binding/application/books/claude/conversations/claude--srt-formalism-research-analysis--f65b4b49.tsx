import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--srt-formalism-research-analysis--f65b4b49/.book';
import Cover from '../../../../../../.claude/.conversations/claude--srt-formalism-research-analysis--f65b4b49/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--srt-formalism-research-analysis--f65b4b49/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--srt-formalism-research-analysis--f65b4b49/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--srt-formalism-research-analysis--f65b4b49/1-conversation';

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
