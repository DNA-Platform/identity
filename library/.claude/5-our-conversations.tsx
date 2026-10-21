import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../.manual/.book';
import TheCover from './.conversations/.cover.tsx';
import TheSynopsis from './.conversations/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[21 October 2026](2026-10-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Our Conversations ]]</Title>
        <Paragraph>
            <Caption />
            All of them, newest first: <Means>$[[ Our Conversations ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
