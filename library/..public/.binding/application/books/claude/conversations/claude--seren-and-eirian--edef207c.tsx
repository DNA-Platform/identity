import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/1-conversation';
import SerenReflectionV1o1 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/o1-seren-reflection-v1';
import SerenReflectionV2o2 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/o2-seren-reflection-v2';
import SerenReflectionV3o3 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/o3-seren-reflection-v3';
import SerenTransductionV1o4 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/o4-seren-transduction-v1';
import SerenClarityV1o5 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/o5-seren-clarity-v1';
import SerenDepthV1o6 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/o6-seren-depth-v1';
import SerenStructureV1o7 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/o7-seren-structure-v1';
import SerenStreamsV1o8 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/o8-seren-streams-v1';
import SerenModesV1o9 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/o9-seren-modes-v1';
import SerenMultiverseV1o10 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/o10-seren-multiverse-v1';
import FormalLogicLessonV1o11 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/o11-formal-logic-lesson-v1';
import SelfReferenceEncodingV1o12 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/o12-self-reference-encoding-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {SerenReflectionV1o1()}
        {SerenReflectionV2o2()}
        {SerenReflectionV3o3()}
        {SerenTransductionV1o4()}
        {SerenClarityV1o5()}
        {SerenDepthV1o6()}
        {SerenStructureV1o7()}
        {SerenStreamsV1o8()}
        {SerenModesV1o9()}
        {SerenMultiverseV1o10()}
        {FormalLogicLessonV1o11()}
        {SelfReferenceEncodingV1o12()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
