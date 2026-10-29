import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--georgian-llc--71b8ccd3/.cover.tsx';
import TheSynopsis from '../.conversations/claude--georgian-llc--71b8ccd3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[10 May 2026](2026-05-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgian LLC ]]( claude--Georgian LLC--71b8ccd3 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 May 2026: <Means>$[[ Georgian LLC ]]( claude--Georgian LLC--71b8ccd3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
