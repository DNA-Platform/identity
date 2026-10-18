import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--russian-military-conscription-and-coercion-mechanisms--487c612d/.cover.tsx';
import TheSynopsis from './claude--russian-military-conscription-and-coercion-mechanisms--487c612d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[5 June 2026](2026-06-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian military conscription and coercion mechanisms ]]( claude--Russian military conscription and coercion mechanisms--487c612d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 26 exchanges: <Means>$[[ Russian military conscription and coercion mechanisms ]]( claude--Russian military conscription and coercion mechanisms--487c612d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
