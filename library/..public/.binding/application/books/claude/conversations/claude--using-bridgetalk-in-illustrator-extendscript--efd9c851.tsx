import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--using-bridgetalk-in-illustrator-extendscript--efd9c851/.book';
import Cover from '../../../../../../.claude/.conversations/claude--using-bridgetalk-in-illustrator-extendscript--efd9c851/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--using-bridgetalk-in-illustrator-extendscript--efd9c851/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--using-bridgetalk-in-illustrator-extendscript--efd9c851/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--using-bridgetalk-in-illustrator-extendscript--efd9c851/1-conversation';

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
