import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/investing-around-ukraine-war-outcomes/.cover.tsx';
import TheSynopsis from '../.conversations/investing-around-ukraine-war-outcomes/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Investing around Ukraine war outcomes ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 28 July 2026: <Means>$[[ Investing around Ukraine war outcomes ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
