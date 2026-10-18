import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--chemistry-code-debugging-session--7e9e7033/.book';
import Cover from '../../../../../../.claude/.conversations/claude--chemistry-code-debugging-session--7e9e7033/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--chemistry-code-debugging-session--7e9e7033/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--chemistry-code-debugging-session--7e9e7033/.table';
import October220251 from '../../../../../../.claude/.conversations/claude--chemistry-code-debugging-session--7e9e7033/1-october-2-2025';
import October320252 from '../../../../../../.claude/.conversations/claude--chemistry-code-debugging-session--7e9e7033/2-october-3-2025';
import ChemistryFrameworkFixesV1o1 from '../../../../../../.claude/.conversations/claude--chemistry-code-debugging-session--7e9e7033/o1-chemistry-framework-fixes-v1';
import ChemistryFrameworkChildBindingFixesV1o2 from '../../../../../../.claude/.conversations/claude--chemistry-code-debugging-session--7e9e7033/o2-chemistry-framework-child-binding-fixes-v1';
import SimplifiedAugmentnodeMethodV1o3 from '../../../../../../.claude/.conversations/claude--chemistry-code-debugging-session--7e9e7033/o3-simplified-augmentnode-method-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October220251()}
        {October320252()}
        {ChemistryFrameworkFixesV1o1()}
        {ChemistryFrameworkChildBindingFixesV1o2()}
        {SimplifiedAugmentnodeMethodV1o3()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
