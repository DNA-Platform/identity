import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--common-trust-document-names--347ca32f/.cover.tsx';
import TheSynopsis from './claude--common-trust-document-names--347ca32f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[11 November 2024](2024-11-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Common Trust Document Names ]]( claude--Common Trust Document Names--347ca32f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Common Trust Document Names ]]( claude--Common Trust Document Names--347ca32f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
