import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ layers-shadow v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`class $Layers extends $ApplicationCollection<Layers, $Layer, Layer, $Document> {
    constructor(ref: $Reference<Layers>, document: $Document) {
        super(ref, "Layers", document);
    }

    add(): $Layer { return super._add(); }
    getByName(name: $Str) { return super._getByName(name); }
    removeAll() { return super._removeAll(); }
}`}
        </CodeBox>
    </Chapter>
);
