import { $Chapter, Author, Cover, Ref, Subject, Title } from '@dna-platform/public';
import { Biography, Catalogues, Chrome, Tabs } from '../../..reference/.book';

export default class $Cover extends $Chapter {
    print() {
        return (
            <Cover>
                <Chrome />
                <Title>[[ Claude &amp; Our Projects ]] $[ ]( Dougs Library )</Title>
                <Author>*[[ Author: Doug ]]( My Library Log )</Author>
                <Subject>**[[ Doug ]]( Dougs Library )</Subject>
                <Catalogues />
                <Biography />
                <Tabs here={"Claude & Our Projects"} about={"[[ Subject ]]( Dougs Library )"} by={"[[ Author ]]( My Library Log )"} />
            </Cover>
        );
    }
}
