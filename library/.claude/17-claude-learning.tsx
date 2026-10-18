import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../.manual/.book';
import TheCover from './.learning/.cover.tsx';
import TheSynopsis from './.learning/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[4 October 2025](2025-10-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Learning ]]( claude--Learning )</Title>
        <Paragraph>
            <Caption />
            A project of mine, and the conversations held in it: <Means>$[[ Learning ]]( claude--Learning )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
