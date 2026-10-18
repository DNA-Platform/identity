import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--finding-voice-messages-in-telegram--738c14df/.book';
import Cover from '../../../../../../.claude/.conversations/claude--finding-voice-messages-in-telegram--738c14df/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--finding-voice-messages-in-telegram--738c14df/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--finding-voice-messages-in-telegram--738c14df/.table';
import November220241 from '../../../../../../.claude/.conversations/claude--finding-voice-messages-in-telegram--738c14df/1-november-2-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November220241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
