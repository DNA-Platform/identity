import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--airbnb-host-refund-authority-and-options--1d23a9a9/.cover.tsx';
import TheSynopsis from '../.conversations/claude--airbnb-host-refund-authority-and-options--1d23a9a9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[12 June 2026](2026-06-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Airbnb host refund authority and options ]]( claude--Airbnb host refund authority and options--1d23a9a9 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 June 2026: <Means>$[[ Airbnb host refund authority and options ]]( claude--Airbnb host refund authority and options--1d23a9a9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
