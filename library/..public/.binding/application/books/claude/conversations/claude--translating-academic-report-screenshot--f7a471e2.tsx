import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--translating-academic-report-screenshot--f7a471e2/.book';
import Cover from '../../../../../../.claude/.conversations/claude--translating-academic-report-screenshot--f7a471e2/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--translating-academic-report-screenshot--f7a471e2/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--translating-academic-report-screenshot--f7a471e2/.table';
import September2920251 from '../../../../../../.claude/.conversations/claude--translating-academic-report-screenshot--f7a471e2/1-september-29-2025';
import September3020252 from '../../../../../../.claude/.conversations/claude--translating-academic-report-screenshot--f7a471e2/2-september-30-2025';
import KatyasWeeklyProgressReportEnglishTranslationV1o1 from '../../../../../../.claude/.conversations/claude--translating-academic-report-screenshot--f7a471e2/o1-katyas-weekly-progress-report-english-translation-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September2920251()}
        {September3020252()}
        {KatyasWeeklyProgressReportEnglishTranslationV1o1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
