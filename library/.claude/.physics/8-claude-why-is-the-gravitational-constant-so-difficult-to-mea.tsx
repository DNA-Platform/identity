import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--why-is-the-gravitational-constant-so-difficult-to-measure--67a6e6eb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--why-is-the-gravitational-constant-so-difficult-to-measure--67a6e6eb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[24 April 2026](2026-04-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Why is the gravitational constant so difficult to measure ]]( claude--Why is the gravitational constant so difficult to measure--67a6e6eb )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 April 2026: <Means>$[[ Why is the gravitational constant so difficult to measure ]]( claude--Why is the gravitational constant so difficult to measure--67a6e6eb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
