import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--optimizing-extendscript-abstractions-for-illustrator--e5eb0991/.book';
import Cover from '../../../../../../.claude/.conversations/claude--optimizing-extendscript-abstractions-for-illustrator--e5eb0991/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--optimizing-extendscript-abstractions-for-illustrator--e5eb0991/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--optimizing-extendscript-abstractions-for-illustrator--e5eb0991/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--optimizing-extendscript-abstractions-for-illustrator--e5eb0991/1-conversation';
import CommandBuilderArchitectureV1o1 from '../../../../../../.claude/.conversations/claude--optimizing-extendscript-abstractions-for-illustrator--e5eb0991/o1-command-builder-architecture-v1';
import EffectAndCommandArchitectureV1o2 from '../../../../../../.claude/.conversations/claude--optimizing-extendscript-abstractions-for-illustrator--e5eb0991/o2-effect-and-command-architecture-v1';
import FuncImplementationV1o3 from '../../../../../../.claude/.conversations/claude--optimizing-extendscript-abstractions-for-illustrator--e5eb0991/o3-func-implementation-v1';
import EffectReferenceImplementationV1o4 from '../../../../../../.claude/.conversations/claude--optimizing-extendscript-abstractions-for-illustrator--e5eb0991/o4-effect-reference-implementation-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {CommandBuilderArchitectureV1o1()}
        {EffectAndCommandArchitectureV1o2()}
        {FuncImplementationV1o3()}
        {EffectReferenceImplementationV1o4()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
