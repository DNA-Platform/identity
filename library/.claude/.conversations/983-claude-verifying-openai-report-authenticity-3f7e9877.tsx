import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
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
