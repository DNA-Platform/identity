import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--verifying-openai-report-authenticity--3f7e9877/.cover.tsx';
import TheSynopsis from './claude--verifying-openai-report-authenticity--3f7e9877/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[17 September 2026](2026-09-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Verifying OpenAI report authenticity ]]( claude--Verifying OpenAI report authenticity--3f7e9877 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Verifying OpenAI report authenticity ]]( claude--Verifying OpenAI report authenticity--3f7e9877 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
