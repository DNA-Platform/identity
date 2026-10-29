import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--eugene-hutzs-gypsy-heritage-authenticity--cdf3ae0c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--eugene-hutzs-gypsy-heritage-authenticity--cdf3ae0c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[7 June 2026](2026-06-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eugene Hutz's gypsy heritage authenticity ]]( claude--Eugene Hutz's gypsy heritage authenticity--cdf3ae0c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 June 2026: <Means>$[[ Eugene Hutz's gypsy heritage authenticity ]]( claude--Eugene Hutz's gypsy heritage authenticity--cdf3ae0c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
