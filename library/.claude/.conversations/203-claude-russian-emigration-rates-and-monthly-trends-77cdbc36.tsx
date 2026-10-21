import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--russian-emigration-rates-and-monthly-trends--77cdbc36/.cover.tsx';
import TheSynopsis from './claude--russian-emigration-rates-and-monthly-trends--77cdbc36/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[19 January 2026](2026-01-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian emigration rates and monthly trends ]]( claude--Russian emigration rates and monthly trends--77cdbc36 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ Russian emigration rates and monthly trends ]]( claude--Russian emigration rates and monthly trends--77cdbc36 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
