import { $ } from '@dna-platform/chemistry';
import { opened } from '../opened';
import $Book from '../../../../.claude/.book';
import Cover from '../../../../.claude/.cover';
import Synopsis from '../../../../.claude/.synopsis';
import Table from '../../../../.claude/.table';
import OurConversations1 from '../../../../.claude/1-our-conversations';
import ClaudesReferenceManual3 from '../../../../.claude/3-claudes-reference-manual';
import ClaudesDesign4 from '../../../../.claude/4-claudes-design';
import ClaudeMiscellaneous5 from '../../../../.claude/5-claude-miscellaneous';
import ClaudeRussia6 from '../../../../.claude/6-claude-russia';
import ClaudeGeorgia7 from '../../../../.claude/7-claude-georgia';
import ClaudeAnaStudiesEnglish8 from '../../../../.claude/8-claude-ana-studies-english';
import ClaudeInvesting9 from '../../../../.claude/9-claude-investing';
import ClaudeDnaPatternity10 from '../../../../.claude/10-claude-dna-patternity';
import ClaudeNumberTheory11 from '../../../../.claude/11-claude-number-theory';
import ClaudeSemanticReferenceTheory12 from '../../../../.claude/12-claude-semantic-reference-theory';
import ClaudePhysics13 from '../../../../.claude/13-claude-physics';
import ClaudeChemistry14 from '../../../../.claude/14-claude-chemistry';
import ClaudeEirian15 from '../../../../.claude/15-claude-eirian';
import ClaudeInexplicablePhenomena16 from '../../../../.claude/16-claude-inexplicable-phenomena';
import ClaudeLearning17 from '../../../../.claude/17-claude-learning';
import ClaudeNikolai18 from '../../../../.claude/18-claude-nikolai';
import ClaudeTurkey19 from '../../../../.claude/19-claude-turkey';
import ClaudeCareer20 from '../../../../.claude/20-claude-career';
import ClaudeGrammar21 from '../../../../.claude/21-claude-grammar';
import ClaudeLife22 from '../../../../.claude/22-claude-life';
import ClaudeNeuroscience23 from '../../../../.claude/23-claude-neuroscience';
import ClaudeSeren24 from '../../../../.claude/24-claude-seren';
import ClaudeResume25 from '../../../../.claude/25-claude-resume';
import ClaudeScience26 from '../../../../.claude/26-claude-science';
import ClaudeTheHardProblem27 from '../../../../.claude/27-claude-the-hard-problem';
import ClaudeClaude28 from '../../../../.claude/28-claude-claude';
import ClaudeFitness29 from '../../../../.claude/29-claude-fitness';
import ClaudePassiveIncome30 from '../../../../.claude/30-claude-passive-income';
import ClaudeCode31 from '../../../../.claude/31-claude-code';
import TheAccountso1 from '../../../../.claude/o1-the-accounts';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {OurConversations1()}
        {ClaudesReferenceManual3()}
        {ClaudesDesign4()}
        {ClaudeMiscellaneous5()}
        {ClaudeRussia6()}
        {ClaudeGeorgia7()}
        {ClaudeAnaStudiesEnglish8()}
        {ClaudeInvesting9()}
        {ClaudeDnaPatternity10()}
        {ClaudeNumberTheory11()}
        {ClaudeSemanticReferenceTheory12()}
        {ClaudePhysics13()}
        {ClaudeChemistry14()}
        {ClaudeEirian15()}
        {ClaudeInexplicablePhenomena16()}
        {ClaudeLearning17()}
        {ClaudeNikolai18()}
        {ClaudeTurkey19()}
        {ClaudeCareer20()}
        {ClaudeGrammar21()}
        {ClaudeLife22()}
        {ClaudeNeuroscience23()}
        {ClaudeSeren24()}
        {ClaudeResume25()}
        {ClaudeScience26()}
        {ClaudeTheHardProblem27()}
        {ClaudeClaude28()}
        {ClaudeFitness29()}
        {ClaudePassiveIncome30()}
        {ClaudeCode31()}
        {TheAccountso1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
