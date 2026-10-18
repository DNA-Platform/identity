import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--chemistry-framework-design-exploration--e4993df3/.book';
import Cover from '../../../../../../.claude/.conversations/claude--chemistry-framework-design-exploration--e4993df3/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--chemistry-framework-design-exploration--e4993df3/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--chemistry-framework-design-exploration--e4993df3/.table';
import October1820251 from '../../../../../../.claude/.conversations/claude--chemistry-framework-design-exploration--e4993df3/1-october-18-2025';
import October1920252 from '../../../../../../.claude/.conversations/claude--chemistry-framework-design-exploration--e4993df3/2-october-19-2025';
import October2020253 from '../../../../../../.claude/.conversations/claude--chemistry-framework-design-exploration--e4993df3/3-october-20-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October1820251()}
        {October1920252()}
        {October2020253()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
