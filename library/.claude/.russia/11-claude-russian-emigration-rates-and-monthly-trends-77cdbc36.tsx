import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--russian-emigration-rates-and-monthly-trends--77cdbc36/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russian-emigration-rates-and-monthly-trends--77cdbc36/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian emigration rates and monthly trends ]]( claude--Russian emigration rates and monthly trends--77cdbc36 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 January 2026: <Means>$[[ Russian emigration rates and monthly trends ]]( claude--Russian emigration rates and monthly trends--77cdbc36 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
