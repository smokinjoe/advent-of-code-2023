import {
  createHotContext
} from "/build/_shared/chunk-L6PQP6OE.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/DayForm.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/DayForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/DayForm.tsx"
  );
  import.meta.hot.lastModified = "1705373450796.968";
}
var DayForm = ({
  day,
  sourceUrl,
  partOneHandler: partOneHandler2,
  partTwoHandler: partTwoHandler2
}) => {
  _s();
  const [data, setData] = (0, import_react.useState)("");
  const [result, setResult] = (0, import_react.useState)(0);
  const handlePartOneClick = () => {
    const result2 = partOneHandler2(data);
    setResult(result2);
  };
  const handlePartTwoClick = () => {
    const result2 = partTwoHandler2(data);
    setResult(result2);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: `Day ${day}` }, void 0, false, {
      fileName: "app/components/DayForm.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: sourceUrl, target: "_blank", rel: "noreferrer", children: "source" }, void 0, false, {
      fileName: "app/components/DayForm.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/DayForm.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { cols: 20, rows: 20, onChange: (e) => setData(e.target.value) }, void 0, false, {
      fileName: "app/components/DayForm.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/DayForm.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handlePartOneClick, disabled: data.length === 0, children: "Run Part One" }, void 0, false, {
      fileName: "app/components/DayForm.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/DayForm.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handlePartTwoClick, disabled: data.length === 0, children: "Run Part Two" }, void 0, false, {
      fileName: "app/components/DayForm.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/DayForm.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", value: result, readOnly: true }, void 0, false, {
      fileName: "app/components/DayForm.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/DayForm.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/DayForm.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
};
_s(DayForm, "lPPNIaVXCkyJjcteeZgAkqYxseg=");
_c = DayForm;
var _c;
$RefreshReg$(_c, "DayForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/utils/string.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/string.ts"
  );
  import.meta.hot.lastModified = "1705374423903.3572";
}
var convertMultiLineStringToArray = (stringData) => {
  return stringData.split("\n").filter((x) => Boolean(x));
};

// app/components/days/DayOne/partOne.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/days/DayOne/partOne.ts"
  );
  import.meta.hot.lastModified = "1705374437086.2034";
}
var extractNumberFromString = (data) => {
  const stringArray = data.split("");
  const numbersArray = [];
  stringArray.forEach((char) => {
    if (!isNaN(parseInt(char))) {
      numbersArray.push(char);
    }
  });
  const firstDigit = parseInt(numbersArray[0]);
  let secondDigit = parseInt(numbersArray[numbersArray.length - 1]);
  if (isNaN(secondDigit)) {
    secondDigit = firstDigit;
  }
  return firstDigit * 10 + secondDigit;
};
var partOneHandler = (data) => {
  const stringArray = convertMultiLineStringToArray(data);
  const numbersArray = stringArray.map(
    (string) => extractNumberFromString(string)
  );
  let sumValue = 0;
  numbersArray.forEach((number) => {
    sumValue += number;
  });
  return sumValue;
};

// app/components/days/DayOne/partTwo.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/days/DayOne/partTwo.ts"
  );
  import.meta.hot.lastModified = "1705374440737.6711";
}
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
};
var parseString = (data) => {
  const charArray = data.split("");
  const numbersArray = [];
  charArray.forEach((char, index) => {
    if (!isNaN(parseInt(char))) {
      numbersArray.push(parseInt(char));
    }
    let numberWord = "";
    for (let i = index; i < charArray.length; i++) {
      if (!isNaN(parseInt(charArray[i]))) {
        break;
      }
      numberWord += charArray[i];
      if (StringToNumberMap[numberWord]) {
        numbersArray.push(
          StringToNumberMap[numberWord]
        );
        numberWord = "";
      }
    }
  });
  const firstDigit = numbersArray[0];
  const secondDigit = numbersArray[numbersArray.length - 1];
  return firstDigit * 10 + secondDigit;
};
var partTwoHandler = (data) => {
  const stringArray = convertMultiLineStringToArray(data);
  const numbersArray = stringArray.map((string) => parseString(string));
  let sumValue = 0;
  numbersArray.forEach((number) => {
    sumValue += number;
  });
  return sumValue;
};

// app/components/days/DayOne/DayOne.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/days/DayOne/DayOne.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/days/DayOne/DayOne.tsx"
  );
  import.meta.hot.lastModified = "1705374462369.9417";
}
var DayOne = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DayForm, { day: "One", sourceUrl: "https://adventofcode.com/2023/day/1", partOneHandler, partTwoHandler }, void 0, false, {
    fileName: "app/components/days/DayOne/DayOne.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c2 = DayOne;
var _c2;
$RefreshReg$(_c2, "DayOne");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/days.one.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/days.one.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/days.one.tsx"
  );
  import.meta.hot.lastModified = "1705376156993.5535";
}
function DayOneRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DayOne, {}, void 0, false, {
    fileName: "app/routes/days.one.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c3 = DayOneRoute;
var _c3;
$RefreshReg$(_c3, "DayOneRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DayOneRoute as default
};
//# sourceMappingURL=/build/routes/days.one-TX7MEMIK.js.map
