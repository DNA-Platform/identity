import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--gout-attacks-and-alcoholism-connection--aa5cbbf8/.cover.tsx';
import TheSynopsis from '../.conversations/claude--gout-attacks-and-alcoholism-connection--aa5cbbf8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[20 January 2026](2026-01-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Gout attacks and alcoholism connection ]]( claude--Gout attacks and alcoholism connection--aa5cbbf8 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 January 2026: <Means>$[[ Gout attacks and alcoholism connection ]]( claude--Gout attacks and alcoholism connection--aa5cbbf8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
