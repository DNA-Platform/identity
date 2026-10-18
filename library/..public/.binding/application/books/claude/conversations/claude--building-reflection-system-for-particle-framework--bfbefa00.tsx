import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--building-reflection-system-for-particle-framework--bfbefa00/.book';
import Cover from '../../../../../../.claude/.conversations/claude--building-reflection-system-for-particle-framework--bfbefa00/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--building-reflection-system-for-particle-framework--bfbefa00/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--building-reflection-system-for-particle-framework--bfbefa00/.table';
import November720251 from '../../../../../../.claude/.conversations/claude--building-reflection-system-for-particle-framework--bfbefa00/1-november-7-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November720251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
