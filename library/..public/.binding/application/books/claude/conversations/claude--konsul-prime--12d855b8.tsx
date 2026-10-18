import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--konsul-prime--12d855b8/.book';
import Cover from '../../../../../../.claude/.conversations/claude--konsul-prime--12d855b8/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--konsul-prime--12d855b8/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--konsul-prime--12d855b8/.table';
import October720261 from '../../../../../../.claude/.conversations/claude--konsul-prime--12d855b8/1-october-7-2026';
import October820262 from '../../../../../../.claude/.conversations/claude--konsul-prime--12d855b8/2-october-8-2026';
import October920263 from '../../../../../../.claude/.conversations/claude--konsul-prime--12d855b8/3-october-9-2026';
import October1520264 from '../../../../../../.claude/.conversations/claude--konsul-prime--12d855b8/4-october-15-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October720261()}
        {October820262()}
        {October920263()}
        {October1520264()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
