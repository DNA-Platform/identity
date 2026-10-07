import { About, Author, Autobiography, Chapter, Paragraph, Subject, Svg, Title } from '@dna-platform/public';
import { Illustration, Scheme, Volume, Window } from '../.manual/.book';
import { Cover } from './o1-the-sheet~faces.tsx';
import LibraryCover from '../..reference/.cover.tsx';

export default () => (
    <Chapter>
        <Cover />
        <Autobiography />
        <Volume>{LibraryCover()}</Volume>
        <Scheme
            ground="#f5eedf"
            band="#d9c3a3"
            bandInk="#4a3626"
            foot="#a3b6cc"
            footInk="#2a4262"
            ink="#2f4a6a"
        />
        <Window
            x="-54"
            y="-33"
        />
        <Title>[[ Dougs Story ]]</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Library ]]( The Library )</Subject>
        <About>[[ The Librarian ]]</About>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
