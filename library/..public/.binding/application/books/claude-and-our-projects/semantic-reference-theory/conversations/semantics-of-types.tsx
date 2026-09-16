import { $ } from '@dna-platform/chemistry';
import $Book from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/.book';
import $Cover from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/.cover';
import $Synopsis from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/.synopsis';
import $Table from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/.table';
import $Lead from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/0-lead';
import $Ivitivity from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/1-ivitivity';
import $SubjectivityAndPassivity from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/2-subjectivity-and-passivity';
import $Adjectivity from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/3-adjectivity';
import $TheTenReferents from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/4-the-ten-referents';
import $APropertyOfTheType from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/5-a-property-of-the-type';
import $TheLittleTypeDocument from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/6-the-little-type-document';
import $NarrowingAndTheDiamond from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/7-narrowing-and-the-diamond';
import $SemanticContext from '../../../../../../../.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/8-semantic-context';

const Book = $($Book);
const Cover = $($Cover);
const Synopsis = $($Synopsis);
const Table = $($Table);
const Lead = $($Lead);
const Ivitivity = $($Ivitivity);
const SubjectivityAndPassivity = $($SubjectivityAndPassivity);
const Adjectivity = $($Adjectivity);
const TheTenReferents = $($TheTenReferents);
const APropertyOfTheType = $($APropertyOfTheType);
const TheLittleTypeDocument = $($TheLittleTypeDocument);
const NarrowingAndTheDiamond = $($NarrowingAndTheDiamond);
const SemanticContext = $($SemanticContext);

export const book = $<$Book>(
    <Book>
        <Cover />
        <Synopsis />
        <Table />
        <Lead />
        <Ivitivity />
        <SubjectivityAndPassivity />
        <Adjectivity />
        <TheTenReferents />
        <APropertyOfTheType />
        <TheLittleTypeDocument />
        <NarrowingAndTheDiamond />
        <SemanticContext />
    </Book>
);
