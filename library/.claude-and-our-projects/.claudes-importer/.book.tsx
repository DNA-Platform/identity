import { $, $Block, $check, select, styled } from '@dna-platform/chemistry';
import {
    $Aside$, $Aside, $TypeOfAside, AsideSpecification,
    $Format, $Writing, Heading, Specification,
} from '@dna-platform/public';
import $DougsLibrary from '../../..reference/.book';

// CLAUDE'S LIBRARY IMPORTER — Doug, 2026-09-16: "Just make a whole book called the Claude's Library
// Importer." It is a SPECIFICATION book, which in this library is what the single leading dot on its
// folder marks — his word: "the dot isn't making the subject catalogue versus not distinction here…
// I am just using it to demark specification books."
//
// EVERY PIECE OF CODE HERE IS A RESOURCE OF A CHAPTER, and every chapter documents one. A chapter is
// `NN-name.tsx` and its code is `NN-name.ts` beside it, carrying the same name — so nothing is
// written that is not documented, and nothing is documented that is not written. Doug: "every piece
// of code is a resource to a chapter - it all gets documented!"
//
// THE NUMBERS ARE NOT A CHOICE. He offered to do without them; the binder's inventory takes
// `.cover`, `.synopsis` and `.table` and then ONLY files beginning with a digit, so an unnumbered
// chapter is not read at all. The ORDER is the choice, and it is his: "generally I present my code
// with the most important thing first, and supporting things that can be understood by their name
// and need to be read less frequently in later chapters."
//
// AND THE COMPONENTS THIS BOOK USES STAND IN IT. They were three separate files until the binder
// learned to account for what a library holds and named them as belonging to nothing — Doug,
// 2026-09-16: "Why is this something you can't put in a .book and import from the most logical
// place." A component is not a chapter and not a chapter's resource, so a book is where it lives.
export default class $ClaudesLibraryImporter extends $DougsLibrary { }

// A CHAPTER IMPORTS FROM ONE PLACE. The article kind comes from the library above and is handed on
// here, so no chapter of this book has to know which file anything came from.
export { $Article } from '../../..reference/.book';

// AND THE PLACEMENT COMES FROM THE LIBRARY ITSELF NOW. A placeholder stood here until the real
// one existed and said so in its own comment; it drew a dashed box saying the code went here.
// What replaced it takes no prop — it is a canonical, so it names what it is for as content, and
// a chapter standing beside one file names nothing at all.
export { Resource } from '@dna-platform/public';

export const ClaudesLibraryImporter = $($ClaudesLibraryImporter);

// THE NAMED VOICE COMES FROM THE LIBRARY NOW. It was declared here first and moved up when the
// reference manual needed it too — a component every book uses belongs to the book every book
// extends, not to whichever one happened to need it first.
export { Comments, TypeOfComments, CommentsFormat, $Comments, $TypeOfComments } from '../../..reference/.book';
