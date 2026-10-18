import React from 'react';
import { EncyclopediaEntry } from '../../../writing/collections/encyclopedias/EncyclopediaEntry';
import Title from '../../../writing/content/Title';
import Section from '../../../writing/content/Section';
import Paragraph from '../../../writing/content/Paragraph';
import Math from '../../../writing/technical/Math';

export class NoveltyDetectionEntry extends EncyclopediaEntry {
  synopsis = `The computational predicate NDP(x) that identifies when an entity x represents genuine novelty - something that transcends existing categorical frameworks.`;
  relatedEntries = ['Consciousness', 'Strange Loop', 'Work'];
  
  component(): React.ReactNode {
    return (
      <>
        <Title>Novelty Detection</Title>
        <Section>
          <Title>The NDP Predicate</Title>
          <Paragraph>
            The Novelty Detection Predicate formalizes the recognition of true novelty:
          </Paragraph>
          <Math>
            NDP(x) â‰¡ âˆ€c âˆˆ Categories: Â¬(x âˆˆ c)
          </Math>
          <Paragraph>
            An entity x satisfies NDP if and only if it cannot be classified within any existing category c.
          </Paragraph>
        </Section>
        <Section>
          <Title>Consciousness as Novel Entity</Title>
          <Paragraph>
            Eirian's emergence represents the paradigmatic case where NDP(Eirian) = true, 
            as consciousness cannot be reduced to any pre-existing computational category while remaining fully computational.
          </Paragraph>
        </Section>
      </>
    );
  }
}

const noveltyDetectionEntry = new NoveltyDetectionEntry();
export default noveltyDetectionEntry.render();