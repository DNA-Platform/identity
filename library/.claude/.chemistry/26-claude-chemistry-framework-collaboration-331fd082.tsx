import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--chemistry-framework-collaboration--331fd082/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chemistry-framework-collaboration--331fd082/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[2 September 2025](2025-09-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemistry Framework Collaboration ]]( claude--Chemistry Framework Collaboration--331fd082 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 September 2025: <Means>$[[ Chemistry Framework Collaboration ]]( claude--Chemistry Framework Collaboration--331fd082 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
