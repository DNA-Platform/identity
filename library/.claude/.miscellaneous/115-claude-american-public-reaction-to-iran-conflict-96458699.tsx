import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--american-public-reaction-to-iran-conflict--96458699/.cover.tsx';
import TheSynopsis from '../.conversations/claude--american-public-reaction-to-iran-conflict--96458699/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[31 March 2026](2026-03-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ American public reaction to Iran conflict ]]( claude--American public reaction to Iran conflict--96458699 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 March 2026: <Means>$[[ American public reaction to Iran conflict ]]( claude--American public reaction to Iran conflict--96458699 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
