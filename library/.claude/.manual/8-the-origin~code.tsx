import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Cover, $Writing, AnnotationSpecification, html, specify } from '@dna-platform/public';
import { $Message } from '../../.manual/.book';

export class $Origin extends $Annotation {
    specification = new OriginSpecification();
    get uuid(): string { return html.copy(this.text).trim(); }

    override write(): ReactNode { return null; }
}

export class OriginSpecification extends AnnotationSpecification {
    @specify('an origin is said of a cover or a message')
    $saidOfACoverOrAMessage(writing: $Writing): void {
        $check((writing instanceof $Chapter && writing.is($Cover)) || writing instanceof $Message, 'an origin is said of a cover or a message, and this is neither');
    }
}

export const Origin = $($Origin);
