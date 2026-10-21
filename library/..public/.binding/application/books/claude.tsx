import { $ } from '@dna-platform/chemistry';
import { opened } from '../opened';
import $Book from '../../../../.claude/.book';
import Cover from '../../../../.claude/.cover';
import Synopsis from '../../../../.claude/.synopsis';
import Table from '../../../../.claude/.table';
import ClaudesReferenceManual3 from '../../../../.claude/3-claudes-reference-manual';
import ClaudesDesign4 from '../../../../.claude/4-claudes-design';
import OurConversations5 from '../../../../.claude/5-our-conversations';
import ClaudeMiscellaneous6 from '../../../../.claude/6-claude-miscellaneous';
import ClaudeRussia7 from '../../../../.claude/7-claude-russia';
import ClaudeGeorgia8 from '../../../../.claude/8-claude-georgia';
import ClaudeAnaStudiesEnglish9 from '../../../../.claude/9-claude-ana-studies-english';
import ClaudeInvesting10 from '../../../../.claude/10-claude-investing';
import ClaudeDnaPatternity11 from '../../../../.claude/11-claude-dna-patternity';
import ClaudeNumberTheory12 from '../../../../.claude/12-claude-number-theory';
import ClaudeSemanticReferenceTheory13 from '../../../../.claude/13-claude-semantic-reference-theory';
import ClaudePhysics14 from '../../../../.claude/14-claude-physics';
import ClaudeChemistry15 from '../../../../.claude/15-claude-chemistry';
import ClaudeEirian16 from '../../../../.claude/16-claude-eirian';
import ClaudeInexplicablePhenomena17 from '../../../../.claude/17-claude-inexplicable-phenomena';
import ClaudeLearning18 from '../../../../.claude/18-claude-learning';
import ClaudeNikolai19 from '../../../../.claude/19-claude-nikolai';
import ClaudeTurkey20 from '../../../../.claude/20-claude-turkey';
import ClaudeCareer21 from '../../../../.claude/21-claude-career';
import ClaudeGrammar22 from '../../../../.claude/22-claude-grammar';
import ClaudeLife23 from '../../../../.claude/23-claude-life';
import ClaudeNeuroscience24 from '../../../../.claude/24-claude-neuroscience';
import ClaudeSeren25 from '../../../../.claude/25-claude-seren';
import ClaudeResume26 from '../../../../.claude/26-claude-resume';
import ClaudeScience27 from '../../../../.claude/27-claude-science';
import ClaudeTheHardProblem28 from '../../../../.claude/28-claude-the-hard-problem';
import ClaudeClaude29 from '../../../../.claude/29-claude-claude';
import ClaudeFitness30 from '../../../../.claude/30-claude-fitness';
import ClaudePassiveIncome31 from '../../../../.claude/31-claude-passive-income';
import ClaudeCode32 from '../../../../.claude/32-claude-code';
import TheAccountso1 from '../../../../.claude/o1-the-accounts';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {ClaudesReferenceManual3()}
        {ClaudesDesign4()}
        {OurConversations5()}
        {ClaudeMiscellaneous6()}
        {ClaudeRussia7()}
        {ClaudeGeorgia8()}
        {ClaudeAnaStudiesEnglish9()}
        {ClaudeInvesting10()}
        {ClaudeDnaPatternity11()}
        {ClaudeNumberTheory12()}
        {ClaudeSemanticReferenceTheory13()}
        {ClaudePhysics14()}
        {ClaudeChemistry15()}
        {ClaudeEirian16()}
        {ClaudeInexplicablePhenomena17()}
        {ClaudeLearning18()}
        {ClaudeNikolai19()}
        {ClaudeTurkey20()}
        {ClaudeCareer21()}
        {ClaudeGrammar22()}
        {ClaudeLife23()}
        {ClaudeNeuroscience24()}
        {ClaudeSeren25()}
        {ClaudeResume26()}
        {ClaudeScience27()}
        {ClaudeTheHardProblem28()}
        {ClaudeClaude29()}
        {ClaudeFitness30()}
        {ClaudePassiveIncome31()}
        {ClaudeCode32()}
        {TheAccountso1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
