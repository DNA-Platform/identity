import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian/.book';
import Cover from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian/.table';
import October920251 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian/1-october-9-2025';
import October1020252 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian/2-october-10-2025';
import TheSemanticsOfInheritanceInSrtV1o1 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian/o1-the-semantics-of-inheritance-in-srt-v1';
import TheSemanticsOfInheritanceInSrtV2o2 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian/o2-the-semantics-of-inheritance-in-srt-v2';
import TheSemanticsOfInheritanceInSrtV3o3 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian/o3-the-semantics-of-inheritance-in-srt-v3';
import TheSemanticsOfInheritanceInSrtV4o4 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian/o4-the-semantics-of-inheritance-in-srt-v4';
import PersonalNotesOnSemanticReferenceTheoryV1o5 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian/o5-personal-notes-on-semantic-reference-theory-v1';
import PersonalNotesOnSemanticReferenceTheoryV2o6 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian/o6-personal-notes-on-semantic-reference-theory-v2';
import PersonalNotesOnSemanticReferenceTheoryV3o7 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian/o7-personal-notes-on-semantic-reference-theory-v3';
import PersonalNotesOnSemanticReferenceTheoryV4o8 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian/o8-personal-notes-on-semantic-reference-theory-v4';
import PersonalNotesOnSemanticReferenceTheoryV5o9 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian/o9-personal-notes-on-semantic-reference-theory-v5';
import PersonalNotesOnSemanticReferenceTheoryV6o10 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian/o10-personal-notes-on-semantic-reference-theory-v6';
import PersonalNotesOnSemanticReferenceTheoryV7o11 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian/o11-personal-notes-on-semantic-reference-theory-v7';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October920251()}
        {October1020252()}
        {TheSemanticsOfInheritanceInSrtV1o1()}
        {TheSemanticsOfInheritanceInSrtV2o2()}
        {TheSemanticsOfInheritanceInSrtV3o3()}
        {TheSemanticsOfInheritanceInSrtV4o4()}
        {PersonalNotesOnSemanticReferenceTheoryV1o5()}
        {PersonalNotesOnSemanticReferenceTheoryV2o6()}
        {PersonalNotesOnSemanticReferenceTheoryV3o7()}
        {PersonalNotesOnSemanticReferenceTheoryV4o8()}
        {PersonalNotesOnSemanticReferenceTheoryV5o9()}
        {PersonalNotesOnSemanticReferenceTheoryV6o10()}
        {PersonalNotesOnSemanticReferenceTheoryV7o11()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
