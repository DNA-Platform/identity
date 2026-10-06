import { $, selection } from '@dna-platform/chemistry';
import { $Cover } from '@dna-platform/public';
import { $Index } from './14-the-entry~code.tsx';

export class $TopBar extends $Cover {
    override style = selection.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-family: ${({ theme }) => theme.serif};
            font-size: calc(1.8 * ${({ theme }) => theme.size});
            font-weight: 600;
            line-height: 1.04;
            color: ${({ theme }) => theme.heading};
        }
    `;
}

export class $SideBar extends $Index {
    override style = selection.nav`
        .pd-chapter.pa-table-of-contents {
            margin-block: 0;
            color: ${({ theme }) => theme.barDim};
        }
        .pa-table-of-contents .pd-section { margin-block: ${({ theme }) => theme.space} 0; }
        .pa-table-of-contents .pd-heading {
            display: flex;
            justify-content: space-between;
            margin-block: 0 calc(${({ theme }) => theme.space} / 3);
            padding-inline: calc(${({ theme }) => theme.space} * 0.375);
            font-size: calc(0.76 * ${({ theme }) => theme.size});
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: ${({ theme }) => theme.barDim};
        }
        .pa-table-of-contents .pd-paragraph.pa-entry {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: calc(${({ theme }) => theme.space} * 0.375);
            margin-block: 0;
            padding: calc(${({ theme }) => theme.space} / 4) calc(${({ theme }) => theme.space} * 0.375) calc(${({ theme }) => theme.space} / 4) calc(${({ theme }) => theme.space} * 1.1);
            border-radius: calc(${({ theme }) => theme.space} / 3);
            font-weight: 500;
            color: ${({ theme }) => theme.barInk};
        }
        .pa-table-of-contents .pd-paragraph.pa-entry::before {
            content: '';
            position: absolute;
            inset-inline-start: calc(${({ theme }) => theme.space} * 0.375);
            width: calc(${({ theme }) => theme.space} * 0.375);
            height: calc(${({ theme }) => theme.space} * 0.375);
            border-radius: 50%;
            background: ${({ theme }) => theme.sea};
        }
        .pa-table-of-contents .pd-paragraph.pa-entry.pa-open { background: ${({ theme }) => theme.barOn}; }
        .pa-table-of-contents .pa-reference.pa-reference { color: inherit; text-decoration: none; }
    `;
}

export const TopBar = $($TopBar);
export const SideBar = $($SideBar);
