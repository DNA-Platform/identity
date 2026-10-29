import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--microstock-metadata-research-and-keyword-strategy-plan--4d245f0b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--microstock-metadata-research-and-keyword-strategy-plan--4d245f0b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[17 March 2026](2026-03-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Microstock metadata research and keyword strategy plan ]]( claude--Microstock metadata research and keyword strategy plan--4d245f0b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 March 2026: <Means>$[[ Microstock metadata research and keyword strategy plan ]]( claude--Microstock metadata research and keyword strategy plan--4d245f0b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
