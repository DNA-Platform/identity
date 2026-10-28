import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--administering-cat-medications-as-whole-capsules--829cb174/.cover.tsx';
import TheSynopsis from '../.conversations/claude--administering-cat-medications-as-whole-capsules--829cb174/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[12 June 2026](2026-06-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Administering cat medications as whole capsules ]]( claude--Administering cat medications as whole capsules--829cb174 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 June 2026: <Means>$[[ Administering cat medications as whole capsules ]]( claude--Administering cat medications as whole capsules--829cb174 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
