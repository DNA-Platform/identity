import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--batumi-education-centers-partnering-with-foxford--e8f94338/.cover.tsx';
import TheSynopsis from '../.conversations/claude--batumi-education-centers-partnering-with-foxford--e8f94338/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[15 January 2026](2026-01-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Batumi education centers partnering with Foxford ]]( claude--Batumi education centers partnering with Foxford--e8f94338 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 January 2026: <Means>$[[ Batumi education centers partnering with Foxford ]]( claude--Batumi education centers partnering with Foxford--e8f94338 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
