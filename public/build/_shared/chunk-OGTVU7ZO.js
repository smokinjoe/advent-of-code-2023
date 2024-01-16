import {
  Link,
  init_dist2 as init_dist
} from "/build/_shared/chunk-HXVSJHC5.js";
import {
  createHotContext
} from "/build/_shared/chunk-L6PQP6OE.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/DayNavigation.tsx
init_dist();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/DayNavigation.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/DayNavigation.tsx"
  );
  import.meta.hot.lastModified = "1705374655358.1213";
}
var DaysData = [{
  day: 1,
  title: "Day One",
  url: "days/one"
}, {
  day: 2,
  title: "Day Two",
  url: "days/two"
}, {
  day: 3,
  title: "Day Three",
  url: "days/three"
}, {
  day: 4,
  title: "Day Four",
  url: "days/four"
}, {
  day: 5,
  title: "Day Five",
  url: "days/five"
}, {
  day: 6,
  title: "Day Six",
  url: "days/six"
}];
var DayNavigation = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Home" }, void 0, false, {
      fileName: "app/components/DayNavigation.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    DaysData.map((day) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `${day.url}`, children: day.title }, day.day, false, {
      fileName: "app/components/DayNavigation.tsx",
      lineNumber: 50,
      columnNumber: 28
    }, this))
  ] }, void 0, true, {
    fileName: "app/components/DayNavigation.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
};
_c = DayNavigation;
var _c;
$RefreshReg$(_c, "DayNavigation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  DayNavigation
};
//# sourceMappingURL=/build/_shared/chunk-OGTVU7ZO.js.map
