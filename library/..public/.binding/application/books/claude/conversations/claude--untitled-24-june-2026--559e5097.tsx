import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-24-june-2026--559e5097/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-24-june-2026--559e5097/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-24-june-2026--559e5097/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-24-june-2026--559e5097/.table';
import June2420261 from '../../../../../../.claude/.conversations/claude--untitled-24-june-2026--559e5097/1-june-24-2026';
import June2520262 from '../../../../../../.claude/.conversations/claude--untitled-24-june-2026--559e5097/2-june-25-2026';
import June2620263 from '../../../../../../.claude/.conversations/claude--untitled-24-june-2026--559e5097/3-june-26-2026';
import June2720264 from '../../../../../../.claude/.conversations/claude--untitled-24-june-2026--559e5097/4-june-27-2026';
import June2820265 from '../../../../../../.claude/.conversations/claude--untitled-24-june-2026--559e5097/5-june-28-2026';
import July520266 from '../../../../../../.claude/.conversations/claude--untitled-24-june-2026--559e5097/6-july-5-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June2420261()}
        {June2520262()}
        {June2620263()}
        {June2720264()}
        {June2820265()}
        {July520266()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
