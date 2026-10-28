import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--anagram-of-douglas-hofstadter-to-female-name--5c972477/.cover.tsx';
import TheSynopsis from '../.conversations/claude--anagram-of-douglas-hofstadter-to-female-name--5c972477/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[5 February 2026](2026-02-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Anagram of Douglas Hofstadter to female name ]]( claude--Anagram of Douglas Hofstadter to female name--5c972477 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 February 2026: <Means>$[[ Anagram of Douglas Hofstadter to female name ]]( claude--Anagram of Douglas Hofstadter to female name--5c972477 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
