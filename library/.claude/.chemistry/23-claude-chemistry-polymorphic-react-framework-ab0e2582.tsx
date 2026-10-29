import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--chemistry-polymorphic-react-framework--ab0e2582/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chemistry-polymorphic-react-framework--ab0e2582/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[9 September 2025](2025-09-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemistry: Polymorphic React Framework ]]( claude--Chemistry: Polymorphic React Framework--ab0e2582 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 September 2025: <Means>$[[ Chemistry: Polymorphic React Framework ]]( claude--Chemistry: Polymorphic React Framework--ab0e2582 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
