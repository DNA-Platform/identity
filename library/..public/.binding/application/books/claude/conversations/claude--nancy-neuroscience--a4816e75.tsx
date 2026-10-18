import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--nancy-neuroscience--a4816e75/.book';
import Cover from '../../../../../../.claude/.conversations/claude--nancy-neuroscience--a4816e75/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--nancy-neuroscience--a4816e75/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--nancy-neuroscience--a4816e75/.table';
import June2320261 from '../../../../../../.claude/.conversations/claude--nancy-neuroscience--a4816e75/1-june-23-2026';
import June2820262 from '../../../../../../.claude/.conversations/claude--nancy-neuroscience--a4816e75/2-june-28-2026';
import June2920263 from '../../../../../../.claude/.conversations/claude--nancy-neuroscience--a4816e75/3-june-29-2026';
import June3020264 from '../../../../../../.claude/.conversations/claude--nancy-neuroscience--a4816e75/4-june-30-2026';
import July520265 from '../../../../../../.claude/.conversations/claude--nancy-neuroscience--a4816e75/5-july-5-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June2320261()}
        {June2820262()}
        {June2920263()}
        {June3020264()}
        {July520265()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
