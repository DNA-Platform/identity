import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Chapter, $Format, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';
import type { $Entry } from './14-the-entry~code.tsx';

export class $View extends $Format {
    specification = new ViewSpecification();
    get context(): string | undefined { return undefined; }

    row(entry: $Entry): ReactNode {
        return entry === undefined ? undefined : undefined;
    }
}

export class ViewSpecification extends AnnotationSpecification {
    @specify('a view is said of a chapter')
    $saidOfAChapter(writing: $Writing): void {
        $check(writing instanceof $Chapter, 'a view is said of a chapter, and this is not one');
    }
}

export const View = $($View);
