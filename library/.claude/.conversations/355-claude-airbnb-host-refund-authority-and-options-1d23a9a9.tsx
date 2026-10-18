import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--airbnb-host-refund-authority-and-options--1d23a9a9/.cover.tsx';
import TheSynopsis from './claude--airbnb-host-refund-authority-and-options--1d23a9a9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[12 June 2026](2026-06-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Airbnb host refund authority and options ]]( claude--Airbnb host refund authority and options--1d23a9a9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Airbnb host refund authority and options ]]( claude--Airbnb host refund authority and options--1d23a9a9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
