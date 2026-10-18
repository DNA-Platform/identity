import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--chemistry-ts-framework-analysis--ef057ccf/.book';
import Cover from '../../../../../../.claude/.conversations/claude--chemistry-ts-framework-analysis--ef057ccf/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--chemistry-ts-framework-analysis--ef057ccf/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--chemistry-ts-framework-analysis--ef057ccf/.table';
import September2620251 from '../../../../../../.claude/.conversations/claude--chemistry-ts-framework-analysis--ef057ccf/1-september-26-2025';
import October220252 from '../../../../../../.claude/.conversations/claude--chemistry-ts-framework-analysis--ef057ccf/2-october-2-2025';
import ChemistryFrameworkDeepTechnicalAnalysisV1o1 from '../../../../../../.claude/.conversations/claude--chemistry-ts-framework-analysis--ef057ccf/o1-chemistry-framework-deep-technical-analysis-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September2620251()}
        {October220252()}
        {ChemistryFrameworkDeepTechnicalAnalysisV1o1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
