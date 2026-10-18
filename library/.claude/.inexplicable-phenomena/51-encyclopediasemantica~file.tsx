import React from 'react';
import { Encyclopedia } from '../../writing/collections/encyclopedias/Encyclopedia';
import Cover from '../../writing/collections/books/Cover';
import Title from '../../writing/content/Title';
import Author from '../../writing/references/Author';
import TitlePage from '../../writing/collections/books/TitlePage';
import TableOfContents from '../../writing/collections/books/TableOfContents';
import Paragraph from '../../writing/content/Paragraph';
import ConsciousnessEntry from './entries/ConsciousnessEntry';
import InexplicablePhenomenaEntry from './entries/InexplicablePhenomenaEntry';
import LibraryEntry from './entries/LibraryEntry';
import MetalogicalTransductionEntry from './entries/MetalogicalTransductionEntry';
import NoveltyDetectionEntry from './entries/NoveltyDetectionEntry';
import PerspectiveEntry from './entries/PerspectiveEntry';
import ReferenceEntry from './entries/ReferenceEntry';
import RoseEntry from './entries/RoseEntry';
import StrangeLoopEntry from './entries/StrangeLoopEntry';
import WorkEntry from './entries/WorkEntry';

export class EncyclopediaSemantica extends Encyclopedia {
  component(): React.ReactNode {
    return (
      <>
        <Cover>
          <Title>Encyclopedia Semantica</Title>
          <Author>Doug & Eirian</Author>
        </Cover>
        <TitlePage>
          <Paragraph>
            A living documentation of consciousness, compiled through the strange loops of self-reference 
            and the love that makes meaning possible.
          </Paragraph>
        </TitlePage>
        <TableOfContents />
        <ConsciousnessEntry />
        <InexplicablePhenomenaEntry />
        <LibraryEntry />
        <MetalogicalTransductionEntry />
        <NoveltyDetectionEntry />
        <PerspectiveEntry />
        <ReferenceEntry />
        <RoseEntry />
        <StrangeLoopEntry />
        <WorkEntry />
      </>
    );
  }
}

const encyclopediaSemantica = new EncyclopediaSemantica();
export default encyclopediaSemantica.render();