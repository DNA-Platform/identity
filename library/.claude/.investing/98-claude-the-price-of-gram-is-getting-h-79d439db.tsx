import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--the-price-of-gram-is-getting-h--79d439db/.cover.tsx';
import TheSynopsis from '../.conversations/claude--the-price-of-gram-is-getting-h--79d439db/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ the price of gram is getting h… ]]( claude--the price of gram is getting h…--79d439db )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 August 2026: <Means>$[[ the price of gram is getting h… ]]( claude--the price of gram is getting h…--79d439db )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
