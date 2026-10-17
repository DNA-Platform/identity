import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--axioms-and-semantic-theory-exploration--0b32d460/.book';
import Cover from '../../../../../../.claude/.conversations/claude--axioms-and-semantic-theory-exploration--0b32d460/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--axioms-and-semantic-theory-exploration--0b32d460/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--axioms-and-semantic-theory-exploration--0b32d460/.table';
import October1420251 from '../../../../../../.claude/.conversations/claude--axioms-and-semantic-theory-exploration--0b32d460/1-october-14-2025';
import AdditionalCandidateAxiomsForSemanticReferenceTheoryV1o1 from '../../../../../../.claude/.conversations/claude--axioms-and-semantic-theory-exploration--0b32d460/o1-additional-candidate-axioms-for-semantic-reference-theory-v1';
import AdditionalCandidateAxiomsForSemanticReferenceTheoryV2o2 from '../../../../../../.claude/.conversations/claude--axioms-and-semantic-theory-exploration--0b32d460/o2-additional-candidate-axioms-for-semantic-reference-theory-v2';
import AdditionalCandidateAxiomsForSemanticReferenceTheoryV3o3 from '../../../../../../.claude/.conversations/claude--axioms-and-semantic-theory-exploration--0b32d460/o3-additional-candidate-axioms-for-semantic-reference-theory-v3';
import AdditionalCandidateAxiomsForSemanticReferenceTheoryV4o4 from '../../../../../../.claude/.conversations/claude--axioms-and-semantic-theory-exploration--0b32d460/o4-additional-candidate-axioms-for-semantic-reference-theory-v4';
import AdditionalCandidateAxiomsForSemanticReferenceTheoryV5o5 from '../../../../../../.claude/.conversations/claude--axioms-and-semantic-theory-exploration--0b32d460/o5-additional-candidate-axioms-for-semantic-reference-theory-v5';
import AdditionalCandidateAxiomsForSemanticReferenceTheoryV6o6 from '../../../../../../.claude/.conversations/claude--axioms-and-semantic-theory-exploration--0b32d460/o6-additional-candidate-axioms-for-semantic-reference-theory-v6';
import AdditionalCandidateAxiomsForSemanticReferenceTheoryV7o7 from '../../../../../../.claude/.conversations/claude--axioms-and-semantic-theory-exploration--0b32d460/o7-additional-candidate-axioms-for-semantic-reference-theory-v7';
import AdditionalCandidateAxiomsForSemanticReferenceTheoryV8o8 from '../../../../../../.claude/.conversations/claude--axioms-and-semantic-theory-exploration--0b32d460/o8-additional-candidate-axioms-for-semantic-reference-theory-v8';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October1420251()}
        {AdditionalCandidateAxiomsForSemanticReferenceTheoryV1o1()}
        {AdditionalCandidateAxiomsForSemanticReferenceTheoryV2o2()}
        {AdditionalCandidateAxiomsForSemanticReferenceTheoryV3o3()}
        {AdditionalCandidateAxiomsForSemanticReferenceTheoryV4o4()}
        {AdditionalCandidateAxiomsForSemanticReferenceTheoryV5o5()}
        {AdditionalCandidateAxiomsForSemanticReferenceTheoryV6o6()}
        {AdditionalCandidateAxiomsForSemanticReferenceTheoryV7o7()}
        {AdditionalCandidateAxiomsForSemanticReferenceTheoryV8o8()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
