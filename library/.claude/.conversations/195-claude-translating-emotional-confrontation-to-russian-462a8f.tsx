import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--translating-emotional-confrontation-to-russian--462a8f9d/.cover.tsx';
import TheSynopsis from './claude--translating-emotional-confrontation-to-russian--462a8f9d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[15 March 2026](2026-03-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translating emotional confrontation to Russian ]]( claude--Translating emotional confrontation to Russian--462a8f9d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Translating emotional confrontation to Russian ]]( claude--Translating emotional confrontation to Russian--462a8f9d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
