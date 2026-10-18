import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--georgias-nicotine-cap-for-vapes--f7847680/.cover.tsx';
import TheSynopsis from '../.conversations/claude--georgias-nicotine-cap-for-vapes--f7847680/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgia's nicotine cap for vapes ]]( claude--Georgia's nicotine cap for vapes--f7847680 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 February 2026: <Means>$[[ Georgia's nicotine cap for vapes ]]( claude--Georgia's nicotine cap for vapes--f7847680 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
