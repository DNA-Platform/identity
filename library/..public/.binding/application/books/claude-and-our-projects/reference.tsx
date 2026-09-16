import { $ } from '@dna-platform/chemistry';
import $Book from '../../../../../.claude-and-our-projects/.reference/.book';
import $Cover from '../../../../../.claude-and-our-projects/.reference/.cover';
import $Synopsis from '../../../../../.claude-and-our-projects/.reference/.synopsis';
import $Table from '../../../../../.claude-and-our-projects/.reference/.table';
import $Lead from '../../../../../.claude-and-our-projects/.reference/0-lead';
import $SemanticReferenceTheory from '../../../../../.claude-and-our-projects/.reference/1-semantic-reference-theory';
import $ForgetTheWeb from '../../../../../.claude-and-our-projects/.reference/2-forget-the-web';
import $ImportingAConversation from '../../../../../.claude-and-our-projects/.reference/3-importing-a-conversation';

const Book = $($Book);
const Cover = $($Cover);
const Synopsis = $($Synopsis);
const Table = $($Table);
const Lead = $($Lead);
const SemanticReferenceTheory = $($SemanticReferenceTheory);
const ForgetTheWeb = $($ForgetTheWeb);
const ImportingAConversation = $($ImportingAConversation);

export const book = $<$Book>(
    <Book>
        <Cover />
        <Synopsis />
        <Table />
        <Lead />
        <SemanticReferenceTheory />
        <ForgetTheWeb />
        <ImportingAConversation />
    </Book>
);
