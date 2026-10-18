import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--translating-a-child-services-letter-to-russian-authorities--bff59796/.cover.tsx';
import TheSynopsis from '../.conversations/claude--translating-a-child-services-letter-to-russian-authorities--bff59796/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translating a child services letter to Russian authorities ]]( claude--Translating a child services letter to Russian authorities--bff59796 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 December 2025: <Means>$[[ Translating a child services letter to Russian authorities ]]( claude--Translating a child services letter to Russian authorities--bff59796 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
