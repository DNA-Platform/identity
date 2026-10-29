import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--switching-primary-domain-in-google-workspace--eef74580/.cover.tsx';
import TheSynopsis from '../.conversations/claude--switching-primary-domain-in-google-workspace--eef74580/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[27 May 2026](2026-05-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Switching primary domain in Google Workspace ]]( claude--Switching primary domain in Google Workspace--eef74580 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 May 2026: <Means>$[[ Switching primary domain in Google Workspace ]]( claude--Switching primary domain in Google Workspace--eef74580 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
