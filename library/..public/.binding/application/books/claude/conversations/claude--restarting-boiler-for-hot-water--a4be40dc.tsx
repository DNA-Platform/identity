import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--restarting-boiler-for-hot-water--a4be40dc/.book';
import Cover from '../../../../../../.claude/.conversations/claude--restarting-boiler-for-hot-water--a4be40dc/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--restarting-boiler-for-hot-water--a4be40dc/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--restarting-boiler-for-hot-water--a4be40dc/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--restarting-boiler-for-hot-water--a4be40dc/1-conversation';

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
