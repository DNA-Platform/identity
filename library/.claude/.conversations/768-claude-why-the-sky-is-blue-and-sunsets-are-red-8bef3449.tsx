import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--why-the-sky-is-blue-and-sunsets-are-red--8bef3449/.cover.tsx';
import TheSynopsis from './claude--why-the-sky-is-blue-and-sunsets-are-red--8bef3449/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Why the sky is blue and sunsets are red ]]( claude--Why the sky is blue and sunsets are red--8bef3449 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Why the sky is blue and sunsets are red ]]( claude--Why the sky is blue and sunsets are red--8bef3449 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
