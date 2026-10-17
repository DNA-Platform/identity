import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--conservation-of-time-complexity--f177ae6f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--conservation-of-time-complexity--f177ae6f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--conservation-of-time-complexity--f177ae6f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--conservation-of-time-complexity--f177ae6f/.table';
import March2120251 from '../../../../../../.claude/.conversations/claude--conservation-of-time-complexity--f177ae6f/1-march-21-2025';
import March2220252 from '../../../../../../.claude/.conversations/claude--conservation-of-time-complexity--f177ae6f/2-march-22-2025';
import QuantumComputingRealityCheckV1o1 from '../../../../../../.claude/.conversations/claude--conservation-of-time-complexity--f177ae6f/o1-quantum-computing-reality-check-v1';
import QuantumComputingRealityCheckClickbaitEditionV2o2 from '../../../../../../.claude/.conversations/claude--conservation-of-time-complexity--f177ae6f/o2-quantum-computing-reality-check-clickbait-edition-v2';
import QuantumComputingAMathematicalRealityCheckV3o3 from '../../../../../../.claude/.conversations/claude--conservation-of-time-complexity--f177ae6f/o3-quantum-computing-a-mathematical-reality-check-v3';
import The50000YearQuantumComputingMythV4o4 from '../../../../../../.claude/.conversations/claude--conservation-of-time-complexity--f177ae6f/o4-the-50-000-year-quantum-computing-myth-v4';
import QuantumComputingsImpossibleNumbersV5o5 from '../../../../../../.claude/.conversations/claude--conservation-of-time-complexity--f177ae6f/o5-quantum-computings-impossible-numbers-v5';
import QuantumComputingsImpossibleMathematicsV6o6 from '../../../../../../.claude/.conversations/claude--conservation-of-time-complexity--f177ae6f/o6-quantum-computings-impossible-mathematics-v6';
import WhenMathMeetsPostTruthTheQuantumComputingRealityV7o7 from '../../../../../../.claude/.conversations/claude--conservation-of-time-complexity--f177ae6f/o7-when-math-meets-post-truth-the-quantum-computing-reality-v7';
import QuantumComputingTheEmperorsNewQubitsV8o8 from '../../../../../../.claude/.conversations/claude--conservation-of-time-complexity--f177ae6f/o8-quantum-computing-the-emperors-new-qubits-v8';
import QuantumComputingAMathematicalRealityCheckV9o9 from '../../../../../../.claude/.conversations/claude--conservation-of-time-complexity--f177ae6f/o9-quantum-computing-a-mathematical-reality-check-v9';
import QuantumComputingTheMathematicsOfImpossibilityV10o10 from '../../../../../../.claude/.conversations/claude--conservation-of-time-complexity--f177ae6f/o10-quantum-computing-the-mathematics-of-impossibility-v10';
import QuantumComputingAndEncryptionAMathematicalAssessmentVo11 from '../../../../../../.claude/.conversations/claude--conservation-of-time-complexity--f177ae6f/o11-quantum-computing-and-encryption-a-mathematical-assessment-v';
import TheThermodynamicsOfImpossibilityQuantumComputingVsPhyo12 from '../../../../../../.claude/.conversations/claude--conservation-of-time-complexity--f177ae6f/o12-the-thermodynamics-of-impossibility-quantum-computing-vs-phy';
import QuantumComputingVsPhysicsWhyBreakingEncryptionIsImpoo13 from '../../../../../../.claude/.conversations/claude--conservation-of-time-complexity--f177ae6f/o13-quantum-computing-vs-physics-why-breaking-encryption-is-impo';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2120251()}
        {March2220252()}
        {QuantumComputingRealityCheckV1o1()}
        {QuantumComputingRealityCheckClickbaitEditionV2o2()}
        {QuantumComputingAMathematicalRealityCheckV3o3()}
        {The50000YearQuantumComputingMythV4o4()}
        {QuantumComputingsImpossibleNumbersV5o5()}
        {QuantumComputingsImpossibleMathematicsV6o6()}
        {WhenMathMeetsPostTruthTheQuantumComputingRealityV7o7()}
        {QuantumComputingTheEmperorsNewQubitsV8o8()}
        {QuantumComputingAMathematicalRealityCheckV9o9()}
        {QuantumComputingTheMathematicsOfImpossibilityV10o10()}
        {QuantumComputingAndEncryptionAMathematicalAssessmentVo11()}
        {TheThermodynamicsOfImpossibilityQuantumComputingVsPhyo12()}
        {QuantumComputingVsPhysicsWhyBreakingEncryptionIsImpoo13()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
