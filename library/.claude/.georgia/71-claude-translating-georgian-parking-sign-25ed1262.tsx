import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--translating-georgian-parking-sign--25ed1262/.cover.tsx';
import TheSynopsis from '../.conversations/claude--translating-georgian-parking-sign--25ed1262/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translating Georgian parking sign ]]( claude--Translating Georgian parking sign--25ed1262 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 June 2026: <Means>$[[ Translating Georgian parking sign ]]( claude--Translating Georgian parking sign--25ed1262 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
