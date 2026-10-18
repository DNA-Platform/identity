import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--translating-a-child-services-letter-to-russian-authorities--bff59796/.cover.tsx';
import TheSynopsis from './claude--translating-a-child-services-letter-to-russian-authorities--bff59796/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>December 2025</Part>
        <Dated>
            <Date>[11 December 2025](2025-12-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translating a child services letter to Russian authorities ]]( claude--Translating a child services letter to Russian authorities--bff59796 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 54 exchanges: <Means>$[[ Translating a child services letter to Russian authorities ]]( claude--Translating a child services letter to Russian authorities--bff59796 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
