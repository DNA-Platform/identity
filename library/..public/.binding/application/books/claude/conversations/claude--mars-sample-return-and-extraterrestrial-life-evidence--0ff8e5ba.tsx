import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--mars-sample-return-and-extraterrestrial-life-evidence--0ff8e5ba/.book';
import Cover from '../../../../../../.claude/.conversations/claude--mars-sample-return-and-extraterrestrial-life-evidence--0ff8e5ba/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--mars-sample-return-and-extraterrestrial-life-evidence--0ff8e5ba/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--mars-sample-return-and-extraterrestrial-life-evidence--0ff8e5ba/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--mars-sample-return-and-extraterrestrial-life-evidence--0ff8e5ba/1-conversation';

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
