import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--claritin-safety-for-children--5c8c3502/.cover.tsx';
import TheSynopsis from '../.conversations/claude--claritin-safety-for-children--5c8c3502/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[14 April 2026](2026-04-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Claritin safety for children ]]( claude--Claritin safety for children--5c8c3502 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 April 2026: <Means>$[[ Claritin safety for children ]]( claude--Claritin safety for children--5c8c3502 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
