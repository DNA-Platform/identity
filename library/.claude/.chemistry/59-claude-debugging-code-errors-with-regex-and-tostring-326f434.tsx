import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--debugging-code-errors-with-regex-and-tostring--326f434c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--debugging-code-errors-with-regex-and-tostring--326f434c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Debugging code errors with regex and toString ]]( claude--Debugging code errors with regex and toString--326f434c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 November 2025: <Means>$[[ Debugging code errors with regex and toString ]]( claude--Debugging code errors with regex and toString--326f434c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
