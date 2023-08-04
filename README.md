- 🚀 使用 Prettier 统一格式化代码，集成 Eslint、Stylelint 代码校验规范（项目规范配置）
- 🚀 使用 husky、lint-staged、commitlint、commitizen、cz-git 规范提交信息（项目规范配置）
- 🚀 使用 TypeScript 对 Axios 二次封装 （错误拦截、常用请求封装、全局请求 Loading、取消重复请求…）
- 🚀 使用 conventional-changelog 生成change-log
- 🚀 使用 @iconify/react 图标图，拥有15000个图标
- 🚀 使用 unocss 来写减少css以及class的编写
- 🚀 使用 redux 做状态管理，集成 immer、react-redux、redux-persist 开发

ESLint+Prettier+Stylelint+EditorConfig 约束和统一前端代码规范

pnpm create @eslint/config

npx prettier --write .

npm init stylelint   npx stylelint "**/*.css"

Husky + Lint-staged + Commitlint + Commitizen + cz-git 配置 Git 提交规范

npx husky-init && npm install

**详情 参考官网，npm，github**

```js
// prettier          https://github.com/prettier/eslint-config-prettier#installation
// commitlint        https://github.com/conventional-changelog/commitlint
// commitizen        https://github.com/commitizen/cz-cli
// typescript-eslint https://typescript-eslint.io/rules/no-non-null-assertion/
// git-cz            https://github.com/streamich/git-cz
// iconify           https://github.com/iconify/iconify/tree/main/components/react
// immer             https://immerjs.github.io/immer/

```


```js
    "printWidth": 80,//（默认值）单行代码超出 80 个字符自动换行
    "tabWidth": 2, //（默认值）一个 tab 键缩进相当于 2 个空格
    useTabs: true,                     // 行缩进不使用 tab 键代替空格
    semi: false,                       //（默认值）禁止语句的末尾加上分号
    singleQuote: true,                 // 使用单引号
    quoteProps: 'as-needed',           //（默认值）仅仅当必须的时候才会加上双引号
    jsxSingleQuote: true,              // 在 JSX 中使用单引号
    trailingComma: 'none',              // 不用在多行的逗号分隔的句法结构的最后一行的末尾加上逗号
    bracketSpacing: true,              //（默认值）在括号和对象的文字之间加上一个空格
    jsxBracketSameLine: true,          // 把 > 符号放在多行的 JSX 元素的最后一行
    arrowParens: 'avoid',              // 当箭头函数中只有一个参数的时候可以忽略括弧
    vueIndentScriptAndStyle: false,    //（默认值）对于 .vue 文件，不缩进 <script> 和 <style> 里的内容
    embeddedLanguageFormatting: 'off', // 不允许格式化内嵌的代码块，比如 markdown  文件里的代码块
    console: false

```

stylelint

npx stylelint "src/*.css"

```js
	indentation: null, // 指定缩进空格
	"no-descending-specificity": null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
	"function-url-quotes": "always", // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
	"string-quotes": "double", // 指定字符串使用单引号或双引号
	"unit-case": null, // 指定单位的大小写 "lower(全小写)"|"upper(全大写)"
	"color-hex-case": "lower", // 指定 16 进制颜色的大小写 "lower(全小写)"|"upper(全大写)"
	"color-hex-length": "long", // 指定 16 进制颜色的简写或扩写 "short(16进制简写)"|"long(16进制扩写)"
	"rule-empty-line-before": "never", // 要求或禁止在规则之前的空行 "always(规则之前必须始终有一个空行)"|"never(规则前绝不能有空行)"|"always-multi-line(多行规则之前必须始终有一行)"|	"never-multi-line(多行规则之前绝不能有空行。)"
	"font-family-no-missing-generic-family-keyword": null, // 禁止在字体族名称列表中缺少通用字体族关键字
	"block-opening-brace-space-before": "always", // 要求在块的开大括号之前必须有一个空格或不能有空白符 "always(大括号前必须始终有一个空格)"|"never(左大括号之前绝不能有空格)	"always-single-line(在单行块中的左大括号之前必须始终有一个空格)"|"never-single-line(在单行块中的左大括号之前绝不能有空格)"|"always-multi-line(在多行块中，左大括号之前必须始终有空格)"|	"never-multi-line(多行块中的左大括号之前绝不能有空格)"
	"property-no-unknown": null, // 禁止未知的属性(true 为不允许)
	"no-empty-source": null, // 禁止空源码
	"declaration-block-trailing-semicolon": null, // 要求或不允许在声明块中使用尾随分号 string："always(必须始终有一个尾随分号)"|"never(不得有尾随分号)"
	"selector-class-pattern": null, // 强制选择器类名的格式
	"value-no-vendor-prefix": null, // 关闭 vendor-prefix(为了解决多行省略 -webkit-box)
	"at-rule-no-unknown": null,
	"selector-pseudo-class-no-unknown": [
		true,
		{
			ignorePseudoClasses: ["global", "v-deep", "deep"]
		}
	]

```

```
    "extends": [
        "stylelint-config-standard",
        "stylelint-config-standard-scss",
				"stylelint-config-prettier-scss",
        "stylelint-config-prettier",
				"stylelint-config-recess-order"
    ],
```
