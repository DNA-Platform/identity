import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.career/.book';
import Cover from '../../../../../.claude/.career/.cover';
import Synopsis from '../../../../../.claude/.career/.synopsis';
import Table from '../../../../../.claude/.career/.table';
import TheProject1 from '../../../../../.claude/.career/1-the-project';
import WorkProfile2 from '../../../../../.claude/.career/2-work-profile';
import TheDefinitionOfExperiment3 from '../../../../../.claude/.career/3-the-definition-of-experiment';
import ClaudeWorkProfileReviewAndConversationContextE4b90c2c4 from '../../../../../.claude/.career/4-claude-work-profile-review-and-conversation-context-e4b90c2c';
import ClaudeReviewingWorkProfileAndSkillAssessment416413f65 from '../../../../../.claude/.career/5-claude-reviewing-work-profile-and-skill-assessment-416413f6';
import ClaudeDevutilsAndTypingmindMarketSuccessStory918c27776 from '../../../../../.claude/.career/6-claude-devutils-and-typingmind-market-success-story-918c2777';
import ClaudeSynthesizingACareerAcrossNeuroscienceEngineering7 from '../../../../../.claude/.career/7-claude-synthesizing-a-career-across-neuroscience-engineering';
import ClaudeEvaluatingAClaudeCodeTemplateForBestPractices8 from '../../../../../.claude/.career/8-claude-evaluating-a-claude-code-template-for-best-practices';
import ClaudeReferentialSemanticsForObjectiveMechanics03d00b29 from '../../../../../.claude/.career/9-claude-referential-semantics-for-objective-mechanics-03d00b2';
import ClaudeCompetitorWebsiteResearchAndDesignInspirationDf10 from '../../../../../.claude/.career/10-claude-competitor-website-research-and-design-inspiration-df';
import ClaudeAgentfireClickmapMarketResearch2fddebcb11 from '../../../../../.claude/.career/11-claude-agentfire-clickmap-market-research-2fddebcb';
import ClaudeExperimentSpecificationFrameworkForWikiBasedMar12 from '../../../../../.claude/.career/12-claude-experiment-specification-framework-for-wiki-based-mar';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheProject1()}
        {WorkProfile2()}
        {TheDefinitionOfExperiment3()}
        {ClaudeWorkProfileReviewAndConversationContextE4b90c2c4()}
        {ClaudeReviewingWorkProfileAndSkillAssessment416413f65()}
        {ClaudeDevutilsAndTypingmindMarketSuccessStory918c27776()}
        {ClaudeSynthesizingACareerAcrossNeuroscienceEngineering7()}
        {ClaudeEvaluatingAClaudeCodeTemplateForBestPractices8()}
        {ClaudeReferentialSemanticsForObjectiveMechanics03d00b29()}
        {ClaudeCompetitorWebsiteResearchAndDesignInspirationDf10()}
        {ClaudeAgentfireClickmapMarketResearch2fddebcb11()}
        {ClaudeExperimentSpecificationFrameworkForWikiBasedMar12()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
