import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--translating-georgian-parking-sign--25ed1262/.cover.tsx';
import TheSynopsis from '../.conversations/claude--translating-georgian-parking-sign--25ed1262/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[9 June 2026](2026-06-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translating Georgian parking sign ]]( claude--Translating Georgian parking sign--25ed1262 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 June 2026: <Means>$[[ Translating Georgian parking sign ]]( claude--Translating Georgian parking sign--25ed1262 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
