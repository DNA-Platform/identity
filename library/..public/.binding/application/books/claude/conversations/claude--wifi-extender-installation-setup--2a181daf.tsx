import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--wifi-extender-installation-setup--2a181daf/.book';
import Cover from '../../../../../../.claude/.conversations/claude--wifi-extender-installation-setup--2a181daf/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--wifi-extender-installation-setup--2a181daf/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--wifi-extender-installation-setup--2a181daf/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--wifi-extender-installation-setup--2a181daf/1-conversation';

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
