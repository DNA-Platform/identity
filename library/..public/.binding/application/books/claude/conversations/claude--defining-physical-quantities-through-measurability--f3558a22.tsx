import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--defining-physical-quantities-through-measurability--f3558a22/.book';
import Cover from '../../../../../../.claude/.conversations/claude--defining-physical-quantities-through-measurability--f3558a22/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--defining-physical-quantities-through-measurability--f3558a22/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--defining-physical-quantities-through-measurability--f3558a22/.table';
import January1120251 from '../../../../../../.claude/.conversations/claude--defining-physical-quantities-through-measurability--f3558a22/1-january-11-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1120251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
