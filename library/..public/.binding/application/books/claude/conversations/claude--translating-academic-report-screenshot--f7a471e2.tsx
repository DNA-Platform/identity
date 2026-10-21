import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--translating-academic-report-screenshot--f7a471e2/.book';
import Cover from '../../../../../../.claude/.conversations/claude--translating-academic-report-screenshot--f7a471e2/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--translating-academic-report-screenshot--f7a471e2/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--translating-academic-report-screenshot--f7a471e2/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--translating-academic-report-screenshot--f7a471e2/1-conversation';
import KatyasWeeklyProgressReportEnglishTranslationV1o1 from '../../../../../../.claude/.conversations/claude--translating-academic-report-screenshot--f7a471e2/o1-katyas-weekly-progress-report-english-translation-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {KatyasWeeklyProgressReportEnglishTranslationV1o1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
