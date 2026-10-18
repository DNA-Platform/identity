import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--code-review-and-test-writing--dbf8297a/.cover.tsx';
import TheSynopsis from './claude--code-review-and-test-writing--dbf8297a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2025</Part>
        <Dated>
            <Date>[3 November 2025](2025-11-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Code review and test writing ]]( claude--Code review and test writing--dbf8297a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 16 exchanges: <Means>$[[ Code review and test writing ]]( claude--Code review and test writing--dbf8297a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
