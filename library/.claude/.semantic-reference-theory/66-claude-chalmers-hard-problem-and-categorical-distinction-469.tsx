import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--chalmers-hard-problem-and-categorical-distinction--4690cbb5/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chalmers-hard-problem-and-categorical-distinction--4690cbb5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chalmers' hard problem and categorical distinction ]]( claude--Chalmers' hard problem and categorical distinction--4690cbb5 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 April 2026: <Means>$[[ Chalmers' hard problem and categorical distinction ]]( claude--Chalmers' hard problem and categorical distinction--4690cbb5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
