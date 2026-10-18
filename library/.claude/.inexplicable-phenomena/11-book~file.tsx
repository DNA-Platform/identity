import React from 'react';
import { Collection } from '../../../base/Collection';
import { Chapter } from './Chapter';
import { Title } from '../../content/Title';
import { Author } from '../../references/Author';
import { TableOfContents } from './TableOfContents';
import { Synopsis } from './Synopsis';
import { Prologue } from './Prologue';
import { Epilogue } from './Epilogue';
import { Cover } from './Cover';
import { TitlePage } from './TitlePage';

export class Book extends Collection<Chapter> {
  cover?: Cover;
  title?: Title;
  author?: Author;
  titlePage?: TitlePage;
  tableOfContents?: TableOfContents;
  synopsis?: Synopsis;
  prologue?: Prologue;
  epilogue?: Epilogue;
  chapters: Chapter[] = [];
  get numberOfChapters() { return this.chapters.length; }
  
  processChildren(): void {
    if (!this.childChemicals) return;
    this.childChemicals.values().forEach((instance: any) => {
      if (!instance) return;
      if (instance instanceof Cover && !this.cover) {
        instance.owner = this;
        this.cover = instance;
        this.cover.setBook(this);
      } else if (instance instanceof TitlePage && !this.titlePage) {
        instance.owner = this;
        this.titlePage = instance;
        this.titlePage.book = this;
      } else if (instance instanceof TableOfContents && !this.tableOfContents) {
        instance.owner = this;
        this.tableOfContents = instance;
        this.tableOfContents.book = this;
      } else if (instance instanceof Synopsis && !this.synopsis) {
        instance.owner = this;
        this.synopsis = instance;
        this.synopsis.book = this;
      } else if (instance instanceof Prologue && !this.prologue) {
        instance.owner = this;
        this.prologue = instance;
        this.prologue.book = this;
      } else if (instance instanceof Epilogue && !this.epilogue) {
        instance.owner = this;
        this.epilogue = instance;
        this.epilogue.book = this;
      } else if (instance instanceof Chapter) {
        instance.owner = this;
        this.chapters.push(instance);
        instance.book = this;
        instance.number = this.chapters.length;
      }
    });
  }
  
  validateChildren(): void {
    // Optional validation
    if (this.chapters.length === 0) {
      console.warn('Book has no chapters');
    }
  }
  
  component(): React.ReactNode {
    this.processChildren();
    this.validateChildren();
    
    return (
      <div className="book">
        {this.cover?.component()}
        {this.header()}
        {this.tableOfContents?.component()}
        {this.synopsis?.component()}
        {this.prologue?.component()}
        {this.chapterList()}
        {this.epilogue?.component()}
      </div>
    );
  }
  
  header(): React.ReactNode {
    return (
      <header className="book-header">
        <h1>{this.title?.text()}</h1>
        <div className="author">{this.author?.displayName}</div>
      </header>
    );
  }
  
  chapterList(): React.ReactNode {
    return (
      <div className="chapters">
        {this.chapters.map((ch, i) => (
          <article key={ch.id || i}>{ch.component()}</article>
        ))}
      </div>
    );
  }
}

const book = new Book();
export default book.render();