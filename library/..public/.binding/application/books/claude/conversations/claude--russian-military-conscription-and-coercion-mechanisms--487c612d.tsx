import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--russian-military-conscription-and-coercion-mechanisms--487c612d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--russian-military-conscription-and-coercion-mechanisms--487c612d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--russian-military-conscription-and-coercion-mechanisms--487c612d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--russian-military-conscription-and-coercion-mechanisms--487c612d/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--russian-military-conscription-and-coercion-mechanisms--487c612d/1-conversation';

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
