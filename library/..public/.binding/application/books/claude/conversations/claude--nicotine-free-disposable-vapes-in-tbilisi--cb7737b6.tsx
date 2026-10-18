import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--nicotine-free-disposable-vapes-in-tbilisi--cb7737b6/.book';
import Cover from '../../../../../../.claude/.conversations/claude--nicotine-free-disposable-vapes-in-tbilisi--cb7737b6/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--nicotine-free-disposable-vapes-in-tbilisi--cb7737b6/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--nicotine-free-disposable-vapes-in-tbilisi--cb7737b6/.table';
import April1920261 from '../../../../../../.claude/.conversations/claude--nicotine-free-disposable-vapes-in-tbilisi--cb7737b6/1-april-19-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April1920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
