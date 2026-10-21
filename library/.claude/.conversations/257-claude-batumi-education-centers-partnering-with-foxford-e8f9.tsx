import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--batumi-education-centers-partnering-with-foxford--e8f94338/.cover.tsx';
import TheSynopsis from './claude--batumi-education-centers-partnering-with-foxford--e8f94338/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[15 January 2026](2026-01-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Batumi education centers partnering with Foxford ]]( claude--Batumi education centers partnering with Foxford--e8f94338 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Batumi education centers partnering with Foxford ]]( claude--Batumi education centers partnering with Foxford--e8f94338 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
