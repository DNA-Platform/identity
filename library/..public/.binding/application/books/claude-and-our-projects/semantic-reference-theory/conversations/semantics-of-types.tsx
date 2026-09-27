import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../../opened';
import $Book from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/.book';
import $Cover from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/.cover';
import $Synopsis from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/.synopsis';
import $Table from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/.table';
import $Lead0 from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/0-lead';
import $Ivitivity1 from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/1-ivitivity';
import $SubjectivityAndPassivity2 from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/2-subjectivity-and-passivity';
import $Adjectivity3 from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/3-adjectivity';
import $TheTenReferents4 from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/4-the-ten-referents';
import $APropertyOfTheType5 from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/5-a-property-of-the-type';
import $TheLittleTypeDocument6 from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/6-the-little-type-document';
import $NarrowingAndTheDiamond7 from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/7-narrowing-and-the-diamond';
import $SemanticContext8 from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/8-semantic-context';

const Book = $($Book);
const Cover = $($Cover);
const Synopsis = $($Synopsis);
const Table = $($Table);
const Lead0 = $($Lead0);
const Ivitivity1 = $($Ivitivity1);
const SubjectivityAndPassivity2 = $($SubjectivityAndPassivity2);
const Adjectivity3 = $($Adjectivity3);
const TheTenReferents4 = $($TheTenReferents4);
const APropertyOfTheType5 = $($APropertyOfTheType5);
const TheLittleTypeDocument6 = $($TheLittleTypeDocument6);
const NarrowingAndTheDiamond7 = $($NarrowingAndTheDiamond7);
const SemanticContext8 = $($SemanticContext8);

export const book = $<$Book>(
    <Book>
        <Cover />
        <Synopsis />
        <Table />
        <Lead0 />
        <Ivitivity1 />
        <SubjectivityAndPassivity2 />
        <Adjectivity3 />
        <TheTenReferents4 />
        <APropertyOfTheType5 />
        <TheLittleTypeDocument6 />
        <NarrowingAndTheDiamond7 />
        <SemanticContext8 />
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
