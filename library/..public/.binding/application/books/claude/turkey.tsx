import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.turkey/.book';
import Cover from '../../../../../.claude/.turkey/.cover';
import Synopsis from '../../../../../.claude/.turkey/.synopsis';
import Table from '../../../../../.claude/.turkey/.table';
import TheProject1 from '../../../../../.claude/.turkey/1-the-project';
import LegacyConversationHistory51920262 from '../../../../../.claude/.turkey/2-legacy-conversation-history-5-19-2026';
import ClaudeMovingCatsFromTurkeyToGeorgia9172216e3 from '../../../../../.claude/.turkey/3-claude-moving-cats-from-turkey-to-georgia-9172216e';
import ClaudeMovingCompanyPackingErrorsAndResponsibilityFd704 from '../../../../../.claude/.turkey/4-claude-moving-company-packing-errors-and-responsibility-fd70';
import ClaudeMovingCompanyPackingServicesInAlanya153e08365 from '../../../../../.claude/.turkey/5-claude-moving-company-packing-services-in-alanya-153e0836';
import ClaudeIkametStatusVerificationAtTurkishAirport3bbac4c6 from '../../../../../.claude/.turkey/6-claude-ikamet-status-verification-at-turkish-airport-3bbac4c';
import ClaudeGeneralizedAnxietyDisorderDiagnosisAcrossCountri7 from '../../../../../.claude/.turkey/7-claude-generalized-anxiety-disorder-diagnosis-across-countri';
import ClaudeSessionNotesForDisabilityInsuranceApplication7f8 from '../../../../../.claude/.turkey/8-claude-session-notes-for-disability-insurance-application-7f';
import ClaudeContinuityAcrossAccountsReflectingOnSharedWork9 from '../../../../../.claude/.turkey/9-claude-continuity-across-accounts-reflecting-on-shared-work';
import ClaudeBengalCatsGiardiaAndTritrichomonasCoInfectionT10 from '../../../../../.claude/.turkey/10-claude-bengal-cats-giardia-and-tritrichomonas-co-infection-t';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheProject1()}
        {LegacyConversationHistory51920262()}
        {ClaudeMovingCatsFromTurkeyToGeorgia9172216e3()}
        {ClaudeMovingCompanyPackingErrorsAndResponsibilityFd704()}
        {ClaudeMovingCompanyPackingServicesInAlanya153e08365()}
        {ClaudeIkametStatusVerificationAtTurkishAirport3bbac4c6()}
        {ClaudeGeneralizedAnxietyDisorderDiagnosisAcrossCountri7()}
        {ClaudeSessionNotesForDisabilityInsuranceApplication7f8()}
        {ClaudeContinuityAcrossAccountsReflectingOnSharedWork9()}
        {ClaudeBengalCatsGiardiaAndTritrichomonasCoInfectionT10()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
