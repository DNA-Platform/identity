import { Author, Chapter, Cover, Subject, Title } from '@dna-platform/public';
import { Messages, Participant, Participants, Period, Scheme } from '../../../.manual/.book';
import { Project } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Cover />
        <Scheme
            ground="#eff1f6"
            band="#c0c9df"
            bandInk="#2a3a63"
            foot="#8e9fc8"
            footInk="#1f2d50"
            ink="#2a3a63"
        />
        <Participants>
            <Participant>$[[ Doug ]]( Dougs Story )</Participant>
            <Participant>$[[ Claude ]]( Dougs Claude )</Participant>
        </Participants>
        <Period
            from="2026-09-09T05:55:30.900596Z"
            to="2026-09-10T03:34:55.287650Z"
        />
        <Messages
            shown="84"
            all="106"
        />
        <Title>[[ Semantics of Types &amp; More ]]</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Project>***[[ Semantic Reference Theory ]]</Project>
    </Chapter>
);
