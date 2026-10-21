import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--debugging-code-errors-with-regex-and-tostring--326f434c/.cover.tsx';
import TheSynopsis from './claude--debugging-code-errors-with-regex-and-tostring--326f434c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2025</Part>
        <Dated>
            <Date>[4 November 2025](2025-11-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Debugging code errors with regex and toString ]]( claude--Debugging code errors with regex and toString--326f434c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Debugging code errors with regex and toString ]]( claude--Debugging code errors with regex and toString--326f434c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
