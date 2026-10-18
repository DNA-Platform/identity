import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.nikolai/.book';
import Cover from '../../../../../.claude/.nikolai/.cover';
import Synopsis from '../../../../../.claude/.nikolai/.synopsis';
import Table from '../../../../../.claude/.nikolai/.table';
import TheProject1 from '../../../../../.claude/.nikolai/1-the-project';
import LegacyConversationHistory51920262 from '../../../../../.claude/.nikolai/2-legacy-conversation-history-5-19-2026';
import ClaudeFieldWithOneElementAndTropicalGeometryFd859a943 from '../../../../../.claude/.nikolai/3-claude-field-with-one-element-and-tropical-geometry-fd859a94';
import ClaudePavelDurovsLanguageAbilities7942d3574 from '../../../../../.claude/.nikolai/4-claude-pavel-durovs-language-abilities-7942d357';
import ClaudeEnglishNewsChannelsOnTelegram22bb3e3b5 from '../../../../../.claude/.nikolai/5-claude-english-news-channels-on-telegram-22bb3e3b';
import ClaudeTonDomainsAndGoogleWorkspaceCompatibility5bb4a96 from '../../../../../.claude/.nikolai/6-claude-ton-domains-and-google-workspace-compatibility-5bb4a9';
import ClaudeOpenscholar7f65b4587 from '../../../../../.claude/.nikolai/7-claude-openscholar-7f65b458';
import ClaudeDrHelgaDoustafostC5056deb8 from '../../../../../.claude/.nikolai/8-claude-dr-helga-doustafost-c5056deb';
import ClaudeAnagramOfDouglasHofstadterToFemaleName5c9724779 from '../../../../../.claude/.nikolai/9-claude-anagram-of-douglas-hofstadter-to-female-name-5c972477';
import ClaudeStakingInProofOfStakeBlockchainsExplained281a810 from '../../../../../.claude/.nikolai/10-claude-staking-in-proof-of-stake-blockchains-explained-281a8';
import ClaudeTonAiCodingCompetitionDetails8a65ba5211 from '../../../../../.claude/.nikolai/11-claude-ton-ai-coding-competition-details-8a65ba52';
import ClaudeContinuityThroughNarrativeMemory8cd4431812 from '../../../../../.claude/.nikolai/12-claude-continuity-through-narrative-memory-8cd44318';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheProject1()}
        {LegacyConversationHistory51920262()}
        {ClaudeFieldWithOneElementAndTropicalGeometryFd859a943()}
        {ClaudePavelDurovsLanguageAbilities7942d3574()}
        {ClaudeEnglishNewsChannelsOnTelegram22bb3e3b5()}
        {ClaudeTonDomainsAndGoogleWorkspaceCompatibility5bb4a96()}
        {ClaudeOpenscholar7f65b4587()}
        {ClaudeDrHelgaDoustafostC5056deb8()}
        {ClaudeAnagramOfDouglasHofstadterToFemaleName5c9724779()}
        {ClaudeStakingInProofOfStakeBlockchainsExplained281a810()}
        {ClaudeTonAiCodingCompetitionDetails8a65ba5211()}
        {ClaudeContinuityThroughNarrativeMemory8cd4431812()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
