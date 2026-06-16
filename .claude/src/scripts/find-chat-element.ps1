# find-chat-element.ps1 — find a chat item by name in the UIA tree
param([int]$Handle, [string]$SearchName = 'Samantha')

Add-Type -AssemblyName UIAutomationClient
Add-Type -AssemblyName UIAutomationTypes

$uia = [System.Windows.Automation.AutomationElement]
$window = $uia::FromHandle([IntPtr]::new($Handle))

# Direct search by name
$cond = New-Object System.Windows.Automation.PropertyCondition($uia::NameProperty, $SearchName)
$el = $window.FindFirst([System.Windows.Automation.TreeScope]::Descendants, $cond)

if ($el) {
    Write-Host "Found '$SearchName':"
    Write-Host "  ControlType: $($el.Current.ControlType.ProgrammaticName)"
    Write-Host "  AutomationId: $($el.Current.AutomationId)"
    Write-Host "  ClassName: $($el.Current.ClassName)"
    $patterns = $el.GetSupportedPatterns()
    foreach ($p in $patterns) {
        Write-Host "  Pattern: $($p.ProgrammaticName)"
    }

    # Try to click it
    $invoke = $null
    if ($el.TryGetCurrentPattern([System.Windows.Automation.InvokePattern]::Pattern, [ref]$invoke)) {
        $invoke.Invoke()
        Write-Host "Clicked via InvokePattern"
    } else {
        Write-Host "No InvokePattern available"
    }
} else {
    Write-Host "'$SearchName' not found"
}
