import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--bengal-cats-giardia-and-tritrichomonas-co-infection-treatmen--62c5a076/.book';
import Cover from '../../../../../../.claude/.conversations/claude--bengal-cats-giardia-and-tritrichomonas-co-infection-treatmen--62c5a076/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--bengal-cats-giardia-and-tritrichomonas-co-infection-treatmen--62c5a076/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--bengal-cats-giardia-and-tritrichomonas-co-infection-treatmen--62c5a076/.table';
import July120261 from '../../../../../../.claude/.conversations/claude--bengal-cats-giardia-and-tritrichomonas-co-infection-treatmen--62c5a076/1-july-1-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
