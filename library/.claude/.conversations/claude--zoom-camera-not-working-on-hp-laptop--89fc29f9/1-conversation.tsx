import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[11 February 2026](2026-02-11)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-02-11T10:02:29.597918Z"
        >
            <Origin>019c4c27-00b6-79a3-b0fb-91172bf71925</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Why is Zoom video not working with my laptop’s camera?</Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-02-11T10:02:48.148261Z"
        >
            <Origin>019c4c27-00b6-764f-ac29-b2fe69ed5acd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I can see your Zoom video settings with the "HP True Vision FHD Camera" selected, but the camera icon is
                crossed out — meaning Zoom detects the camera but can't get a feed from it.
            </Paragraph>
            <Paragraph>Here are the most common fixes, starting with the most likely:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Check if another app is using the camera.
                </Word> Close any other apps that might have the camera open (Teams, Skype, browser tabs with video calls,
                Windows Camera app, etc.). Only one app can use the camera at a time.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Check Windows privacy settings.
                </Word> Go to <Word>
                    <Bold />
                    Settings → Privacy &amp; Security → Camera
                </Word> and make sure both "Camera access" is turned on and Zoom is allowed to use it. This is the most
                common culprit on HP laptops.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Check for a physical camera kill switch.
                </Word> Many HP laptops have a dedicated camera privacy key (often <Word>
                    <Bold />
                    F8
                </Word> or a key with a camera icon on the function row). Press it to toggle the camera on. Some models also
                have a physical slider near the camera lens.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Restart the camera driver.
                </Word> Open <Word>
                    <Bold />
                    Device Manager → Cameras → HP True Vision FHD Camera
                </Word>, right-click and choose <Word>
                    <Bold />
                    Disable device
                </Word>, wait a few seconds, then <Word>
                    <Bold />
                    Enable device
                </Word> again.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5. Update the camera driver.
                </Word> In Device Manager, right-click the camera and select <Word>
                    <Bold />
                    Update driver
                </Word>. You can also check HP's support site for your specific laptop model.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    6. Restart Zoom entirely
                </Word> (not just leave the meeting — fully quit and reopen it).
            </Paragraph>
            <Paragraph>
                I'd start with #2 and #3 since those catch the vast majority of cases on HP machines. Let me know what you
                find.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-11T10:04:27.794311Z"
        >
            <Origin>019c4c28-cd3a-765f-9f47-2ce2b831c260</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                It looks like it can use it. It says it is. It sees the camera. What else might need to be set
            </Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-02-11T10:04:42.397764Z"
        >
            <Origin>019c4c28-cd3a-79b8-8730-001cf298b008</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Your privacy settings all look correct — Zoom even shows "Currently in use." So that's not the issue.
            </Paragraph>
            <Paragraph>Since Zoom sees the camera and Windows is granting access, here's what to check next:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Most likely: HP camera privacy key.
                </Word> Look at your keyboard's function row for a key with a camera icon (usually <Word>
                    <Bold />
                    F8
                </Word> on HP laptops). Press it (you may need to hold <Word>
                    <Bold />
                    Fn + F8
                </Word> depending on your function key settings). There's often a small LED indicator near the camera that
                shows orange/red when the camera is physically disabled. This hardware-level kill switch overrides
                everything in software.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If that's not it:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Open <Word>
                        <Bold />
                        Device Manager
                    </Word> (right-click Start button → Device Manager), expand <Word>
                        <Bold />
                        Cameras
                    </Word>, and check if the HP True Vision camera has a yellow warning triangle. If so, right-click →
                    <Word>
                        <Bold />
                        Uninstall device
                    </Word>, then reboot — Windows will reinstall the driver automatically.
                </Line>
                <Line>
                    Try opening the <Word>
                        <Bold />
                        Windows Camera app
                    </Word> directly (search "Camera" in Start). If that also shows a black screen or crossed-out icon, the
                    issue is system-wide, not Zoom-specific — which points back to either the hardware kill switch or a
                    driver problem.
                </Line>
            </Paragraph>
            <Paragraph>I'd bet on the privacy key being the culprit. Check for that first.</Paragraph>
        </Message>
    </Chapter>
);
