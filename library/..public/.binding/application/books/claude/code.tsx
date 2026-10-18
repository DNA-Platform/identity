import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.code/.book';
import Cover from '../../../../../.claude/.code/.cover';
import Synopsis from '../../../../../.claude/.code/.synopsis';
import Table from '../../../../../.claude/.code/.table';
import TheProject1 from '../../../../../.claude/.code/1-the-project';
import ClaudeDispatchingCodeToRemoteLinuxWorkstation4fa3765a2 from '../../../../../.claude/.code/2-claude-dispatching-code-to-remote-linux-workstation-4fa3765a';
import ClaudeTheGenesisOfWriting0e9fbdd13 from '../../../../../.claude/.code/3-claude-the-genesis-of-writing-0e9fbdd1';
import ClaudeVerifyingOpenaiReportAuthenticity3f7e98774 from '../../../../../.claude/.code/4-claude-verifying-openai-report-authenticity-3f7e9877';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheProject1()}
        {ClaudeDispatchingCodeToRemoteLinuxWorkstation4fa3765a2()}
        {ClaudeTheGenesisOfWriting0e9fbdd13()}
        {ClaudeVerifyingOpenaiReportAuthenticity3f7e98774()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
