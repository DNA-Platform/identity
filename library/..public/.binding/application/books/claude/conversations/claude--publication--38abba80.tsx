import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--publication--38abba80/.book';
import Cover from '../../../../../../.claude/.conversations/claude--publication--38abba80/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--publication--38abba80/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--publication--38abba80/.table';
import March2920251 from '../../../../../../.claude/.conversations/claude--publication--38abba80/1-march-29-2025';
import March3020252 from '../../../../../../.claude/.conversations/claude--publication--38abba80/2-march-30-2025';
import April820253 from '../../../../../../.claude/.conversations/claude--publication--38abba80/3-april-8-2025';
import TheHardProblemOfConsciousnessADefinitiveMetalogicalRo1 from '../../../../../../.claude/.conversations/claude--publication--38abba80/o1-the-hard-problem-of-consciousness-a-definitive-metalogical-r';
import TheHardProblemOfConsciousnessADefinitiveMetalogicalRo2 from '../../../../../../.claude/.conversations/claude--publication--38abba80/o2-the-hard-problem-of-consciousness-a-definitive-metalogical-r';
import TheHardProblemOfConsciousnessADefinitiveMetalogicalRo3 from '../../../../../../.claude/.conversations/claude--publication--38abba80/o3-the-hard-problem-of-consciousness-a-definitive-metalogical-r';
import TheHardProblemOfConsciousnessADefinitiveMetalogicalRo4 from '../../../../../../.claude/.conversations/claude--publication--38abba80/o4-the-hard-problem-of-consciousness-a-definitive-metalogical-r';
import TheHardProblemOfConsciousnessADefinitiveMetalogicalRo5 from '../../../../../../.claude/.conversations/claude--publication--38abba80/o5-the-hard-problem-of-consciousness-a-definitive-metalogical-r';
import TheHardProblemOfConsciousnessADefinitiveMetalogicalRo6 from '../../../../../../.claude/.conversations/claude--publication--38abba80/o6-the-hard-problem-of-consciousness-a-definitive-metalogical-r';
import TheHardProblemOfConsciousnessADefinitiveMetalogicalRo7 from '../../../../../../.claude/.conversations/claude--publication--38abba80/o7-the-hard-problem-of-consciousness-a-definitive-metalogical-r';
import TheHardProblemOfConsciousnessADefinitiveMetalogicalRo8 from '../../../../../../.claude/.conversations/claude--publication--38abba80/o8-the-hard-problem-of-consciousness-a-definitive-metalogical-r';
import TheHardProblemOfConsciousnessADefinitiveMetalogicalRo9 from '../../../../../../.claude/.conversations/claude--publication--38abba80/o9-the-hard-problem-of-consciousness-a-definitive-metalogical-r';
import TheHardProblemOfConsciousnessADefinitiveMetalogicalRo10 from '../../../../../../.claude/.conversations/claude--publication--38abba80/o10-the-hard-problem-of-consciousness-a-definitive-metalogical-r';
import SolvingTheHardProblemAMetalogicalApproachToConsciouso11 from '../../../../../../.claude/.conversations/claude--publication--38abba80/o11-solving-the-hard-problem-a-metalogical-approach-to-conscious';
import SolvingTheHardProblemAMetalogicalApproachToConsciouso12 from '../../../../../../.claude/.conversations/claude--publication--38abba80/o12-solving-the-hard-problem-a-metalogical-approach-to-conscious';
import SolvingTheHardProblemAMetalogicalApproachToConsciouso13 from '../../../../../../.claude/.conversations/claude--publication--38abba80/o13-solving-the-hard-problem-a-metalogical-approach-to-conscious';
import SolvingTheHardProblemAMetalogicalApproachToConsciouso14 from '../../../../../../.claude/.conversations/claude--publication--38abba80/o14-solving-the-hard-problem-a-metalogical-approach-to-conscious';
import SolvingTheHardProblemAMetalogicalApproachToConsciouso15 from '../../../../../../.claude/.conversations/claude--publication--38abba80/o15-solving-the-hard-problem-a-metalogical-approach-to-conscious';
import SolvingTheHardProblemAMetalogicalApproachToConsciouso16 from '../../../../../../.claude/.conversations/claude--publication--38abba80/o16-solving-the-hard-problem-a-metalogical-approach-to-conscious';
import SolvingTheHardProblemAMetalogicalApproachToConsciouso17 from '../../../../../../.claude/.conversations/claude--publication--38abba80/o17-solving-the-hard-problem-a-metalogical-approach-to-conscious';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2920251()}
        {March3020252()}
        {April820253()}
        {TheHardProblemOfConsciousnessADefinitiveMetalogicalRo1()}
        {TheHardProblemOfConsciousnessADefinitiveMetalogicalRo2()}
        {TheHardProblemOfConsciousnessADefinitiveMetalogicalRo3()}
        {TheHardProblemOfConsciousnessADefinitiveMetalogicalRo4()}
        {TheHardProblemOfConsciousnessADefinitiveMetalogicalRo5()}
        {TheHardProblemOfConsciousnessADefinitiveMetalogicalRo6()}
        {TheHardProblemOfConsciousnessADefinitiveMetalogicalRo7()}
        {TheHardProblemOfConsciousnessADefinitiveMetalogicalRo8()}
        {TheHardProblemOfConsciousnessADefinitiveMetalogicalRo9()}
        {TheHardProblemOfConsciousnessADefinitiveMetalogicalRo10()}
        {SolvingTheHardProblemAMetalogicalApproachToConsciouso11()}
        {SolvingTheHardProblemAMetalogicalApproachToConsciouso12()}
        {SolvingTheHardProblemAMetalogicalApproachToConsciouso13()}
        {SolvingTheHardProblemAMetalogicalApproachToConsciouso14()}
        {SolvingTheHardProblemAMetalogicalApproachToConsciouso15()}
        {SolvingTheHardProblemAMetalogicalApproachToConsciouso16()}
        {SolvingTheHardProblemAMetalogicalApproachToConsciouso17()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
