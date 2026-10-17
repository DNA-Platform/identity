import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--well-tonx-is-doing-very-well--c7f58366/.cover.tsx';
import TheSynopsis from '../.conversations/claude--well-tonx-is-doing-very-well--c7f58366/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Well TONX is doing very well.… ]]( claude--Well TONX is doing very well..…--c7f58366 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 March 2026: <Means>$[[ Well TONX is doing very well.… ]]( claude--Well TONX is doing very well..…--c7f58366 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
