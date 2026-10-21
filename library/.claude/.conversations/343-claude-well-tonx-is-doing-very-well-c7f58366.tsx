import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--well-tonx-is-doing-very-well--c7f58366/.cover.tsx';
import TheSynopsis from './claude--well-tonx-is-doing-very-well--c7f58366/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[22 March 2026](2026-03-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Well TONX is doing very well.… ]]( claude--Well TONX is doing very well..…--c7f58366 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 38 exchanges: <Means>$[[ Well TONX is doing very well.… ]]( claude--Well TONX is doing very well..…--c7f58366 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
