import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ana-id-doing-an-individual-ent--1e12bee5/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ana-id-doing-an-individual-ent--1e12bee5/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ana-id-doing-an-individual-ent--1e12bee5/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ana-id-doing-an-individual-ent--1e12bee5/.table';
import June320261 from '../../../../../../.claude/.conversations/claude--ana-id-doing-an-individual-ent--1e12bee5/1-june-3-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
