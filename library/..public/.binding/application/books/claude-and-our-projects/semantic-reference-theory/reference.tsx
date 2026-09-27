import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude-and-our-projects/semantic-reference-theory/.reference/.book';
import $Cover from '../../../../../../.claude-and-our-projects/semantic-reference-theory/.reference/.cover';
import $Synopsis from '../../../../../../.claude-and-our-projects/semantic-reference-theory/.reference/.synopsis';
import $Table from '../../../../../../.claude-and-our-projects/semantic-reference-theory/.reference/.table';
import $Lead0 from '../../../../../../.claude-and-our-projects/semantic-reference-theory/.reference/0-lead';
import $SemanticsOfTypes1 from '../../../../../../.claude-and-our-projects/semantic-reference-theory/.reference/1-semantics-of-types';

const Book = $($Book);
const Cover = $($Cover);
const Synopsis = $($Synopsis);
const Table = $($Table);
const Lead0 = $($Lead0);
const SemanticsOfTypes1 = $($SemanticsOfTypes1);

export const book = $<$Book>(
    <Book>
        <Cover />
        <Synopsis />
        <Table />
        <Lead0 />
        <SemanticsOfTypes1 />
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
