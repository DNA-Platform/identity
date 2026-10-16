import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Heading, $Referent, $Section, $SelfReference, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';

export class $Opaque extends $Annotation {
    specification = new OpaqueSpecification();
    get section(): $Section | undefined { return this.parent instanceof $Section ? this.parent : undefined; }
    get headings(): $Heading[] {
        const section = this.section;
        if (section === undefined) return [];
        return section.text.find($Heading).filter(heading => heading !== section.canonical);
    }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-opaque');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }

    protected override $Bound(): void {
        for (const heading of this.headings) {
            const referent = heading.annotations.expressed($Referent);
            const self = heading.annotations.expressed($SelfReference);
            for (const annotation of [referent, self])
                if (annotation !== undefined) heading.annotations.remove(heading, annotation);
        }
        super.$Bound();
    }
}

export class OpaqueSpecification extends AnnotationSpecification {
    @specify('opaque is said of a section')
    $saidOfASection(writing: $Writing): void {
        $check(writing instanceof $Section, 'opaque is said of a section, and this is not one');
    }
}

export const Opaque = $($Opaque);
