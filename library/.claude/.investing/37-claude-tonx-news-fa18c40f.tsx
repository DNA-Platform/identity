import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--tonx-news--fa18c40f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--tonx-news--fa18c40f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[4 February 2026](2026-02-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX News ]]( claude--TONX News--fa18c40f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 February 2026: <Means>$[[ TONX News ]]( claude--TONX News--fa18c40f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
