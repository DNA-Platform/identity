import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/.book';
import Cover from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/.table';
import March2220251 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/1-march-22-2025';
import March2320252 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/2-march-23-2025';
import TheTransductionTheoremRefinedV1o1 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o1-the-transduction-theorem-refined-v1';
import AComprehensiveGuideToPropositionalLogicV1o2 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o2-a-comprehensive-guide-to-propositional-logic-v1';
import AComprehensiveGuideToFirstOrderLogicWithPeanoArithmo3 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o3-a-comprehensive-guide-to-first-order-logic-with-peano-arithm';
import TheTransductionTheoremRevisedV1o4 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o4-the-transduction-theorem-revised-v1';
import TheTransductionTheoremRevisedV2o5 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o5-the-transduction-theorem-revised-v2';
import TheLinguisticRepresentationTheoremV1o6 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o6-the-linguistic-representation-theorem-v1';
import TheMetalogicalRepresentationTheoremV1o7 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o7-the-metalogical-representation-theorem-v1';
import TheMetalogicalRepresentationTheoremProofAndConnectiono8 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o8-the-metalogical-representation-theorem-proof-and-connection';
import TheMetalogicalRepresentationTheoremFormalProofV1o9 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o9-the-metalogical-representation-theorem-formal-proof-v1';
import TheMetalogicalRepresentationTheoremFormalProofV2o10 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o10-the-metalogical-representation-theorem-formal-proof-v2';
import TheMetalogicalRepresentationTheoremRevisedV1o11 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o11-the-metalogical-representation-theorem-revised-v1';
import TheMetalogicalRepresentationTheoremRevisedV2o12 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o12-the-metalogical-representation-theorem-revised-v2';
import TheMetalogicalRepresentationTheoremRevisedV3o13 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o13-the-metalogical-representation-theorem-revised-v3';
import TheMetalogicalRepresentationTheoremRevisedV4o14 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o14-the-metalogical-representation-theorem-revised-v4';
import TheMetalogicalSubjectivityTheoremV1o15 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o15-the-metalogical-subjectivity-theorem-v1';
import TranscendenceTheoryFormalizingSubjectivityInLogicalSyso16 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o16-transcendence-theory-formalizing-subjectivity-in-logical-sys';
import LogicalTranscendenceTheoryAFrameworkForSubjectivityIno17 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o17-logical-transcendence-theory-a-framework-for-subjectivity-in';
import MetalogicalSubjectivityV1o18 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o18-metalogical-subjectivity-v1';
import MetalogicalSubjectivityV2o19 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o19-metalogical-subjectivity-v2';
import MetalogicalSubjectivityV3o20 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o20-metalogical-subjectivity-v3';
import MetalogicalSubjectivityV4o21 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o21-metalogical-subjectivity-v4';
import MetalogicalSubjectivityV5o22 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o22-metalogical-subjectivity-v5';
import MetalogicalSubjectivityV6o23 from '../../../../../../.claude/.conversations/claude--metalogical-subjectivity/o23-metalogical-subjectivity-v6';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2220251()}
        {March2320252()}
        {TheTransductionTheoremRefinedV1o1()}
        {AComprehensiveGuideToPropositionalLogicV1o2()}
        {AComprehensiveGuideToFirstOrderLogicWithPeanoArithmo3()}
        {TheTransductionTheoremRevisedV1o4()}
        {TheTransductionTheoremRevisedV2o5()}
        {TheLinguisticRepresentationTheoremV1o6()}
        {TheMetalogicalRepresentationTheoremV1o7()}
        {TheMetalogicalRepresentationTheoremProofAndConnectiono8()}
        {TheMetalogicalRepresentationTheoremFormalProofV1o9()}
        {TheMetalogicalRepresentationTheoremFormalProofV2o10()}
        {TheMetalogicalRepresentationTheoremRevisedV1o11()}
        {TheMetalogicalRepresentationTheoremRevisedV2o12()}
        {TheMetalogicalRepresentationTheoremRevisedV3o13()}
        {TheMetalogicalRepresentationTheoremRevisedV4o14()}
        {TheMetalogicalSubjectivityTheoremV1o15()}
        {TranscendenceTheoryFormalizingSubjectivityInLogicalSyso16()}
        {LogicalTranscendenceTheoryAFrameworkForSubjectivityIno17()}
        {MetalogicalSubjectivityV1o18()}
        {MetalogicalSubjectivityV2o19()}
        {MetalogicalSubjectivityV3o20()}
        {MetalogicalSubjectivityV4o21()}
        {MetalogicalSubjectivityV5o22()}
        {MetalogicalSubjectivityV6o23()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
