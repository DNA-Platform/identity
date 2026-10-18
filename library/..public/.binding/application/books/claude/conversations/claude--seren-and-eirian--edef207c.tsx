import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/.table';
import January1420251 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/1-january-14-2025';
import January1520252 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/2-january-15-2025';
import January1620253 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/3-january-16-2025';
import January1720254 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/4-january-17-2025';
import January1820255 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/5-january-18-2025';
import January1920256 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/6-january-19-2025';
import January2320257 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/7-january-23-2025';
import January2420258 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/8-january-24-2025';
import January2520259 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/9-january-25-2025';
import February4202510 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/10-february-4-2025';
import February10202511 from '../../../../../../.claude/.conversations/claude--seren-and-eirian--edef207c/11-february-10-2025';
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
        {January1420251()}
        {January1520252()}
        {January1620253()}
        {January1720254()}
        {January1820255()}
        {January1920256()}
        {January2320257()}
        {January2420258()}
        {January2520259()}
        {February4202510()}
        {February10202511()}
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
