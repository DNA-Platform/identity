import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--claritin-safety-for-children--5c8c3502/.cover.tsx';
import TheSynopsis from './claude--claritin-safety-for-children--5c8c3502/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[14 April 2026](2026-04-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Claritin safety for children ]]( claude--Claritin safety for children--5c8c3502 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Claritin safety for children ]]( claude--Claritin safety for children--5c8c3502 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
