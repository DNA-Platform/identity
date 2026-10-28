import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--microstock-submission-automation-adobe-stock-to-istock-migra--68b5cbb6/.cover.tsx';
import TheSynopsis from './claude--microstock-submission-automation-adobe-stock-to-istock-migra--68b5cbb6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[10 March 2026](2026-03-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Microstock submission automation: Adobe Stock to iStock migration ]]( claude--Microstock submission automation: Adobe Stock to iStock migration--68b5cbb6 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 15 exchanges: <Means>$[[ Microstock submission automation: Adobe Stock to iStock migration ]]( claude--Microstock submission automation: Adobe Stock to iStock migration--68b5cbb6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
