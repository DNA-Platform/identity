import { $Chapter, Author, Cover, Ref, Subject, Title } from '@dna-platform/public';
import { Catalogues, Chrome, Tabs } from './.book';

export default class $Cover extends $Chapter {
    print() {
        return (
            <Cover>
                <Chrome />
                <Title>[[ Dougs Library ]] $[ ]( Dougs Library )</Title>
                <Author>*[[ Author: Doug ]]( My Library Log )</Author>
                <Subject>**[[ Doug ]]( Dougs Library )</Subject>
                <Catalogues />
                <Tabs here={"Dougs Library"} about={"[[ Subject ]]( Dougs Library )"} by={"[[ Author ]]( My Library Log )"} />
            </Cover>
        );
    }
}
