import { $ } from '@dna-platform/chemistry';
import { $Annotation, $Writing } from '@dna-platform/public';
import { OfABookSpecification } from './1-the-book~said.tsx';

export class $Bars extends $Annotation {
    specification = new OfABookSpecification();

    override defines(writing: $Writing): void {
        for (const annotation of writing.annotations.after(this))
            if (annotation instanceof $Bars)
                writing.annotations.express(annotation, false);
        writing.classes.add(this, 'pa-bars');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $BothBars extends $Bars {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-both-bars');
    }
}

export class $SideBar extends $Bars {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-side-bar');
    }
}

export class $TopBar extends $Bars {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-top-bar');
    }
}

export class $TwoBars extends $Bars {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-two-bars');
    }
}

export class $Rail extends $Bars {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-rail');
    }
}

export class $Cards extends $Bars {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-cards');
    }
}

export const Bars = $($Bars);
export const BothBars = $($BothBars);
export const SideBar = $($SideBar);
export const TopBar = $($TopBar);
export const TwoBars = $($TwoBars);
export const Rail = $($Rail);
export const Cards = $($Cards);
