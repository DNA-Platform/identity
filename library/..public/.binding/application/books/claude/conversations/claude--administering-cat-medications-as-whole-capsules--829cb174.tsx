import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--administering-cat-medications-as-whole-capsules--829cb174/.book';
import Cover from '../../../../../../.claude/.conversations/claude--administering-cat-medications-as-whole-capsules--829cb174/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--administering-cat-medications-as-whole-capsules--829cb174/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--administering-cat-medications-as-whole-capsules--829cb174/.table';
import June1220261 from '../../../../../../.claude/.conversations/claude--administering-cat-medications-as-whole-capsules--829cb174/1-june-12-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
