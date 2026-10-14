import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/foundations-types-and-properties/.cover.tsx';
import TheSynopsis from '../.conversations/foundations-types-and-properties/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Foundations: Types &amp; Properties ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 August 2026: <Means>$[[ Foundations: Types &amp; Properties ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
