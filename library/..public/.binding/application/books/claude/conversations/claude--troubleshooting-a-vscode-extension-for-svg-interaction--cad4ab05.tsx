import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--troubleshooting-a-vscode-extension-for-svg-interaction--cad4ab05/.book';
import Cover from '../../../../../../.claude/.conversations/claude--troubleshooting-a-vscode-extension-for-svg-interaction--cad4ab05/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--troubleshooting-a-vscode-extension-for-svg-interaction--cad4ab05/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--troubleshooting-a-vscode-extension-for-svg-interaction--cad4ab05/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--troubleshooting-a-vscode-extension-for-svg-interaction--cad4ab05/1-conversation';
import VscodeSvgReplExtensionV1o1 from '../../../../../../.claude/.conversations/claude--troubleshooting-a-vscode-extension-for-svg-interaction--cad4ab05/o1-vscode-svg-repl-extension-v1';
import VscodeSvgReplExtensionV2o2 from '../../../../../../.claude/.conversations/claude--troubleshooting-a-vscode-extension-for-svg-interaction--cad4ab05/o2-vscode-svg-repl-extension-v2';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {VscodeSvgReplExtensionV1o1()}
        {VscodeSvgReplExtensionV2o2()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
