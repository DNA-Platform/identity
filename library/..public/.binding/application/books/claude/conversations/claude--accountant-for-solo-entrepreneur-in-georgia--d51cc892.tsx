import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--accountant-for-solo-entrepreneur-in-georgia--d51cc892/.book';
import Cover from '../../../../../../.claude/.conversations/claude--accountant-for-solo-entrepreneur-in-georgia--d51cc892/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--accountant-for-solo-entrepreneur-in-georgia--d51cc892/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--accountant-for-solo-entrepreneur-in-georgia--d51cc892/.table';
import June3020261 from '../../../../../../.claude/.conversations/claude--accountant-for-solo-entrepreneur-in-georgia--d51cc892/1-june-30-2026';
import July120262 from '../../../../../../.claude/.conversations/claude--accountant-for-solo-entrepreneur-in-georgia--d51cc892/2-july-1-2026';
import July220263 from '../../../../../../.claude/.conversations/claude--accountant-for-solo-entrepreneur-in-georgia--d51cc892/3-july-2-2026';
import July320264 from '../../../../../../.claude/.conversations/claude--accountant-for-solo-entrepreneur-in-georgia--d51cc892/4-july-3-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June3020261()}
        {July120262()}
        {July220263()}
        {July320264()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
