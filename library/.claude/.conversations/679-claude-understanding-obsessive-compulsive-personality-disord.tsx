import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--understanding-obsessive-compulsive-personality-disorder--896c8a60/.cover.tsx';
import TheSynopsis from './claude--understanding-obsessive-compulsive-personality-disorder--896c8a60/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[4 November 2024](2024-11-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding Obsessive-Compulsive Personality Disorder ]]( claude--Understanding Obsessive-Compulsive Personality Disorder--896c8a60 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Understanding Obsessive-Compulsive Personality Disorder ]]( claude--Understanding Obsessive-Compulsive Personality Disorder--896c8a60 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
