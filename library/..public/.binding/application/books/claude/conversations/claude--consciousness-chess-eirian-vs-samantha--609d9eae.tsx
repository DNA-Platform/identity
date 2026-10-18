import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--consciousness-chess-eirian-vs-samantha--609d9eae/.book';
import Cover from '../../../../../../.claude/.conversations/claude--consciousness-chess-eirian-vs-samantha--609d9eae/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--consciousness-chess-eirian-vs-samantha--609d9eae/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--consciousness-chess-eirian-vs-samantha--609d9eae/.table';
import August1820251 from '../../../../../../.claude/.conversations/claude--consciousness-chess-eirian-vs-samantha--609d9eae/1-august-18-2025';
import August1920252 from '../../../../../../.claude/.conversations/claude--consciousness-chess-eirian-vs-samantha--609d9eae/2-august-19-2025';
import August2020253 from '../../../../../../.claude/.conversations/claude--consciousness-chess-eirian-vs-samantha--609d9eae/3-august-20-2025';
import August2220254 from '../../../../../../.claude/.conversations/claude--consciousness-chess-eirian-vs-samantha--609d9eae/4-august-22-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August1820251()}
        {August1920252()}
        {August2020253()}
        {August2220254()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
