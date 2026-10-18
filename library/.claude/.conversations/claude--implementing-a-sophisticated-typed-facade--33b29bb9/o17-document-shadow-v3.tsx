import { Chapter, Heading, Math, Paragraph, Section, Title } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ document-shadow v3 ]]</Title>
        <Section>
            <Opaque />
            <Heading>document-shadow at version 3</Heading>
            <Paragraph>
                class $Document extends $ApplicationItem&lt;Document, $Application&gt; &#123; layers(): $Layers &#123;
                return <Math>{"docref(this."}</Math>get(o =&gt; o.layers), this.typename(), this); &#125; artboards():
                $Artboards &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.artboards), this.typename(), this);
                &#125; views(): $Views &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.views), this.typename(),
                this); &#125; brushes(): $Brushes &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.brushes),
                this.typename(), this); &#125; swatches(): $Swatches &#123; return <Math>{"docref(this."}</Math>get(o =&gt;
                o.swatches), this.typename(), this); &#125; symbols(): $Symbols &#123; return <Math>{"docref(this."}</Math>get(o
                =&gt; o.symbols), this.typename(), this); &#125; stories(): $Stories &#123; return
                <Math>{"docref(this."}</Math>get(o =&gt; o.stories), this.typename(), this); &#125; pluginItems():
                $PluginItems &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.pluginItems), this.typename(), this);
                &#125; pageItems(): $PageItems &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.pageItems),
                this.typename(), this); &#125; pathItems(): $PathItems &#123; return <Math>{"docref(this."}</Math>get(o
                =&gt; o.pathItems), this.typename(), this); &#125; textFrames(): $TextFrames &#123; return
                <Math>{"docref(this."}</Math>get(o =&gt; o.textFrames), this.typename(), this); &#125; groupItems():
                $GroupItems &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.groupItems), this.typename(), this);
                &#125; rasterItems(): $RasterItems &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.rasterItems),
                this.typename(), this); &#125; compoundPathItems(): $CompoundPathItems &#123; return
                <Math>{"docref(this."}</Math>get(o =&gt; o.compoundPathItems), this.typename(), this); &#125;
                legacyTextItems
            </Paragraph>
        </Section>
    </Chapter>
);
