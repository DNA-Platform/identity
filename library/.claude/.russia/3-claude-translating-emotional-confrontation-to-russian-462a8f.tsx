import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--translating-emotional-confrontation-to-russian--462a8f9d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--translating-emotional-confrontation-to-russian--462a8f9d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[15 March 2026](2026-03-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translating emotional confrontation to Russian ]]( claude--Translating emotional confrontation to Russian--462a8f9d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 March 2026: <Means>$[[ Translating emotional confrontation to Russian ]]( claude--Translating emotional confrontation to Russian--462a8f9d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
