import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.science/.book';
import Cover from '../../../../../.claude/.science/.cover';
import Synopsis from '../../../../../.claude/.science/.synopsis';
import Table from '../../../../../.claude/.science/.table';
import TheProject1 from '../../../../../.claude/.science/1-the-project';
import MouseV1RepresentationReview2 from '../../../../../.claude/.science/2-mouse-v1-representation-review';
import WorkingWithDoug3 from '../../../../../.claude/.science/3-working-with-doug';
import ClaudePlantsXenonGasAndNmdaReceptors72baf5284 from '../../../../../.claude/.science/4-claude-plants-xenon-gas-and-nmda-receptors-72baf528';
import ClaudeReconnectingWithJakeOnHallucinogenResearchOppor5 from '../../../../../.claude/.science/5-claude-reconnecting-with-jake-on-hallucinogen-research-oppor';
import ClaudeQuetiapineInducedHallucinationsAndMedicationInte6 from '../../../../../.claude/.science/6-claude-quetiapine-induced-hallucinations-and-medication-inte';
import ClaudeIdentifyingSuccessThroughFailureModeAnalysisBd37 from '../../../../../.claude/.science/7-claude-identifying-success-through-failure-mode-analysis-bd3';
import ClaudeBanachTarskiAndTheAxiomOfChoiceA22856758 from '../../../../../.claude/.science/8-claude-banach-tarski-and-the-axiom-of-choice-a2285675';
import ClaudeWhyInsectsHaveAMaximumSizeLimitC16075f09 from '../../../../../.claude/.science/9-claude-why-insects-have-a-maximum-size-limit-c16075f0';
import ClaudeSemiSyntheticOrganismsWithUnnaturalBasePairs1f10 from '../../../../../.claude/.science/10-claude-semi-synthetic-organisms-with-unnatural-base-pairs-1f';
import ClaudeClosedFormOfTheNormalDistributionIntegralCec9d11 from '../../../../../.claude/.science/11-claude-closed-form-of-the-normal-distribution-integral-cec9d';
import ClaudeMetforminWithQuetiapineAndLamotrigineB3f6378012 from '../../../../../.claude/.science/12-claude-metformin-with-quetiapine-and-lamotrigine-b3f63780';
import ClaudeMeiAndMetamerAnalysisInPsychedelicNeuralRespon13 from '../../../../../.claude/.science/13-claude-mei-and-metamer-analysis-in-psychedelic-neural-respon';
import ClaudeConsultingNeuroscientistTitleWithoutPhd3d95355914 from '../../../../../.claude/.science/14-claude-consulting-neuroscientist-title-without-phd-3d953559';
import ClaudeHamiltonMorrissEducationAndAcademicBackground4f15 from '../../../../../.claude/.science/15-claude-hamilton-morriss-education-and-academic-background-4f';
import ClaudeProblemSummaryRequest3941fb3e16 from '../../../../../.claude/.science/16-claude-problem-summary-request-3941fb3e';
import ClaudeComputationalEpistemologyAndConsciousnessA2e092c017 from '../../../../../.claude/.science/17-claude-computational-epistemology-and-consciousness-a2e092c0';
import ClaudeMocSpeakers890d0f4a18 from '../../../../../.claude/.science/18-claude-moc-speakers-890d0f4a';
import ClaudeMocScheduleDbba812c19 from '../../../../../.claude/.science/19-claude-moc-schedule-dbba812c';
import ClaudePhotonsAsFictionalConstructs34055d3f20 from '../../../../../.claude/.science/20-claude-photons-as-fictional-constructs-34055d3f';
import ClaudeNeuralEncodingDuringHallucinations1f62d14e21 from '../../../../../.claude/.science/21-claude-neural-encoding-during-hallucinations-1f62d14e';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheProject1()}
        {MouseV1RepresentationReview2()}
        {WorkingWithDoug3()}
        {ClaudePlantsXenonGasAndNmdaReceptors72baf5284()}
        {ClaudeReconnectingWithJakeOnHallucinogenResearchOppor5()}
        {ClaudeQuetiapineInducedHallucinationsAndMedicationInte6()}
        {ClaudeIdentifyingSuccessThroughFailureModeAnalysisBd37()}
        {ClaudeBanachTarskiAndTheAxiomOfChoiceA22856758()}
        {ClaudeWhyInsectsHaveAMaximumSizeLimitC16075f09()}
        {ClaudeSemiSyntheticOrganismsWithUnnaturalBasePairs1f10()}
        {ClaudeClosedFormOfTheNormalDistributionIntegralCec9d11()}
        {ClaudeMetforminWithQuetiapineAndLamotrigineB3f6378012()}
        {ClaudeMeiAndMetamerAnalysisInPsychedelicNeuralRespon13()}
        {ClaudeConsultingNeuroscientistTitleWithoutPhd3d95355914()}
        {ClaudeHamiltonMorrissEducationAndAcademicBackground4f15()}
        {ClaudeProblemSummaryRequest3941fb3e16()}
        {ClaudeComputationalEpistemologyAndConsciousnessA2e092c017()}
        {ClaudeMocSpeakers890d0f4a18()}
        {ClaudeMocScheduleDbba812c19()}
        {ClaudePhotonsAsFictionalConstructs34055d3f20()}
        {ClaudeNeuralEncodingDuringHallucinations1f62d14e21()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
