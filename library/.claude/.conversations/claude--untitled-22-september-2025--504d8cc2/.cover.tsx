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
        </Participants>
        <Period
            from="2025-09-22T08:31:36.188715Z"
            to="2025-09-22T08:31:36.188715Z"
        />
        <Messages
            shown="1"
            all="28"
        />
        <Title>[[ Untitled, 22 September 2025 ]]( claude--Untitled, 22 September 2025--504d8cc2 )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Account>$[[ DNA Legacy ]]( Dougs Claude / DNA Legacy )</Account>
        <Origin>504d8cc2-c1a0-44e5-83f0-57b73558d116</Origin>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
