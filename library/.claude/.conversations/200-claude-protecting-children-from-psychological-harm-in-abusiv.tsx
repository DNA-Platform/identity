import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--protecting-children-from-psychological-harm-in-abusive-situa--23e95ec1/.cover.tsx';
import TheSynopsis from './claude--protecting-children-from-psychological-harm-in-abusive-situa--23e95ec1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[18 January 2026](2026-01-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Protecting children from psychological harm in abusive situations ]]( claude--Protecting children from psychological harm in abusive situations--23e95ec1 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Protecting children from psychological harm in abusive situations ]]( claude--Protecting children from psychological harm in abusive situations--23e95ec1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
