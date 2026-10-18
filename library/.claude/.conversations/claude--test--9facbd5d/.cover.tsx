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
            ground="#f6f0ea"
            band="#e0c6ad"
            bandInk="#5a3a1e"
            foot="#c89a72"
            footInk="#4a2c12"
            ink="#5a3a1e"
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
            from="2026-06-17T11:38:55.503841Z"
            to="2026-09-17T08:32:07.934663Z"
        />
        <Messages
            shown="22"
            all="22"
        />
        <Title>[[ Test ]]( claude--Test--9facbd5d )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Project>***[[ Claude ]]( claude--Claude )</Project>
        <Account>$[[ DNA ]]( Dougs Claude / DNA )</Account>
        <Origin>9facbd5d-bc5f-4df5-a22e-eef84802271f</Origin>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
