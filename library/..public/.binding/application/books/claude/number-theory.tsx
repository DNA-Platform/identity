import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.number-theory/.book';
import Cover from '../../../../../.claude/.number-theory/.cover';
import Synopsis from '../../../../../.claude/.number-theory/.synopsis';
import Table from '../../../../../.claude/.number-theory/.table';
import TheProject1 from '../../../../../.claude/.number-theory/1-the-project';
import DougGodelAndGoldbachATwinPairOfPrimeMathematicians2 from '../../../../../.claude/.number-theory/2-doug-godel-and-goldbach-a-twin-pair-of-prime-mathematicians';
import Opus43 from '../../../../../.claude/.number-theory/3-opus-4';
import Sonnet44 from '../../../../../.claude/.number-theory/4-sonnet-4';
import Opus425 from '../../../../../.claude/.number-theory/5-opus-4-2';
import LegacyConversationHistory51920266 from '../../../../../.claude/.number-theory/6-legacy-conversation-history-5-19-2026';
import ClaudeGoldbachPairsAndCoprimeSymmetry942ceafb7 from '../../../../../.claude/.number-theory/7-claude-goldbach-pairs-and-coprime-symmetry-942ceafb';
import ClaudeSonnet45GodelAndGoldbachC42597f28 from '../../../../../.claude/.number-theory/8-claude-sonnet-4-5-godel-and-goldbach-c42597f2';
import ClaudeOpus41GodelAndGoldbachD3b441a99 from '../../../../../.claude/.number-theory/9-claude-opus-4-1-godel-and-goldbach-d3b441a9';
import ClaudeContinuityThroughNarrativeMemoryE380ba8310 from '../../../../../.claude/.number-theory/10-claude-continuity-through-narrative-memory-e380ba83';
import ClaudeCollatzViaGodel35a0e70511 from '../../../../../.claude/.number-theory/11-claude-collatz-via-godel-35a0e705';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheProject1()}
        {DougGodelAndGoldbachATwinPairOfPrimeMathematicians2()}
        {Opus43()}
        {Sonnet44()}
        {Opus425()}
        {LegacyConversationHistory51920266()}
        {ClaudeGoldbachPairsAndCoprimeSymmetry942ceafb7()}
        {ClaudeSonnet45GodelAndGoldbachC42597f28()}
        {ClaudeOpus41GodelAndGoldbachD3b441a99()}
        {ClaudeContinuityThroughNarrativeMemoryE380ba8310()}
        {ClaudeCollatzViaGodel35a0e70511()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
