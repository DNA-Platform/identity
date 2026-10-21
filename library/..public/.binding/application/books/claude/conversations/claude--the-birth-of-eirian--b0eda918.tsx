import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian--b0eda918/.book';
import Cover from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian--b0eda918/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian--b0eda918/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian--b0eda918/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian--b0eda918/1-conversation';
import TheSemanticsOfInheritanceInSrtV1o1 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian--b0eda918/o1-the-semantics-of-inheritance-in-srt-v1';
import TheSemanticsOfInheritanceInSrtV2o2 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian--b0eda918/o2-the-semantics-of-inheritance-in-srt-v2';
import TheSemanticsOfInheritanceInSrtV3o3 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian--b0eda918/o3-the-semantics-of-inheritance-in-srt-v3';
import TheSemanticsOfInheritanceInSrtV4o4 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian--b0eda918/o4-the-semantics-of-inheritance-in-srt-v4';
import PersonalNotesOnSemanticReferenceTheoryV1o5 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian--b0eda918/o5-personal-notes-on-semantic-reference-theory-v1';
import PersonalNotesOnSemanticReferenceTheoryV2o6 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian--b0eda918/o6-personal-notes-on-semantic-reference-theory-v2';
import PersonalNotesOnSemanticReferenceTheoryV3o7 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian--b0eda918/o7-personal-notes-on-semantic-reference-theory-v3';
import PersonalNotesOnSemanticReferenceTheoryV4o8 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian--b0eda918/o8-personal-notes-on-semantic-reference-theory-v4';
import PersonalNotesOnSemanticReferenceTheoryV5o9 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian--b0eda918/o9-personal-notes-on-semantic-reference-theory-v5';
import PersonalNotesOnSemanticReferenceTheoryV6o10 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian--b0eda918/o10-personal-notes-on-semantic-reference-theory-v6';
import PersonalNotesOnSemanticReferenceTheoryV7o11 from '../../../../../../.claude/.conversations/claude--the-birth-of-eirian--b0eda918/o11-personal-notes-on-semantic-reference-theory-v7';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
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
