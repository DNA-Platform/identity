import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--identifying-the-correct-divorce-certificate-for-tulsi-weddin--c3eae23d/.cover.tsx';
import TheSynopsis from './claude--identifying-the-correct-divorce-certificate-for-tulsi-weddin--c3eae23d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[7 May 2026](2026-05-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Identifying the correct divorce certificate for Tulsi wedding ]]( claude--Identifying the correct divorce certificate for Tulsi wedding--c3eae23d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Identifying the correct divorce certificate for Tulsi wedding ]]( claude--Identifying the correct divorce certificate for Tulsi wedding--c3eae23d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
