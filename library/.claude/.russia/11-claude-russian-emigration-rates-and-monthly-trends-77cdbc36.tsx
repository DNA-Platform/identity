import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--russian-emigration-rates-and-monthly-trends--77cdbc36/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russian-emigration-rates-and-monthly-trends--77cdbc36/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[19 January 2026](2026-01-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian emigration rates and monthly trends ]]( claude--Russian emigration rates and monthly trends--77cdbc36 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 January 2026: <Means>$[[ Russian emigration rates and monthly trends ]]( claude--Russian emigration rates and monthly trends--77cdbc36 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
