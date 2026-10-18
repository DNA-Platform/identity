import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.grammar/.book';
import Cover from '../../../../../.claude/.grammar/.cover';
import Synopsis from '../../../../../.claude/.grammar/.synopsis';
import Table from '../../../../../.claude/.grammar/.table';
import TheProject1 from '../../../../../.claude/.grammar/1-the-project';
import EnglishGrammarCurriculum2 from '../../../../../.claude/.grammar/2-english-grammar-curriculum';
import Cover3 from '../../../../../.claude/.grammar/3-cover';
import LegacyConversationHistory51920264 from '../../../../../.claude/.grammar/4-legacy-conversation-history-5-19-2026';
import ClaudeStructuredEnglishGrammarLearningCurriculum72ed315 from '../../../../../.claude/.grammar/5-claude-structured-english-grammar-learning-curriculum-72ed31';
import ClaudeDeixisAndDeterminersInEnglishA53ee22c6 from '../../../../../.claude/.grammar/6-claude-deixis-and-determiners-in-english-a53ee22c';
import ClaudeGrammarLessonsFromCustomCurriculumAed408827 from '../../../../../.claude/.grammar/7-claude-grammar-lessons-from-custom-curriculum-aed40882';
import ClaudeContinuityThroughNarrativeMemory4df03bdf8 from '../../../../../.claude/.grammar/8-claude-continuity-through-narrative-memory-4df03bdf';
import ClaudeAContinuationE9d9e0fb9 from '../../../../../.claude/.grammar/9-claude-a-continuation-e9d9e0fb';
import ClaudeLexemeAndWordFormDistinctionInVerbConjugation10 from '../../../../../.claude/.grammar/10-claude-lexeme-and-word-form-distinction-in-verb-conjugation';
import ClaudeBlogBiologyAndEtymologySemanticHomeostasis5fdfa11 from '../../../../../.claude/.grammar/11-claude-blog-biology-and-etymology-semantic-homeostasis-5fdfa';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheProject1()}
        {EnglishGrammarCurriculum2()}
        {Cover3()}
        {LegacyConversationHistory51920264()}
        {ClaudeStructuredEnglishGrammarLearningCurriculum72ed315()}
        {ClaudeDeixisAndDeterminersInEnglishA53ee22c6()}
        {ClaudeGrammarLessonsFromCustomCurriculumAed408827()}
        {ClaudeContinuityThroughNarrativeMemory4df03bdf8()}
        {ClaudeAContinuationE9d9e0fb9()}
        {ClaudeLexemeAndWordFormDistinctionInVerbConjugation10()}
        {ClaudeBlogBiologyAndEtymologySemanticHomeostasis5fdfa11()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
