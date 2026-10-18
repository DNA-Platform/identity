import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--react-polymorphism-with-chemistry-framework--704e9133/.book';
import Cover from '../../../../../../.claude/.conversations/claude--react-polymorphism-with-chemistry-framework--704e9133/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--react-polymorphism-with-chemistry-framework--704e9133/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--react-polymorphism-with-chemistry-framework--704e9133/.table';
import September2120251 from '../../../../../../.claude/.conversations/claude--react-polymorphism-with-chemistry-framework--704e9133/1-september-21-2025';
import BondorchestratorClassV1o1 from '../../../../../../.claude/.conversations/claude--react-polymorphism-with-chemistry-framework--704e9133/o1-bondorchestrator-class-v1';
import BondorchestratorClassV2o2 from '../../../../../../.claude/.conversations/claude--react-polymorphism-with-chemistry-framework--704e9133/o2-bondorchestrator-class-v2';
import BondorchestratorClassV3o3 from '../../../../../../.claude/.conversations/claude--react-polymorphism-with-chemistry-framework--704e9133/o3-bondorchestrator-class-v3';
import BondorchestratorClassV4o4 from '../../../../../../.claude/.conversations/claude--react-polymorphism-with-chemistry-framework--704e9133/o4-bondorchestrator-class-v4';
import BondorchestratorClassV5o5 from '../../../../../../.claude/.conversations/claude--react-polymorphism-with-chemistry-framework--704e9133/o5-bondorchestrator-class-v5';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September2120251()}
        {BondorchestratorClassV1o1()}
        {BondorchestratorClassV2o2()}
        {BondorchestratorClassV3o3()}
        {BondorchestratorClassV4o4()}
        {BondorchestratorClassV5o5()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
