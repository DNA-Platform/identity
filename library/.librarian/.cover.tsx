import { About, Author, Autobiography, Chapter, Paragraph, Subject, Svg, Title } from '@dna-platform/public';
import { Illustration, Scheme, Window } from '../.manual/.book';
import { Cover } from './o1-the-sheet~faces.tsx';

export default () => (
    <Chapter>
        <Cover />
        <Autobiography />
        <Scheme
            ground="#f5eedf"
            band="#d9c3a3"
            bandInk="#4a3626"
            foot="#a3b6cc"
            footInk="#2a4262"
            ink="#2f4a6a"
        />
        <Window
            x="-44"
            y="-22"
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
