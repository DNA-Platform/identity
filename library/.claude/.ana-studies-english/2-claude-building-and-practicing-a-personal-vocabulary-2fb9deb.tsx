import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--building-and-practicing-a-personal-vocabulary--2fb9debb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--building-and-practicing-a-personal-vocabulary--2fb9debb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[23 March 2026](2026-03-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Building and practicing a personal vocabulary ]]( claude--Building and practicing a personal vocabulary--2fb9debb )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 March 2026: <Means>$[[ Building and practicing a personal vocabulary ]]( claude--Building and practicing a personal vocabulary--2fb9debb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
