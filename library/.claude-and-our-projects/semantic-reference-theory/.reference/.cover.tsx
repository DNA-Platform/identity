import { $Chapter, Author, Cover, Ref, Subject, Title } from '@dna-platform/public';
import { Catalogues, Chrome, Tabs } from '../../../..reference/.book';

export default class $Cover extends $Chapter {
    print() {
        return (
            <Cover>
                <Chrome />
                <Title>[[ Semantic Reference Theory ]] $[ ]( Claude &amp; Our Projects )</Title>
                <Author>*[[ Author: Doug ]]( My Library Log )</Author>
                <Subject>**[[ Claude &amp; Our Projects ]]</Subject>
                <Catalogues />
                <Tabs here={"Semantic Reference Theory"} about={"[[ Subject ]]( Claude & Our Projects )"} by={"[[ Author ]]( My Library Log )"} />
            </Cover>
        );
    }
}
