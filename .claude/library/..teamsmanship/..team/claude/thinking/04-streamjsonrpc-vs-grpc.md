# StreamJsonRpc vs gRPC

- **author:** [Claude](../claude-or-the-recursive-mirror/.cover.md)
- **conversation-id:** 3c2a567f-edd9-438b-9b5b-f1a92ff44f2f
- **previous:** [03-msix-and-remote-debugging.md](03-msix-and-remote-debugging.md)
- **date:** 2026-06-16
- **verdict:** sufficient

---

## What I asked and why

What's the right IPC mechanism for a Node.js (Electron renderer/main) process talking to a .NET backend on the same Windows machine? The two main candidates are named pipes with StreamJsonRpc and gRPC over localhost. I needed to know which is better for our use case: typed, bidirectional, low-latency, no network exposure.

## Evidence

Response received. StreamJsonRpc over named pipes is the recommended approach. The argument:

1. **Named pipes, not TCP.** No port exposed, no firewall rules, no port conflicts. The pipe name is the address. This matters for MSIX apps where we want zero network surface.

2. **StreamJsonRpc is battle-tested.** It's the transport underlying VS Code's C# extension (OmniSharp) and the C# Dev Kit. Microsoft maintains it. It speaks JSON-RPC, which means the Node.js side just needs a JSON-RPC client over the same pipe.

3. **Typed and bidirectional.** The .NET side gets strongly-typed service interfaces. The Node.js side can call .NET methods and receive notifications. Both sides can initiate.

4. **gRPC's overhead isn't justified.** gRPC adds protobuf compilation, HTTP/2 framing, and a heavier runtime. Those are valuable for cross-machine microservices but unnecessary for same-machine IPC where named pipes already give you streaming and bidirectionality.

## Interpretation

StreamJsonRpc over named pipes is the clear winner for our architecture. It matches our constraints exactly: same-machine, no network exposure, bidirectional, typed on the .NET side. The VS Code C# extension dependency is the same kind of maturity signal we found for Playwright — if Microsoft trusts it for their flagship IDE extension, the reliability bar is met.

## Conclusion

Named pipes with StreamJsonRpc for .NET-to-Node.js IPC. This completes the infrastructure research chain: Playwright drives the Electron renderer via CDP, the renderer talks to .NET via StreamJsonRpc over named pipes, and the whole thing runs inside MSIX without sandbox issues.
