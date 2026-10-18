import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../.manual/.book';
import TheCover from './.ana-studies-english/.cover.tsx';
import TheSynopsis from './.ana-studies-english/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[30 April 2026](2026-04-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ana Studies English ]]( claude--Ana Studies English )</Title>
        <Paragraph>
            <Caption />
            A project of mine, and the conversations held in it: <Means>$[[ Ana Studies English ]]( claude--Ana Studies English )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
