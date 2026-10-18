import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--extending-vscode-with-custom-file-modification-apis--c29707c0/.book';
import Cover from '../../../../../../.claude/.conversations/claude--extending-vscode-with-custom-file-modification-apis--c29707c0/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--extending-vscode-with-custom-file-modification-apis--c29707c0/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--extending-vscode-with-custom-file-modification-apis--c29707c0/.table';
import February2020251 from '../../../../../../.claude/.conversations/claude--extending-vscode-with-custom-file-modification-apis--c29707c0/1-february-20-2025';
import LanguageAgnosticFileModificationApiV1o1 from '../../../../../../.claude/.conversations/claude--extending-vscode-with-custom-file-modification-apis--c29707c0/o1-language-agnostic-file-modification-api-v1';
import TypescriptSourceFileExtensionV1o2 from '../../../../../../.claude/.conversations/claude--extending-vscode-with-custom-file-modification-apis--c29707c0/o2-typescript-source-file-extension-v1';
import PackageJsonCommandRegistrationV1o3 from '../../../../../../.claude/.conversations/claude--extending-vscode-with-custom-file-modification-apis--c29707c0/o3-package-json-command-registration-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February2020251()}
        {LanguageAgnosticFileModificationApiV1o1()}
        {TypescriptSourceFileExtensionV1o2()}
        {PackageJsonCommandRegistrationV1o3()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
