import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--remote-android-development-environment-with-encrypted-messag--4f15128b/.cover.tsx';
import TheSynopsis from './claude--remote-android-development-environment-with-encrypted-messag--4f15128b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[18 March 2026](2026-03-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Remote Android development environment with encrypted messaging ]]( claude--Remote Android development environment with encrypted messaging--4f15128b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Remote Android development environment with encrypted messaging ]]( claude--Remote Android development environment with encrypted messaging--4f15128b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
