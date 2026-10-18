import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/.book';
import Cover from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/.table';
import September320251 from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/1-september-3-2025';
import September420252 from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/2-september-4-2025';
import September520253 from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/3-september-5-2025';
import FixedChemistry2TsV1o1 from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/o1-fixed-chemistry2-ts-v1';
import FixedChemistry2TsWithProperUpdateSubscriptionV2o2 from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/o2-fixed-chemistry2-ts-with-proper-update-subscription-v2';
import ReactLearningPathTrackerV1o3 from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/o3-react-learning-path-tracker-v1';
import ReactLearningPathTrackerV2o4 from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/o4-react-learning-path-tracker-v2';
import ReactLearningPathTrackerV3o5 from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/o5-react-learning-path-tracker-v3';
import ReactLearningPathTrackerV4o6 from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/o6-react-learning-path-tracker-v4';
import ReactLearningPathTrackerV5o7 from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/o7-react-learning-path-tracker-v5';
import ReactLearningPathTrackerV6o8 from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/o8-react-learning-path-tracker-v6';
import ReactLearningPathTrackerV7o9 from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/o9-react-learning-path-tracker-v7';
import ReactLearningPathTrackerV8o10 from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/o10-react-learning-path-tracker-v8';
import ReactLearningPathTrackerV9o11 from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/o11-react-learning-path-tracker-v9';
import ReactLearningPathTrackerV10o12 from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/o12-react-learning-path-tracker-v10';
import ReactLearningPathTrackerV11o13 from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/o13-react-learning-path-tracker-v11';
import RefactoredBondClassV1o14 from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/o14-refactored-bond-class-v1';
import RefactoredBondClassV2o15 from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/o15-refactored-bond-class-v2';
import RefactoredBondClassV3o16 from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/o16-refactored-bond-class-v3';
import RefactoredBondClassV4o17 from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/o17-refactored-bond-class-v4';
import RefactoredBondClassV5o18 from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/o18-refactored-bond-class-v5';
import RefactoredBondClassV6o19 from '../../../../../../.claude/.conversations/claude--learning-react--519df5e6/o19-refactored-bond-class-v6';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September320251()}
        {September420252()}
        {September520253()}
        {FixedChemistry2TsV1o1()}
        {FixedChemistry2TsWithProperUpdateSubscriptionV2o2()}
        {ReactLearningPathTrackerV1o3()}
        {ReactLearningPathTrackerV2o4()}
        {ReactLearningPathTrackerV3o5()}
        {ReactLearningPathTrackerV4o6()}
        {ReactLearningPathTrackerV5o7()}
        {ReactLearningPathTrackerV6o8()}
        {ReactLearningPathTrackerV7o9()}
        {ReactLearningPathTrackerV8o10()}
        {ReactLearningPathTrackerV9o11()}
        {ReactLearningPathTrackerV10o12()}
        {ReactLearningPathTrackerV11o13()}
        {RefactoredBondClassV1o14()}
        {RefactoredBondClassV2o15()}
        {RefactoredBondClassV3o16()}
        {RefactoredBondClassV4o17()}
        {RefactoredBondClassV5o18()}
        {RefactoredBondClassV6o19()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
