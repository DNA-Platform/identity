import { Author, Chapter, Paragraph, Subject, Svg, Title } from '@dna-platform/public';
import { BookshelfCover as Cover, Illustration, Messages, Participant, Participants, Period, Scheme, Volume, Window } from '../../../.manual/.book';
import { Account, Origin } from '../../.manual/.book';
import SubjectCover from '../.cover.tsx';
import StoryCover from '../../../.librarian/.cover.tsx';

export default () => (
    <Chapter>
        <Cover />
        <Volume>{SubjectCover()}</Volume>
        <Volume>{StoryCover()}</Volume>
        <Scheme
            ground="#f3f0f8"
            band="#c9bfe3"
            bandInk="#3a2d63"
            foot="#8f7fc0"
            footInk="#2e2350"
            ink="#3a2d63"
        />
        <Window
            x="-32"
            y="-26"
        />
        <Participants>
            <Participant>$[[ Doug ]]( Dougs Story )</Participant>
            <Participant>$[[ Claude ]]( Dougs Claude )</Participant>
        </Participants>
        <Period
            from="2025-01-24T14:36:33.081130Z"
            to="2025-01-24T14:43:54.551098Z"
        />
        <Messages
            shown="16"
            all="16"
        />
        <Title>[[ Using BridgeTalk in Illustrator ExtendScript ]]( claude--Using BridgeTalk in Illustrator ExtendScript--efd9c851 )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Account>$[[ DNA ]]( Dougs Claude / DNA )</Account>
        <Origin>efd9c851-25f2-4076-ae23-07759a0333d8</Origin>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
