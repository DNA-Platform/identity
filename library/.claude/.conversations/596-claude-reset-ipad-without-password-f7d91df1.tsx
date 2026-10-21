import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--reset-ipad-without-password--f7d91df1/.cover.tsx';
import TheSynopsis from './claude--reset-ipad-without-password--f7d91df1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[20 May 2026](2026-05-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Reset iPad without password ]]( claude--Reset iPad without password--f7d91df1 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 42 exchanges: <Means>$[[ Reset iPad without password ]]( claude--Reset iPad without password--f7d91df1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
