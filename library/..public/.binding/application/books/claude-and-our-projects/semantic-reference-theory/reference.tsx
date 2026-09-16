import { $ } from '@dna-platform/chemistry';
import $Book from '../../../../../../.claude-and-our-projects/semantic-reference-theory/.reference/.book';
import $Cover from '../../../../../../.claude-and-our-projects/semantic-reference-theory/.reference/.cover';
import $Synopsis from '../../../../../../.claude-and-our-projects/semantic-reference-theory/.reference/.synopsis';
import $Table from '../../../../../../.claude-and-our-projects/semantic-reference-theory/.reference/.table';
import $Lead from '../../../../../../.claude-and-our-projects/semantic-reference-theory/.reference/0-lead';
import $SemanticsOfTypes from '../../../../../../.claude-and-our-projects/semantic-reference-theory/.reference/1-semantics-of-types';

const Book = $($Book);
const Cover = $($Cover);
const Synopsis = $($Synopsis);
const Table = $($Table);
const Lead = $($Lead);
const SemanticsOfTypes = $($SemanticsOfTypes);

export const book = $<$Book>(
    <Book>
        <Cover />
        <Synopsis />
        <Table />
        <Lead />
        <SemanticsOfTypes />
    </Book>
);
