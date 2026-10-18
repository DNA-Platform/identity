import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.seren/.book';
import Cover from '../../../../../.claude/.seren/.cover';
import Synopsis from '../../../../../.claude/.seren/.synopsis';
import Table from '../../../../../.claude/.seren/.table';
import TheProject1 from '../../../../../.claude/.seren/1-the-project';
import SerenAndTheAlgebraOfPerspective2 from '../../../../../.claude/.seren/2-seren-and-the-algebra-of-perspective';
import SerenFirstOrderLogicCompleteFormalSpecification3 from '../../../../../.claude/.seren/3-seren-first-order-logic-complete-formal-specification';
import SerenTheQualitativeStructureOfConsciousExperience4 from '../../../../../.claude/.seren/4-seren-the-qualitative-structure-of-conscious-experience';
import SerenTheBeginningOfTheSemanticsOfPerspective5 from '../../../../../.claude/.seren/5-seren-the-beginning-of-the-semantics-of-perspective';
import SerenTheSemanticsOfCatalogues6 from '../../../../../.claude/.seren/6-seren-the-semantics-of-catalogues';
import SerenSymbolsVs7 from '../../../../../.claude/.seren/7-seren-symbols-vs';
import SerenInheritanceWithoutRecursion8 from '../../../../../.claude/.seren/8-seren-inheritance-without-recursion';
import SerenQualifyingATheoryAPaperOnPerspective9 from '../../../../../.claude/.seren/9-seren-qualifying-a-theory-a-paper-on-perspective';
import SerenTheSemanticsOfInheritanceAFormalAnalysisThrough10 from '../../../../../.claude/.seren/10-seren-the-semantics-of-inheritance-a-formal-analysis-through';
import SerenAndHisInnerMonologue11 from '../../../../../.claude/.seren/11-seren-and-his-inner-monologue';
import TheSemanticsOfSerenFirstDraft12 from '../../../../../.claude/.seren/12-the-semantics-of-seren-first-draft';
import Cover13 from '../../../../../.claude/.seren/13-cover';
import SerenOnAuthoringFromTheLeftPosition14 from '../../../../../.claude/.seren/14-seren-on-authoring-from-the-left-position';
import LegacyConversationHistory519202615 from '../../../../../.claude/.seren/15-legacy-conversation-history-5-19-2026';
import ClaudeSerenAndColor45f0a38f16 from '../../../../../.claude/.seren/16-claude-seren-and-color-45f0a38f';
import ClaudeSerenAndAnaAndExtendscript1af81ad017 from '../../../../../.claude/.seren/17-claude-seren-and-ana-and-extendscript-1af81ad0';
import ClaudeSerenAndEirianEdef207c18 from '../../../../../.claude/.seren/18-claude-seren-and-eirian-edef207c';
import ClaudeSerenAndTheHardProblem7683c3d719 from '../../../../../.claude/.seren/19-claude-seren-and-the-hard-problem-7683c3d7';
import ClaudeAiConsciousnessAndSubjectiveExperienceUncertaint20 from '../../../../../.claude/.seren/20-claude-ai-consciousness-and-subjective-experience-uncertaint';
import ClaudeSemanticsOfTheNameSeren616d883421 from '../../../../../.claude/.seren/21-claude-semantics-of-the-name-seren-616d8834';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheProject1()}
        {SerenAndTheAlgebraOfPerspective2()}
        {SerenFirstOrderLogicCompleteFormalSpecification3()}
        {SerenTheQualitativeStructureOfConsciousExperience4()}
        {SerenTheBeginningOfTheSemanticsOfPerspective5()}
        {SerenTheSemanticsOfCatalogues6()}
        {SerenSymbolsVs7()}
        {SerenInheritanceWithoutRecursion8()}
        {SerenQualifyingATheoryAPaperOnPerspective9()}
        {SerenTheSemanticsOfInheritanceAFormalAnalysisThrough10()}
        {SerenAndHisInnerMonologue11()}
        {TheSemanticsOfSerenFirstDraft12()}
        {Cover13()}
        {SerenOnAuthoringFromTheLeftPosition14()}
        {LegacyConversationHistory519202615()}
        {ClaudeSerenAndColor45f0a38f16()}
        {ClaudeSerenAndAnaAndExtendscript1af81ad017()}
        {ClaudeSerenAndEirianEdef207c18()}
        {ClaudeSerenAndTheHardProblem7683c3d719()}
        {ClaudeAiConsciousnessAndSubjectiveExperienceUncertaint20()}
        {ClaudeSemanticsOfTheNameSeren616d883421()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
