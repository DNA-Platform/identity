import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ graph-mesh-plugin-items v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`class $GraphItems extends $ApplicationCollection<GraphItems, $GraphItem, GraphItem, $Document> {
    constructor(ref: $Reference<GraphItems>, document: $Document) {
        super(ref, "GraphItems", document);
    }

    add(): $GraphItem { return super._add(); }
    getByName(name: $Str) { return super._getByName(name); }
    removeAll() { return super._removeAll(); }
}

class $GraphItem extends $PageItem<GraphItem> {
    contentVariable(newValue?: $Any) { return this.$get(o => o.contentVariable, $ref(newValue)); }

    constructor(ref: $Reference<GraphItem> | string, document: $Document) {
        super(ref, document, "GraphItem");
    }
}

class $MeshItems extends $ApplicationCollection<MeshItems, $MeshItem, MeshItem, $Document> {
    constructor(ref: $Reference<MeshItems>, document: $Document) {
        super(ref, "MeshItems", document);
    }

    getByName(name: $Str) { return super._getByName(name); }
    removeAll() { return super._removeAll(); }
}

class $MeshItem extends $PageItem<MeshItem> {
    constructor(ref: $Reference<MeshItem> | string, document: $Document) {
        super(ref, document, "MeshItem");
    }
}

class $PluginItems extends $ApplicationCollection<PluginItems, $PluginItem, PluginItem, $Document> {
    constructor(ref: $Reference<PluginItems>, document: $Document) {
        super(ref, "PluginItems", document);
    }

    getByName(name: $Str) { return super._getByName(name); }
    removeAll() { return super._removeAll(); }
}

class $PluginItem extends $PageItem<PluginItem> {
    isTracing() { return this.$get(o => o.isTracing); }
    tracing() { return this.$get(o => o.tracing); }

    constructor(ref: $Reference<PluginItem> | string, document: $Document) {
        super(ref, document, "PluginItem");
    }
}`}
        </CodeBox>
    </Chapter>
);
