import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--georgias-nicotine-cap-for-vapes--f7847680/.book';
import Cover from '../../../../../../.claude/.conversations/claude--georgias-nicotine-cap-for-vapes--f7847680/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--georgias-nicotine-cap-for-vapes--f7847680/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--georgias-nicotine-cap-for-vapes--f7847680/.table';
import February1520261 from '../../../../../../.claude/.conversations/claude--georgias-nicotine-cap-for-vapes--f7847680/1-february-15-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
