import { $ } from '@dna-platform/chemistry';
import { opened } from '../opened';
import $Book from '../../../../.claude/.book';
import Cover from '../../../../.claude/.cover';
import Synopsis from '../../../../.claude/.synopsis';
import Table from '../../../../.claude/.table';
import ClaudesReferenceManual3 from '../../../../.claude/3-claudes-reference-manual';
import ClaudesDesign4 from '../../../../.claude/4-claudes-design';
import OurConversations6 from '../../../../.claude/6-our-conversations';
import ClaudeMiscellaneous7 from '../../../../.claude/7-claude-miscellaneous';
import ClaudeRussia8 from '../../../../.claude/8-claude-russia';
import ClaudeGeorgia9 from '../../../../.claude/9-claude-georgia';
import ClaudeAnaStudiesEnglish10 from '../../../../.claude/10-claude-ana-studies-english';
import ClaudeInvesting11 from '../../../../.claude/11-claude-investing';
import ClaudeDnaPatternity12 from '../../../../.claude/12-claude-dna-patternity';
import ClaudeNumberTheory13 from '../../../../.claude/13-claude-number-theory';
import ClaudeSemanticReferenceTheory14 from '../../../../.claude/14-claude-semantic-reference-theory';
import ClaudePhysics15 from '../../../../.claude/15-claude-physics';
import ClaudeChemistry16 from '../../../../.claude/16-claude-chemistry';
import ClaudeEirian17 from '../../../../.claude/17-claude-eirian';
import ClaudeInexplicablePhenomena18 from '../../../../.claude/18-claude-inexplicable-phenomena';
import ClaudeLearning19 from '../../../../.claude/19-claude-learning';
import ClaudeNikolai20 from '../../../../.claude/20-claude-nikolai';
import ClaudeTurkey21 from '../../../../.claude/21-claude-turkey';
import ClaudeCareer22 from '../../../../.claude/22-claude-career';
import ClaudeGrammar23 from '../../../../.claude/23-claude-grammar';
import ClaudeLife24 from '../../../../.claude/24-claude-life';
import ClaudeNeuroscience25 from '../../../../.claude/25-claude-neuroscience';
import ClaudeSeren26 from '../../../../.claude/26-claude-seren';
import ClaudeResume27 from '../../../../.claude/27-claude-resume';
import ClaudeScience28 from '../../../../.claude/28-claude-science';
import ClaudeTheHardProblem29 from '../../../../.claude/29-claude-the-hard-problem';
import ClaudeClaude30 from '../../../../.claude/30-claude-claude';
import ClaudeFitness31 from '../../../../.claude/31-claude-fitness';
import ClaudePassiveIncome32 from '../../../../.claude/32-claude-passive-income';
import ClaudeCode33 from '../../../../.claude/33-claude-code';
import TheAccountso1 from '../../../../.claude/o1-the-accounts';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {ClaudesReferenceManual3()}
        {ClaudesDesign4()}
        {OurConversations6()}
        {ClaudeMiscellaneous7()}
        {ClaudeRussia8()}
        {ClaudeGeorgia9()}
        {ClaudeAnaStudiesEnglish10()}
        {ClaudeInvesting11()}
        {ClaudeDnaPatternity12()}
        {ClaudeNumberTheory13()}
        {ClaudeSemanticReferenceTheory14()}
        {ClaudePhysics15()}
        {ClaudeChemistry16()}
        {ClaudeEirian17()}
        {ClaudeInexplicablePhenomena18()}
        {ClaudeLearning19()}
        {ClaudeNikolai20()}
        {ClaudeTurkey21()}
        {ClaudeCareer22()}
        {ClaudeGrammar23()}
        {ClaudeLife24()}
        {ClaudeNeuroscience25()}
        {ClaudeSeren26()}
        {ClaudeResume27()}
        {ClaudeScience28()}
        {ClaudeTheHardProblem29()}
        {ClaudeClaude30()}
        {ClaudeFitness31()}
        {ClaudePassiveIncome32()}
        {ClaudeCode33()}
        {TheAccountso1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
