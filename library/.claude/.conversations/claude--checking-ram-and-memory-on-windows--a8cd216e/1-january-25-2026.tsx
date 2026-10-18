import { Bold, Chapter, Date, Line, List, Paragraph, Table, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[25 January 2026](2026-01-25)</Date>
        </Dated>
        <Title>[[ 25 January 2026 ]]</Title>
        <Message
            at="2026-01-25T17:00:37.623068Z"
        >
            <Origin>019bf619-b15a-740d-a5d9-a5114885dd92</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How do I check the ram and memory on my windows computer</Paragraph>
        </Message>
        <Message
            at="2026-01-25T17:00:45.368611Z"
        >
            <Origin>019bf619-b15a-740d-a5d9-a51265749ba8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>There are a few quick ways to check RAM on Windows:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Task Manager
                </Word> (fastest method): Press <Word>
                    <Verbatim />
                    Ctrl + Shift + Esc
                </Word>, click the "Performance" tab, then select "Memory" on the left. This shows total RAM, how much is in
                use, speed, and slots used.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    System Settings
                </Word>: Press <Word>
                    <Verbatim />
                    Win + I
                </Word> to open Settings, go to System → About. Under "Device specifications" you'll see "Installed RAM."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Command line
                </Word>: Open Command Prompt or PowerShell and type <Word>
                    <Verbatim />
                    systeminfo
                </Word> — look for "Total Physical Memory" in the output. Or for just RAM: <Word>
                    <Verbatim />
                    wmic memorychip get capacity, speed, manufacturer
                </Word>
            </Paragraph>
            <Paragraph>
                If you want detailed specs (like which slots are populated, timings, etc.), Task Manager's Performance tab
                or a tool like CPU-Z gives you more granular info.
            </Paragraph>
            <Paragraph>What are you troubleshooting?</Paragraph>
        </Message>
        <Message
            at="2026-01-25T17:11:43.311584Z"
        >
            <Origin>019bf623-d9ae-77cb-8a5c-a943af9a658e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Which is the more powerful computer? Will one run adobe illustrator better than the other?
            </Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-01-25T17:12:06.460349Z"
        >
            <Origin>019bf623-d9ae-77cb-8a5c-a944ff2d9ce4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Looking at both HP OmniBook 5 laptops:</Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Spec</Word>
                    <Word>Laptop 1 (AMD)</Word>
                    <Word>Laptop 2 (Intel)</Word>
                </Line>
                <Line>
                    <Word>CPU</Word>
                    <Word>AMD Ryzen AI 5 340</Word>
                    <Word>Intel Core Ultra 7 255U</Word>
                </Line>
                <Line>
                    <Word>RAM</Word>
                    <Word>16 GB (15.3 usable)</Word>
                    <Word>16 GB (15.5 usable)</Word>
                </Line>
                <Line>
                    <Word>GPU</Word>
                    <Word>Radeon 840M (412 MB)</Word>
                    <Word>Intel Graphics (128 MB)</Word>
                </Line>
                <Line>
                    <Word>Storage</Word>
                    <Word>3.73 TB</Word>
                    <Word>3.64 TB</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For Illustrator specifically:
                </Word>
            </Paragraph>
            <Paragraph>
                The <Word>
                    <Bold />
                    Intel Core Ultra 7
                </Word> is the higher-tier chip and will likely have better single-threaded performance, which matters for
                most Illustrator operations (pathfinding, live effects, complex artboards).
            </Paragraph>
            <Paragraph>
                However, the <Word>
                    <Bold />
                    AMD system has the stronger GPU
                </Word> — the Radeon 840M with more video memory will handle GPU-accelerated canvas rendering and effects
                better than Intel's integrated graphics.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Bottom line:
                </Word> They're fairly comparable for Illustrator. The Intel has the edge for CPU-heavy work (complex
                vectors, large files with many objects), while the AMD has the edge for smooth canvas panning/zooming and
                GPU-accelerated effects. Both will run Illustrator fine with 16 GB RAM.
            </Paragraph>
            <Paragraph>
                If Ana is choosing between these for her illustration work, I'd lean slightly toward the <Word>
                    <Bold />
                    AMD
                </Word> — Illustrator's GPU acceleration for canvas rendering makes day-to-day work feel smoother, and the
                Radeon 840M is noticeably better than Intel integrated graphics for that.
            </Paragraph>
            <Paragraph>Are you comparing these for a purchase decision?</Paragraph>
        </Message>
        <Message
            at="2026-01-25T17:13:24.886247Z"
        >
            <Origin>019bf625-6676-7243-85ef-c30f71815b13</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Perfect, I would lean towards the intel. Are both docker compatible by chance? It used to be that only
                Windows 10 pro could do that. I don’t know if that’s true about Windows 11.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-25T17:13:40.543400Z"
        >
            <Origin>019bf625-6676-7243-85ef-c310f6c6c76b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Good news — that limitation is mostly gone now.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Docker Desktop works on Windows 11 Home
                </Word> (and Windows 10 Home too, since 2020). The old Pro requirement was because Docker needed Hyper-V,
                which was Pro-only. Now Docker Desktop uses <Word>
                    <Bold />
                    WSL 2
                </Word> (Windows Subsystem for Linux 2) as its backend, which works on Home editions.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Requirements for Docker on Windows 11:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>WSL 2 enabled (ships with Windows 11, just needs to be turned on)</Line>
                <Line>
                    Hardware virtualization enabled in BIOS (both those CPUs support it — AMD-V on the Ryzen, Intel VT-x on
                    the Core Ultra)
                </Line>
                <Line>64-bit processor ✓ (both have this)</Line>
                <Line>4+ GB RAM ✓ (both have 16 GB)</Line>
            </Paragraph>
            <Paragraph>
                So yes, both laptops will run Docker fine regardless of whether they have Windows 11 Home or Pro.
            </Paragraph>
            <Paragraph>The only reasons to still want Pro specifically would be:</Paragraph>
            <Paragraph>
                <List />
                <Line>Hyper-V for other VMs (not just Docker)</Line>
                <Line>BitLocker device encryption</Line>
                <Line>Remote Desktop host</Line>
                <Line>Group Policy editor</Line>
            </Paragraph>
            <Paragraph>
                You can check which edition they have: in that same Settings &gt; System &gt; About screen, scroll down to
                "Windows specifications" — it'll say "Windows 11 Home" or "Windows 11 Pro."
            </Paragraph>
        </Message>
        <Message
            at="2026-01-25T17:22:13.509516Z"
        >
            <Origin>019bf62d-7766-719d-9266-d398fe8afc45</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How do I add a user with a microsoft account to a computer</Paragraph>
        </Message>
        <Message
            at="2026-01-25T17:22:25.434136Z"
        >
            <Origin>019bf62d-7766-719d-9266-d399473060ad</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Settings method (easiest):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Open <Word>
                        <Bold />
                        Settings
                    </Word> (<Word>
                        <Verbatim />
                        Win + I
                    </Word>)
                </Line>
                <Line>
                    Go to <Word>
                        <Bold />
                        Accounts
                    </Word> → <Word>
                        <Bold />
                        Other users
                    </Word> (or "Family &amp; other users")
                </Line>
                <Line>
                    Click <Word>
                        <Bold />
                        Add account
                    </Word> (under "Other users")
                </Line>
                <Line>
                    Enter the person's Microsoft account email address (Outlook, Hotmail, or any email they've registered
                    with Microsoft)
                </Line>
                <Line>
                    Click <Word>
                        <Bold />
                        Next
                    </Word> → <Word>
                        <Bold />
                        Finish
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                That's it — next time they sign in at the lock screen, they'll use their Microsoft email and password, and
                Windows will set up their profile.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    To give them admin rights
                </Word> (if needed):
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>After adding them, click on their account in the Other users list</Line>
                <Line>
                    Click <Word>
                        <Bold />
                        Change account type
                    </Word>
                </Line>
                <Line>
                    Change from "Standard User" to <Word>
                        <Bold />
                        Administrator
                    </Word>
                </Line>
                <Line>
                    Click <Word>
                        <Bold />
                        OK
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Note:
                </Word> The new user needs to sign in at least once (at the lock screen, not through Switch User while
                you're logged in) for Windows to fully create their profile and download their Microsoft account settings.
            </Paragraph>
            <Paragraph>
                If they don't have a Microsoft account yet, they can create one during the sign-in process, or ahead of time
                at account.microsoft.com.
            </Paragraph>
        </Message>
    </Chapter>
);
