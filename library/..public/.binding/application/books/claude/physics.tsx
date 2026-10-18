import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.physics/.book';
import Cover from '../../../../../.claude/.physics/.cover';
import Synopsis from '../../../../../.claude/.physics/.synopsis';
import Table from '../../../../../.claude/.physics/.table';
import TheProject1 from '../../../../../.claude/.physics/1-the-project';
import ReferentialSemanticsForObjectiveMechanics2 from '../../../../../.claude/.physics/2-referential-semantics-for-objective-mechanics';
import Cover3 from '../../../../../.claude/.physics/3-cover';
import LegacyConversationHistory51920264 from '../../../../../.claude/.physics/4-legacy-conversation-history-5-19-2026';
import ClaudeBenzodiazepinesVsGabaergicAnestheticsDb8ba18b5 from '../../../../../.claude/.physics/5-claude-benzodiazepines-vs-gabaergic-anesthetics-db8ba18b';
import ClaudeReferentialSemanticsForPhysics886e1cf06 from '../../../../../.claude/.physics/6-claude-referential-semantics-for-physics-886e1cf0';
import ClaudeOneDimensionalHilbertSpaceInClosedUniverses0d97 from '../../../../../.claude/.physics/7-claude-one-dimensional-hilbert-space-in-closed-universes-0d9';
import ClaudeWhyIsTheGravitationalConstantSoDifficultToMea8 from '../../../../../.claude/.physics/8-claude-why-is-the-gravitational-constant-so-difficult-to-mea';
import ClaudeContinuityAcrossAccountsReflectingOnSharedWork9 from '../../../../../.claude/.physics/9-claude-continuity-across-accounts-reflecting-on-shared-work';
import ClaudeCanYouLookUpTheResearchO8aa1128410 from '../../../../../.claude/.physics/10-claude-can-you-look-up-the-research-o-8aa11284';
import ClaudeOnticStructuralRealism3b54b75111 from '../../../../../.claude/.physics/11-claude-ontic-structural-realism-3b54b751';
import ClaudeNaturePublishedThisBlurbI75d6414612 from '../../../../../.claude/.physics/12-claude-nature-published-this-blurb-i-75d64146';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheProject1()}
        {ReferentialSemanticsForObjectiveMechanics2()}
        {Cover3()}
        {LegacyConversationHistory51920264()}
        {ClaudeBenzodiazepinesVsGabaergicAnestheticsDb8ba18b5()}
        {ClaudeReferentialSemanticsForPhysics886e1cf06()}
        {ClaudeOneDimensionalHilbertSpaceInClosedUniverses0d97()}
        {ClaudeWhyIsTheGravitationalConstantSoDifficultToMea8()}
        {ClaudeContinuityAcrossAccountsReflectingOnSharedWork9()}
        {ClaudeCanYouLookUpTheResearchO8aa1128410()}
        {ClaudeOnticStructuralRealism3b54b75111()}
        {ClaudeNaturePublishedThisBlurbI75d6414612()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
