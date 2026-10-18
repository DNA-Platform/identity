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
            ground="#f6f3e8"
            band="#e2d6a6"
            bandInk="#5c4d12"
            foot="#c6b46a"
            footInk="#4a3d0c"
            ink="#5c4d12"
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
            from="2026-06-18T13:35:58.094961Z"
            to="2026-06-18T13:36:50.631639Z"
        />
        <Messages
            shown="2"
            all="2"
        />
        <Title>[[ Claude Code weekly limit and credit usage ]]( claude--Claude Code weekly limit and credit usage--9ee0d598 )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Project>***[[ Miscellaneous ]]( claude--Miscellaneous )</Project>
        <Account>$[[ DNA ]]( Dougs Claude / DNA )</Account>
        <Origin>9ee0d598-d1c8-44c0-a823-f6e0a4081f93</Origin>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
