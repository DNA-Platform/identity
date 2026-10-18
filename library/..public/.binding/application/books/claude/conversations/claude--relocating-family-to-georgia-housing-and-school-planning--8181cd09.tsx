import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--relocating-family-to-georgia-housing-and-school-planning--8181cd09/.book';
import Cover from '../../../../../../.claude/.conversations/claude--relocating-family-to-georgia-housing-and-school-planning--8181cd09/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--relocating-family-to-georgia-housing-and-school-planning--8181cd09/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--relocating-family-to-georgia-housing-and-school-planning--8181cd09/.table';
import January1420261 from '../../../../../../.claude/.conversations/claude--relocating-family-to-georgia-housing-and-school-planning--8181cd09/1-january-14-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
