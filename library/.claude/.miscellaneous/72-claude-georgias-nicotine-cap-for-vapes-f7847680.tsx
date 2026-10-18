import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--georgias-nicotine-cap-for-vapes--f7847680/.cover.tsx';
import TheSynopsis from '../.conversations/claude--georgias-nicotine-cap-for-vapes--f7847680/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[15 February 2026](2026-02-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgia's nicotine cap for vapes ]]( claude--Georgia's nicotine cap for vapes--f7847680 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 February 2026: <Means>$[[ Georgia's nicotine cap for vapes ]]( claude--Georgia's nicotine cap for vapes--f7847680 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
