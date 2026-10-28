import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--signing-up-for-apple-developer-account--fea3e3e4/.cover.tsx';
import TheSynopsis from './claude--signing-up-for-apple-developer-account--fea3e3e4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[14 November 2024](2024-11-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Signing Up for Apple Developer Account ]]( claude--Signing Up for Apple Developer Account--fea3e3e4 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 30 exchanges: <Means>$[[ Signing Up for Apple Developer Account ]]( claude--Signing Up for Apple Developer Account--fea3e3e4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
