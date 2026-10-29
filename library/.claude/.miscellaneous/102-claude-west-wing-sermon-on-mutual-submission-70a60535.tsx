import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--west-wing-sermon-on-mutual-submission--70a60535/.cover.tsx';
import TheSynopsis from '../.conversations/claude--west-wing-sermon-on-mutual-submission--70a60535/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[22 February 2026](2026-02-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ West Wing sermon on mutual submission ]]( claude--West Wing sermon on mutual submission--70a60535 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 February 2026: <Means>$[[ West Wing sermon on mutual submission ]]( claude--West Wing sermon on mutual submission--70a60535 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
