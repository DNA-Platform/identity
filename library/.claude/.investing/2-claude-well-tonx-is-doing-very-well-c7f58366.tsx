import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--well-tonx-is-doing-very-well--c7f58366/.cover.tsx';
import TheSynopsis from '../.conversations/claude--well-tonx-is-doing-very-well--c7f58366/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[21 March 2026](2026-03-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Well TONX is doing very well.… ]]( claude--Well TONX is doing very well..…--c7f58366 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 March 2026: <Means>$[[ Well TONX is doing very well.… ]]( claude--Well TONX is doing very well..…--c7f58366 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
