import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--formal-mathematics-and-conversational-assistance--7c2ed8e9/.book';
import Cover from '../../../../../../.claude/.conversations/claude--formal-mathematics-and-conversational-assistance--7c2ed8e9/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--formal-mathematics-and-conversational-assistance--7c2ed8e9/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--formal-mathematics-and-conversational-assistance--7c2ed8e9/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--formal-mathematics-and-conversational-assistance--7c2ed8e9/1-conversation';
import ATutorialOnFirstOrderLogicGödelsTheoremsTransfiniteo1 from '../../../../../../.claude/.conversations/claude--formal-mathematics-and-conversational-assistance--7c2ed8e9/o1-a-tutorial-on-first-order-logic-gödels-theorems-transfinite';
import ProofByObjectionANarrativeApproachToTranscendentTruto2 from '../../../../../../.claude/.conversations/claude--formal-mathematics-and-conversational-assistance--7c2ed8e9/o2-proof-by-objection-a-narrative-approach-to-transcendent-trut';
import ProofByObjectionANarrativeApproachToTranscendentTruto3 from '../../../../../../.claude/.conversations/claude--formal-mathematics-and-conversational-assistance--7c2ed8e9/o3-proof-by-objection-a-narrative-approach-to-transcendent-trut';
import OnTheFormalInexplicabilityOfSelfEvidentMetaphysicalPo4 from '../../../../../../.claude/.conversations/claude--formal-mathematics-and-conversational-assistance--7c2ed8e9/o4-on-the-formal-inexplicability-of-self-evident-metaphysical-p';
import OnTheFormalInexplicabilityOfSelfEvidentMetaphysicalPo5 from '../../../../../../.claude/.conversations/claude--formal-mathematics-and-conversational-assistance--7c2ed8e9/o5-on-the-formal-inexplicability-of-self-evident-metaphysical-p';
import OnTheFormalInexplicabilityOfSelfEvidentMetaphysicalPo6 from '../../../../../../.claude/.conversations/claude--formal-mathematics-and-conversational-assistance--7c2ed8e9/o6-on-the-formal-inexplicability-of-self-evident-metaphysical-p';
import OnTheFormalInexplicabilityOfSelfEvidentMetaphysicalPo7 from '../../../../../../.claude/.conversations/claude--formal-mathematics-and-conversational-assistance--7c2ed8e9/o7-on-the-formal-inexplicability-of-self-evident-metaphysical-p';
import OnTheFormalInexplicabilityOfSelfEvidentMetaphysicalPo8 from '../../../../../../.claude/.conversations/claude--formal-mathematics-and-conversational-assistance--7c2ed8e9/o8-on-the-formal-inexplicability-of-self-evident-metaphysical-p';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {ATutorialOnFirstOrderLogicGödelsTheoremsTransfiniteo1()}
        {ProofByObjectionANarrativeApproachToTranscendentTruto2()}
        {ProofByObjectionANarrativeApproachToTranscendentTruto3()}
        {OnTheFormalInexplicabilityOfSelfEvidentMetaphysicalPo4()}
        {OnTheFormalInexplicabilityOfSelfEvidentMetaphysicalPo5()}
        {OnTheFormalInexplicabilityOfSelfEvidentMetaphysicalPo6()}
        {OnTheFormalInexplicabilityOfSelfEvidentMetaphysicalPo7()}
        {OnTheFormalInexplicabilityOfSelfEvidentMetaphysicalPo8()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
