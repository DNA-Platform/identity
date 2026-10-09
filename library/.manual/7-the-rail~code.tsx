import { ElementType, ReactNode } from 'react';
import { $, $Chemical, selection } from '@dna-platform/chemistry';
import { $Paragraph, $Section, html } from '@dna-platform/public';
import { File as file, nameOf } from './2-the-listing~code.tsx';
import { $Tab } from './9-the-switch~code.tsx';
import { $Manual } from './10-the-manual~code.tsx';
import { Split as split } from './10-the-manual~forward.tsx';

export class $Rail extends $Paragraph {
    style: ElementType = selection.div`
        .pd-book & {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: calc(${({ theme }) => theme.space} / 12);
            padding: calc(${({ theme }) => theme.space} * 0.4167) 0;
            background: linear-gradient(90deg, color-mix(in oklch, var(--night) 82%, white) 0%, var(--night) 22%);
            box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.08);
            transition: background ${({ theme }) => theme.beat} ease;
        }
        .pd-book & .pd-file {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: calc(${({ theme }) => theme.space} * 0.4167);
            padding: calc(${({ theme }) => theme.space} * 0.4167) 0 calc(${({ theme }) => theme.space} / 3);
            border: 0;
            border-inline-start: 2px solid transparent;
            background: none;
            font-family: ${({ theme }) => theme.mono};
            font-size: calc(0.7857 * ${({ theme }) => theme.size});
            font-weight: 500;
            line-height: 1;
            letter-spacing: 0.04em;
            color: color-mix(in oklch, var(--glow) 66%, var(--night));
            cursor: pointer;
            transition: background ${({ theme }) => theme.beat} ease, color ${({ theme }) => theme.beat} ease, border-color ${({ theme }) => theme.beat} ease;
        }
        .pd-book & .pd-file .pd-file-name { writing-mode: vertical-rl; }
        .pd-book & .pd-file .pd-drawing { width: calc(0.9286 * ${({ theme }) => theme.size}); height: calc(0.9286 * ${({ theme }) => theme.size}); color: #9aa4b3; }
        .pd-book & .pd-file svg { display: block; width: 100%; height: 100%; }
        .pd-book & .pd-skeleton { display: flex; flex-direction: column; align-items: flex-start; gap: 3px; width: calc(${({ theme }) => theme.space} * 1.0833); margin-block-start: 2px; opacity: 0.55; transition: opacity ${({ theme }) => theme.beat} ease; }
        .pd-book & .pd-skeleton i { display: block; height: 2px; border-radius: 1px; background: color-mix(in oklch, var(--brass) 60%, var(--glow)); }
        .pd-book & .pd-file:hover { color: var(--glow); background: var(--dusk); }
        .pd-book & .pd-word.pd-switch[aria-pressed='true'] { color: color-mix(in oklch, var(--glow) 66%, var(--night)); border-color: transparent; background: none; }
        .pd-book.pa-split & .pd-file[aria-pressed='true'] { color: var(--glow); border-inline-start-color: var(--foot); background: var(--dusk); }
        .pd-book & .pd-file:hover .pd-skeleton, .pd-book.pa-split & .pd-file[aria-pressed='true'] .pd-skeleton { opacity: 0.9; }
    `;
    get manual(): $Manual | undefined { return this.chapter?.annotations.expressed($Manual); }

    $Rail(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this.containers.replace(this, 'span', this.style);
    }

    override write(): ReactNode {
        const File = $(file);
        const manual = this.manual;
        if (manual === undefined) return undefined;
        return manual.appends.map(append => (
            <File
                key={nameOf(append)}
                append={append}
                of={split}
                among={manual.readings}
                skeleton
            />
        ));
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-rail');
    }
}

export class $Grip extends $Tab {
    style: ElementType = selection.button`
        .pd-book & {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            padding: 0;
            border: 0;
            border-radius: 0;
            border-inline-start: thin solid #e6e2d8;
            background: linear-gradient(90deg, #f3f1eb 0%, #fbfaf6 10px);
            cursor: pointer;
            transition: background ${({ theme }) => theme.beat} ease;
        }
        .pd-book &:hover { background: linear-gradient(90deg, #ece9e1 0%, #ffffff 10px); }
        .pd-book & .pd-skeleton { position: absolute; top: calc(${({ theme }) => theme.space} * 0.5833); left: 5px; display: flex; flex-direction: column; gap: 3px; width: 8px; opacity: 0.7; }
        .pd-book & .pd-skeleton i { display: block; height: 2px; border-radius: 1px; background: #cfcbc0; }
    `;
    get lines(): string[] {
        return (this.chapter?.text.find($Section) ?? []).flatMap(section => section.text.find($Paragraph)).slice(0, 16).map(paragraph => html.copy(paragraph.text));
    }

    $Grip(...chemicals: $Chemical[]) {
        this.$Switch(...chemicals);
        this.containers.replace(this, 'button', this.style);
    }

    override write(): ReactNode {
        return (
            <span className="pd-skeleton">
                {this.lines.map((line, index) => (
                    <i
                        key={index}
                        style={{ width: `${Math.max(25, Math.min(100, line.length / 4))}%` }}
                    />
                ))}
            </span>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-grip');
    }
}

export const Rail = $($Rail);
export const Grip = $($Grip);
