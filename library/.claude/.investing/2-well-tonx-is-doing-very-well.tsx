import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/well-tonx-is-doing-very-well/.cover.tsx';
import TheSynopsis from '../.conversations/well-tonx-is-doing-very-well/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Well TONX is doing very well..… ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 March 2026: <Means>$[[ Well TONX is doing very well..… ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
