import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--react-and-typescript-curriculum-design--6112f522/.book';
import Cover from '../../../../../../.claude/.conversations/claude--react-and-typescript-curriculum-design--6112f522/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--react-and-typescript-curriculum-design--6112f522/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--react-and-typescript-curriculum-design--6112f522/.table';
import September2120251 from '../../../../../../.claude/.conversations/claude--react-and-typescript-curriculum-design--6112f522/1-september-21-2025';
import September2620252 from '../../../../../../.claude/.conversations/claude--react-and-typescript-curriculum-design--6112f522/2-september-26-2025';
import ChemistryFramework20ProbingQuestionsAndAnswersV1o1 from '../../../../../../.claude/.conversations/claude--react-and-typescript-curriculum-design--6112f522/o1-chemistry-framework-20-probing-questions-and-answers-v1';
import BondorchestratorWithContextPatternV1o2 from '../../../../../../.claude/.conversations/claude--react-and-typescript-curriculum-design--6112f522/o2-bondorchestrator-with-context-pattern-v1';
import BondorchestratorWithContextPatternV2o3 from '../../../../../../.claude/.conversations/claude--react-and-typescript-curriculum-design--6112f522/o3-bondorchestrator-with-context-pattern-v2';
import BondorchestratorWithContextPatternV3o4 from '../../../../../../.claude/.conversations/claude--react-and-typescript-curriculum-design--6112f522/o4-bondorchestrator-with-context-pattern-v3';
import BondorchestratorWithContextPatternV4o5 from '../../../../../../.claude/.conversations/claude--react-and-typescript-curriculum-design--6112f522/o5-bondorchestrator-with-context-pattern-v4';
import BondorchestratorWithContextPatternV5o6 from '../../../../../../.claude/.conversations/claude--react-and-typescript-curriculum-design--6112f522/o6-bondorchestrator-with-context-pattern-v5';
import BondorchestratorWithContextPatternV6o7 from '../../../../../../.claude/.conversations/claude--react-and-typescript-curriculum-design--6112f522/o7-bondorchestrator-with-context-pattern-v6';
import BondorchestratorWithContextPatternV7o8 from '../../../../../../.claude/.conversations/claude--react-and-typescript-curriculum-design--6112f522/o8-bondorchestrator-with-context-pattern-v7';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September2120251()}
        {September2620252()}
        {ChemistryFramework20ProbingQuestionsAndAnswersV1o1()}
        {BondorchestratorWithContextPatternV1o2()}
        {BondorchestratorWithContextPatternV2o3()}
        {BondorchestratorWithContextPatternV3o4()}
        {BondorchestratorWithContextPatternV4o5()}
        {BondorchestratorWithContextPatternV5o6()}
        {BondorchestratorWithContextPatternV6o7()}
        {BondorchestratorWithContextPatternV7o8()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
