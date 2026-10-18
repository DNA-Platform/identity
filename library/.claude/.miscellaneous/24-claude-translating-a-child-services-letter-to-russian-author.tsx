import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--translating-a-child-services-letter-to-russian-authorities--bff59796/.cover.tsx';
import TheSynopsis from '../.conversations/claude--translating-a-child-services-letter-to-russian-authorities--bff59796/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>December 2025</Part>
        <Dated>
            <Date>[10 December 2025](2025-12-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translating a child services letter to Russian authorities ]]( claude--Translating a child services letter to Russian authorities--bff59796 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 December 2025: <Means>$[[ Translating a child services letter to Russian authorities ]]( claude--Translating a child services letter to Russian authorities--bff59796 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
