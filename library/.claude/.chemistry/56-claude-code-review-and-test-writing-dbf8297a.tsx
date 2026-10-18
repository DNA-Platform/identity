import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--code-review-and-test-writing--dbf8297a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--code-review-and-test-writing--dbf8297a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Code review and test writing ]]( claude--Code review and test writing--dbf8297a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 3 November 2025: <Means>$[[ Code review and test writing ]]( claude--Code review and test writing--dbf8297a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
