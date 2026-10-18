import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--canadian-map-reconstruction--9cfae3e9/.book';
import Cover from '../../../../../../.claude/.conversations/claude--canadian-map-reconstruction--9cfae3e9/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--canadian-map-reconstruction--9cfae3e9/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--canadian-map-reconstruction--9cfae3e9/.table';
import September220251 from '../../../../../../.claude/.conversations/claude--canadian-map-reconstruction--9cfae3e9/1-september-2-2025';
import ОбъединеннаяКартаСевернойОнтариоV1o1 from '../../../../../../.claude/.conversations/claude--canadian-map-reconstruction--9cfae3e9/o1-объединенная-карта-северной-онтарио-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September220251()}
        {ОбъединеннаяКартаСевернойОнтариоV1o1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
