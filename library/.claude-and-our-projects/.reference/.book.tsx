import { $ } from '@dna-platform/chemistry';
import $DougsLibrary from '../../..reference/.book';

// THE BOOK ABOUT CLAUDE, AND THE BASE THE CONVERSATIONS FILED UNDER IT ARE WRITTEN WITH. Everything
// this book adds lives in a file of its own beside it and is re-exported from here, so a chapter
// imports from ONE place — the same door the library's own .book is.
//
//   about.tsx   what a conversation says about itself: held, length, model, filed under
export default class $ClaudeAndOurProjects extends $DougsLibrary { }

export * from './about';

export const ClaudeAndOurProjects = $($ClaudeAndOurProjects);
