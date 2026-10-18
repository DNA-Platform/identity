import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--moving-company-packing-services-in-alanya--153e0836/.book';
import Cover from '../../../../../../.claude/.conversations/claude--moving-company-packing-services-in-alanya--153e0836/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--moving-company-packing-services-in-alanya--153e0836/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--moving-company-packing-services-in-alanya--153e0836/.table';
import February1120261 from '../../../../../../.claude/.conversations/claude--moving-company-packing-services-in-alanya--153e0836/1-february-11-2026';
import February1220262 from '../../../../../../.claude/.conversations/claude--moving-company-packing-services-in-alanya--153e0836/2-february-12-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1120261()}
        {February1220262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
