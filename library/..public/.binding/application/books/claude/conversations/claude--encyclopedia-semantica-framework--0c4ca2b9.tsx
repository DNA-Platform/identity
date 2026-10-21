import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--encyclopedia-semantica-framework--0c4ca2b9/.book';
import Cover from '../../../../../../.claude/.conversations/claude--encyclopedia-semantica-framework--0c4ca2b9/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--encyclopedia-semantica-framework--0c4ca2b9/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--encyclopedia-semantica-framework--0c4ca2b9/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--encyclopedia-semantica-framework--0c4ca2b9/1-conversation';
import FixesNeededForEncyclopediaSemanticaNextJsAppV1o1 from '../../../../../../.claude/.conversations/claude--encyclopedia-semantica-framework--0c4ca2b9/o1-fixes-needed-for-encyclopedia-semantica-next-js-app-v1';
import FixedLayoutTsxWithStyledcomponentsregistryV1o2 from '../../../../../../.claude/.conversations/claude--encyclopedia-semantica-framework--0c4ca2b9/o2-fixed-layout-tsx-with-styledcomponentsregistry-v1';
import DebuggingTheRegistryImportIssueV1o3 from '../../../../../../.claude/.conversations/claude--encyclopedia-semantica-framework--0c4ca2b9/o3-debugging-the-registry-import-issue-v1';
import StaticExportCompatibleSolutionV1o4 from '../../../../../../.claude/.conversations/claude--encyclopedia-semantica-framework--0c4ca2b9/o4-static-export-compatible-solution-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {FixesNeededForEncyclopediaSemanticaNextJsAppV1o1()}
        {FixedLayoutTsxWithStyledcomponentsregistryV1o2()}
        {DebuggingTheRegistryImportIssueV1o3()}
        {StaticExportCompatibleSolutionV1o4()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
