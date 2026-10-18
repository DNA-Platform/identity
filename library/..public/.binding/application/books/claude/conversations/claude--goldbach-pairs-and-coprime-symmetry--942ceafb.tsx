import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--goldbach-pairs-and-coprime-symmetry--942ceafb/.book';
import Cover from '../../../../../../.claude/.conversations/claude--goldbach-pairs-and-coprime-symmetry--942ceafb/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--goldbach-pairs-and-coprime-symmetry--942ceafb/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--goldbach-pairs-and-coprime-symmetry--942ceafb/.table';
import March3020261 from '../../../../../../.claude/.conversations/claude--goldbach-pairs-and-coprime-symmetry--942ceafb/1-march-30-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March3020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
