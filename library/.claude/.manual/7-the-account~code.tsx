import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import {
    $Annotation, $Chapter, $Cover, $Paragraph, $Reference, $Writing, AnnotationSpecification, Reference as reference,
    Word as word, binder, html, specify,
} from '@dna-platform/public';
import { Label as label } from '../../.manual/.book';

export class $Account extends $Annotation {
    specification = new AccountSpecification();
    get name(): string { return binder.reference(html.copy(this.text))?.name ?? ''; }
    get means(): $Reference | undefined { return this.annotations.expressed($Reference); }

    protected override $Define(): void {
        super.$Define();
        const link = binder.reference(html.copy(this.text));
        if (link === undefined) return;
        const Reference = $(reference);
        this.annotations.add(this,
            <Reference>{link.identifier}</Reference>
        );
    }

    override write(): ReactNode { return this.name; }
}

export class AccountSpecification extends AnnotationSpecification {
    @specify('an account is said of a cover')
    $saidOfACover(writing: $Writing): void {
        $check(writing instanceof $Chapter && writing.is($Cover), 'an account is said of a cover, and this is not one');
    }
}

export class $AccountLine extends $Paragraph {
    $cover?: $Chapter;
    get cover(): $Chapter | undefined { return this.$cover ?? this.book?.cover; }
    get account(): $Account | undefined { return this.cover?.annotations.expressed($Account); }

    override write(): ReactNode {
        const account = this.account!;
        const Word = $(word);
        const Said = $(label);
        const Reference = $(reference);
        return (
            <>
                <Word>
                    <Said />
                    account
                </Word>
                <Word>
                    <Reference>{account.means!.identifier}</Reference>
                    {account.name}
                </Word>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-account-line');
    }
}

export const Account = $($Account);
export const AccountLine = $($AccountLine);
