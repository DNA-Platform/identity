import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/the-price-of-gram-is-getting-h/.cover.tsx';
import TheSynopsis from '../.conversations/the-price-of-gram-is-getting-h/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ the price of gram is getting h… ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 August 2026: <Means>$[[ the price of gram is getting h… ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
