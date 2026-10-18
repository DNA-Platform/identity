import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--photons-as-fictional-constructs--34055d3f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--photons-as-fictional-constructs--34055d3f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--photons-as-fictional-constructs--34055d3f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--photons-as-fictional-constructs--34055d3f/.table';
import September2920261 from '../../../../../../.claude/.conversations/claude--photons-as-fictional-constructs--34055d3f/1-september-29-2026';
import October220262 from '../../../../../../.claude/.conversations/claude--photons-as-fictional-constructs--34055d3f/2-october-2-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September2920261()}
        {October220262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
