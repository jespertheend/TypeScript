currentDirectory:: / useCaseSensitiveFileNames: false
Info 0    [00:00:31.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/user/username/projects/myproject/a.ts]
import { y, cc } from "./b";
import { something } from "something";
class c { prop = "hello"; foo() { return this.prop; } }

//// [/user/username/projects/myproject/b.ts]
export { cc } from "./c";
import { something } from "something";
                export const y = 10;

//// [/user/username/projects/myproject/c.ts]
export const cc = 10;

//// [/user/username/projects/myproject/node_modules/something/index.d.ts]
export const something = 10;

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/user/username/projects/myproject/tsconfig.json]
{}


Info 1    [00:00:32.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/a.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info 2    [00:00:33.000] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info 3    [00:00:34.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 1 structureChanged: false Elapsed:: *ms
Info 4    [00:00:35.000] Same program as before
Info 5    [00:00:36.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 5    [00:00:37.000] 	Files (0) NoProgram

Info 5    [00:00:38.000] -----------------------------------------------
Info 5    [00:00:39.000] Open files: 
Info 5    [00:00:40.000] 	FileName: /user/username/projects/myproject/a.ts ProjectRootPath: undefined
Info 5    [00:00:41.000] 		Projects: /dev/null/inferredProject1*
Info 5    [00:00:42.000] response:
    {
      "responseRequired": false
    }
After request

Before request

Info 6    [00:00:43.000] request:
    {
      "command": "semanticDiagnosticsSync",
      "arguments": {
        "file": "/user/username/projects/myproject/a.ts"
      },
      "seq": 2,
      "type": "request"
    }
Info 7    [00:00:44.000] Request: semanticDiagnosticsSync not allowed in LanguageServiceMode.Syntactic
Info 8    [00:00:45.000] LanguageService Operation: getSemanticDiagnostics not allowed in LanguageServiceMode.Syntactic