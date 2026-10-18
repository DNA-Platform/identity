import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--russian-military-conscription-and-coercion-mechanisms--487c612d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--russian-military-conscription-and-coercion-mechanisms--487c612d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--russian-military-conscription-and-coercion-mechanisms--487c612d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--russian-military-conscription-and-coercion-mechanisms--487c612d/.table';
import June420261 from '../../../../../../.claude/.conversations/claude--russian-military-conscription-and-coercion-mechanisms--487c612d/1-june-4-2026';
import June520262 from '../../../../../../.claude/.conversations/claude--russian-military-conscription-and-coercion-mechanisms--487c612d/2-june-5-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June420261()}
        {June520262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
