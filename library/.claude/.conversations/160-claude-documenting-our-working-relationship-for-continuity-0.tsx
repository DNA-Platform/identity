import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--documenting-our-working-relationship-for-continuity--08311e91/.cover.tsx';
import TheSynopsis from './claude--documenting-our-working-relationship-for-continuity--08311e91/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[24 May 2026](2026-05-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Documenting our working relationship for continuity ]]( claude--Documenting our working relationship for continuity--08311e91 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ Documenting our working relationship for continuity ]]( claude--Documenting our working relationship for continuity--08311e91 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
