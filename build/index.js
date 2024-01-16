var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/styles/styles.css
var styles_default = "/build/_assets/styles-7KVSRIQ4.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: styles_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/days._index.tsx
var days_index_exports = {};
__export(days_index_exports, {
  default: () => DaysIndexRoute
});
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function DaysIndexRoute() {
  return /* @__PURE__ */ jsxDEV3("div", { children: /* @__PURE__ */ jsxDEV3("h1", { children: "Please select a day!" }, void 0, !1, {
    fileName: "app/routes/days._index.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/days._index.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/days.one.tsx
var days_one_exports = {};
__export(days_one_exports, {
  default: () => DayOneRoute
});

// app/components/DayForm.tsx
import { useState } from "react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var DayForm = ({
  day,
  sourceUrl,
  partOneHandler: partOneHandler2,
  partTwoHandler: partTwoHandler2
}) => {
  let [data, setData] = useState(""), [result, setResult] = useState(0), handlePartOneClick = () => {
    let result2 = partOneHandler2(data);
    setResult(result2);
  }, handlePartTwoClick = () => {
    let result2 = partTwoHandler2(data);
    setResult(result2);
  };
  return /* @__PURE__ */ jsxDEV4("div", { children: [
    /* @__PURE__ */ jsxDEV4("h1", { children: `Day ${day}` }, void 0, !1, {
      fileName: "app/components/DayForm.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("p", { children: /* @__PURE__ */ jsxDEV4("a", { href: sourceUrl, target: "_blank", rel: "noreferrer", children: "source" }, void 0, !1, {
      fileName: "app/components/DayForm.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/DayForm.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { children: /* @__PURE__ */ jsxDEV4(
      "textarea",
      {
        cols: 20,
        rows: 20,
        onChange: (e) => setData(e.target.value)
      },
      void 0,
      !1,
      {
        fileName: "app/components/DayForm.tsx",
        lineNumber: 38,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/DayForm.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { children: /* @__PURE__ */ jsxDEV4("button", { onClick: handlePartOneClick, disabled: data.length === 0, children: "Run Part One" }, void 0, !1, {
      fileName: "app/components/DayForm.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/DayForm.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { children: /* @__PURE__ */ jsxDEV4("button", { onClick: handlePartTwoClick, disabled: data.length === 0, children: "Run Part Two" }, void 0, !1, {
      fileName: "app/components/DayForm.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/DayForm.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { children: /* @__PURE__ */ jsxDEV4("input", { type: "text", value: result, readOnly: !0 }, void 0, !1, {
      fileName: "app/components/DayForm.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/DayForm.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/DayForm.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
};

// app/utils/string.ts
var convertMultiLineStringToArray = (stringData) => stringData.split(`
`).filter((x) => Boolean(x));

// app/components/days/DayOne/partOne.ts
var extractNumberFromString = (data) => {
  let stringArray = data.split(""), numbersArray = [];
  stringArray.forEach((char) => {
    isNaN(parseInt(char)) || numbersArray.push(char);
  });
  let firstDigit = parseInt(numbersArray[0]), secondDigit = parseInt(numbersArray[numbersArray.length - 1]);
  return isNaN(secondDigit) && (secondDigit = firstDigit), firstDigit * 10 + secondDigit;
}, partOneHandler = (data) => {
  let numbersArray = convertMultiLineStringToArray(data).map(
    (string) => extractNumberFromString(string)
  ), sumValue = 0;
  return numbersArray.forEach((number) => {
    sumValue += number;
  }), sumValue;
};

// app/components/days/DayOne/partTwo.ts
var StringToNumberMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
}, parseString = (data) => {
  let charArray = data.split(""), numbersArray = [];
  charArray.forEach((char, index) => {
    isNaN(parseInt(char)) || numbersArray.push(parseInt(char));
    let numberWord = "";
    for (let i = index; i < charArray.length && isNaN(parseInt(charArray[i])); i++)
      numberWord += charArray[i], StringToNumberMap[numberWord] && (numbersArray.push(
        StringToNumberMap[numberWord]
      ), numberWord = "");
  });
  let firstDigit = numbersArray[0], secondDigit = numbersArray[numbersArray.length - 1];
  return firstDigit * 10 + secondDigit;
}, partTwoHandler = (data) => {
  let numbersArray = convertMultiLineStringToArray(data).map((string) => parseString(string)), sumValue = 0;
  return numbersArray.forEach((number) => {
    sumValue += number;
  }), sumValue;
};

// app/components/days/DayOne/DayOne.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var DayOne = () => /* @__PURE__ */ jsxDEV5(
  DayForm,
  {
    day: "One",
    sourceUrl: "https://adventofcode.com/2023/day/1",
    partOneHandler,
    partTwoHandler
  },
  void 0,
  !1,
  {
    fileName: "app/components/days/DayOne/DayOne.tsx",
    lineNumber: 8,
    columnNumber: 5
  },
  this
);

// app/routes/days.one.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function DayOneRoute() {
  return /* @__PURE__ */ jsxDEV6(DayOne, {}, void 0, !1, {
    fileName: "app/routes/days.one.tsx",
    lineNumber: 10,
    columnNumber: 10
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});

// app/components/DayNavigation.tsx
import { Link } from "react-router-dom";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var DaysData = [
  { day: 1, title: "Day One", url: "days/one" },
  { day: 2, title: "Day Two", url: "days/two" },
  { day: 3, title: "Day Three", url: "days/three" },
  { day: 4, title: "Day Four", url: "days/four" },
  { day: 5, title: "Day Five", url: "days/five" },
  { day: 6, title: "Day Six", url: "days/six" }
], DayNavigation = () => /* @__PURE__ */ jsxDEV7("nav", { children: [
  /* @__PURE__ */ jsxDEV7(Link, { to: "/", children: "Home" }, void 0, !1, {
    fileName: "app/components/DayNavigation.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this),
  DaysData.map((day) => /* @__PURE__ */ jsxDEV7(Link, { to: `${day.url}`, children: day.title }, day.day, !1, {
    fileName: "app/components/DayNavigation.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this))
] }, void 0, !0, {
  fileName: "app/components/DayNavigation.tsx",
  lineNumber: 14,
  columnNumber: 5
}, this);

// app/routes/_index.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "Advent of Code 2023" },
  { name: "description", content: "Advent of Code 2023" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV8("div", { children: [
    /* @__PURE__ */ jsxDEV8("h1", { children: "Welcome to Joe's Advent of Code 2023" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8(DayNavigation, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { children: /* @__PURE__ */ jsxDEV8("h1", { children: "Please select a day!" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/days.tsx
var days_exports = {};
__export(days_exports, {
  default: () => DaysRoute
});
import { Outlet as Outlet2 } from "@remix-run/react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function DaysRoute() {
  return /* @__PURE__ */ jsxDEV9("div", { children: [
    /* @__PURE__ */ jsxDEV9("h1", { children: "Welcome to Joe's Advent of Code 2023" }, void 0, !1, {
      fileName: "app/routes/days.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9(DayNavigation, {}, void 0, !1, {
      fileName: "app/routes/days.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("main", { children: /* @__PURE__ */ jsxDEV9(Outlet2, {}, void 0, !1, {
      fileName: "app/routes/days.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/days.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/days.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-3X5LQ4MJ.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-EA6B7EGN.js", "/build/_shared/chunk-HXVSJHC5.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-L6PQP6OE.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-PODMBJXS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-OTU2KZX3.js", imports: ["/build/_shared/chunk-OGTVU7ZO.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/days": { id: "routes/days", parentId: "root", path: "days", index: void 0, caseSensitive: void 0, module: "/build/routes/days-OZTWIYHS.js", imports: ["/build/_shared/chunk-OGTVU7ZO.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/days._index": { id: "routes/days._index", parentId: "routes/days", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/days._index-AT43BTAC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/days.one": { id: "routes/days.one", parentId: "routes/days", path: "one", index: void 0, caseSensitive: void 0, module: "/build/routes/days.one-TX7MEMIK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "3b4fea03", hmr: { runtime: "/build/_shared/chunk-L6PQP6OE.js", timestamp: 1705376157581 }, url: "/build/manifest-3B4FEA03.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/days._index": {
    id: "routes/days._index",
    parentId: "routes/days",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: days_index_exports
  },
  "routes/days.one": {
    id: "routes/days.one",
    parentId: "routes/days",
    path: "one",
    index: void 0,
    caseSensitive: void 0,
    module: days_one_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/days": {
    id: "routes/days",
    parentId: "root",
    path: "days",
    index: void 0,
    caseSensitive: void 0,
    module: days_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
