import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--alpha-methyl-tryptamine-pharmacology-and-serotonin-mechanism--2188998f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--alpha-methyl-tryptamine-pharmacology-and-serotonin-mechanism--2188998f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--alpha-methyl-tryptamine-pharmacology-and-serotonin-mechanism--2188998f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--alpha-methyl-tryptamine-pharmacology-and-serotonin-mechanism--2188998f/.table';
import April2020261 from '../../../../../../.claude/.conversations/claude--alpha-methyl-tryptamine-pharmacology-and-serotonin-mechanism--2188998f/1-april-20-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April2020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
