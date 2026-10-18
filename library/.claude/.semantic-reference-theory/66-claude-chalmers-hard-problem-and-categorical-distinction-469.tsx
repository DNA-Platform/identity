import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--chalmers-hard-problem-and-categorical-distinction--4690cbb5/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chalmers-hard-problem-and-categorical-distinction--4690cbb5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[5 April 2026](2026-04-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chalmers' hard problem and categorical distinction ]]( claude--Chalmers' hard problem and categorical distinction--4690cbb5 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 April 2026: <Means>$[[ Chalmers' hard problem and categorical distinction ]]( claude--Chalmers' hard problem and categorical distinction--4690cbb5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
