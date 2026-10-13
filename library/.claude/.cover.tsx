import { About, Author, Chapter, Cover, Subject, Title } from '@dna-platform/public';
import { Scheme } from '../.manual/.book';

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
        <Title>[[ Dougs Claude ]]</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Library ]]( The Library )</Subject>
        <About>[[ Claude ]]</About>
    </Chapter>
);
