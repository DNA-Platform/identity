import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--chalmers-hard-problem-and-categorical-distinction--4690cbb5/.cover.tsx';
import TheSynopsis from './claude--chalmers-hard-problem-and-categorical-distinction--4690cbb5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[5 April 2026](2026-04-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chalmers' hard problem and categorical distinction ]]( claude--Chalmers' hard problem and categorical distinction--4690cbb5 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 36 exchanges: <Means>$[[ Chalmers' hard problem and categorical distinction ]]( claude--Chalmers' hard problem and categorical distinction--4690cbb5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
