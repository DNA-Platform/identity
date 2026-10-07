import { Author, Chapter, Paragraph, Subject, Svg, Title } from '@dna-platform/public';
import { Illustration, Scheme, Volume, Window } from '../.manual/.book';
import { Cover } from './o5-the-frame~faces.tsx';
import LibraryCover from '../..reference/.cover.tsx';
import StoryCover from '../.librarian/.cover.tsx';

export default () => (
    <Chapter>
        <Cover />
        <Volume>{LibraryCover()}</Volume>
        <Volume>{StoryCover()}</Volume>
        <Scheme
            ground="#edf2f9"
            band="#b3c6e4"
            bandInk="#23407a"
            foot="#e6a69a"
            footInk="#7d3429"
            ink="#8a3a2f"
        />
        <Window
            x="-49"
            y="-20"
        />
        <Title>[[ Dougs Design ]]</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Library ]]( The Library )</Subject>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
