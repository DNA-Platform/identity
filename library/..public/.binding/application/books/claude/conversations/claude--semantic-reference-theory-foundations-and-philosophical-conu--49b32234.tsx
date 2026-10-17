import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-foundations-and-philosophical-conu--49b32234/.book';
import Cover from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-foundations-and-philosophical-conu--49b32234/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-foundations-and-philosophical-conu--49b32234/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-foundations-and-philosophical-conu--49b32234/.table';
import June2620261 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-foundations-and-philosophical-conu--49b32234/1-june-26-2026';
import June2720262 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-foundations-and-philosophical-conu--49b32234/2-june-27-2026';
import June2820263 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-foundations-and-philosophical-conu--49b32234/3-june-28-2026';
import June2920264 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-foundations-and-philosophical-conu--49b32234/4-june-29-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June2620261()}
        {June2720262()}
        {June2820263()}
        {June2920264()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
