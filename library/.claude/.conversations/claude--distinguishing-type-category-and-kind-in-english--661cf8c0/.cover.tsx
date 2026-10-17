import { Author, Chapter, Paragraph, Subject, Svg, Title } from '@dna-platform/public';
import { BookshelfCover as Cover, Illustration, Messages, Participant, Participants, Period, Scheme, Volume, Window } from '../../../.manual/.book';
import { Account, Origin, Project } from '../../.manual/.book';
import SubjectCover from '../.cover.tsx';
import StoryCover from '../../../.librarian/.cover.tsx';

export default () => (
    <Chapter>
        <Cover />
        <Volume>{SubjectCover()}</Volume>
        <Volume>{StoryCover()}</Volume>
        <Scheme
            ground="#eff1f6"
            band="#c0c9df"
            bandInk="#2a3a63"
            foot="#8e9fc8"
            footInk="#1f2d50"
            ink="#2a3a63"
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
            from="2026-07-03T18:53:22.794900Z"
            to="2026-07-03T19:29:21.095217Z"
        />
        <Messages
            shown="14"
            all="28"
        />
        <Title>[[ Distinguishing type, category, and kind in English ]]( claude--Distinguishing type, category, and kind in English--661cf8c0 )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Project>***[[ Semantic Reference Theory ]]</Project>
        <Account>$[[ DNA ]]( Dougs Claude / DNA )</Account>
        <Origin>661cf8c0-03e0-4ea3-89f1-33dda20c6f01</Origin>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
