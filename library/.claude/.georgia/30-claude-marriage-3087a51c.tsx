import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--marriage--3087a51c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--marriage--3087a51c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[15 February 2026](2026-02-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Marriage ]]( claude--Marriage--3087a51c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 February 2026: <Means>$[[ Marriage ]]( claude--Marriage--3087a51c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
