import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--exploring-chemistry-ts-framework--814ba67a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--exploring-chemistry-ts-framework--814ba67a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--exploring-chemistry-ts-framework--814ba67a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--exploring-chemistry-ts-framework--814ba67a/.table';
import October2320251 from '../../../../../../.claude/.conversations/claude--exploring-chemistry-ts-framework--814ba67a/1-october-23-2025';
import October2420252 from '../../../../../../.claude/.conversations/claude--exploring-chemistry-ts-framework--814ba67a/2-october-24-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October2320251()}
        {October2420252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
