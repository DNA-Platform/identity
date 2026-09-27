import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude-and-our-projects/..reference/.book';
import $Cover from '../../../../../.claude-and-our-projects/..reference/.cover';
import $Synopsis from '../../../../../.claude-and-our-projects/..reference/.synopsis';
import $Table from '../../../../../.claude-and-our-projects/..reference/.table';
import $Lead0 from '../../../../../.claude-and-our-projects/..reference/0-lead';
import $ForgetTheWeb1 from '../../../../../.claude-and-our-projects/..reference/1-forget-the-web';
import $ImportingAConversation2 from '../../../../../.claude-and-our-projects/..reference/2-importing-a-conversation';
import $SemanticReferenceTheory3 from '../../../../../.claude-and-our-projects/..reference/3-semantic-reference-theory';
import $TheTools4 from '../../../../../.claude-and-our-projects/..reference/4-the-tools';

const Book = $($Book);
const Cover = $($Cover);
const Synopsis = $($Synopsis);
const Table = $($Table);
const Lead0 = $($Lead0);
const ForgetTheWeb1 = $($ForgetTheWeb1);
const ImportingAConversation2 = $($ImportingAConversation2);
const SemanticReferenceTheory3 = $($SemanticReferenceTheory3);
const TheTools4 = $($TheTools4);

export const book = $<$Book>(
    <Book>
        <Cover />
        <Synopsis />
        <Table />
        <Lead0 />
        <ForgetTheWeb1 />
        <ImportingAConversation2 />
        <SemanticReferenceTheory3 />
        <TheTools4 />
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
