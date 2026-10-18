import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--georgias-nicotine-cap-for-vapes--f7847680/.cover.tsx';
import TheSynopsis from './claude--georgias-nicotine-cap-for-vapes--f7847680/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[15 February 2026](2026-02-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgia's nicotine cap for vapes ]]( claude--Georgia's nicotine cap for vapes--f7847680 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 22 exchanges: <Means>$[[ Georgia's nicotine cap for vapes ]]( claude--Georgia's nicotine cap for vapes--f7847680 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
