## 文本批量规则替换

> 根据规则配置批量替换文本内容。

### 1、使用方法

#### 1.1、查看帮助

```shell
sh text-replace.sh -h
```

#### 1.2、执行替换

```shell
sh text-replace.sh -i [输入目录] -o [输出目录] -r [规则文件]
```

- 输入目录：输入文件所在目录，必须
- 输出目录：输出文件所在目录，非必须。缺省时根据输入目录自动生成
- 规则文件：规则配置文件，必须。YAML格式

### 1.3、规则文件

示例：

```yml
- includes:
    - '*.txt'
    - '*/**/*.txt'
  excludes:
    - '*/**/*-exclude.txt'
  items:
    - expression: 'name'
      replacement: '名称'
    - expression: 'age'
      expression-type: 'TEXT'
      replacement: '年龄'
    - expression: '\d+岁'
      expression-type: 'REGEXP'
      replacement: '*岁'
```

- `includes`：包含的文件，非必须。缺省时包含所有文件
- `excludes`：排除的文件，非必须。缺省时不排除文件
- `items`：替换规则
- `items.expression`：匹配表达式，必须。可以是一般文本或者正则表达式。
- `items.expression-type`：匹配表达式类型，非必须。可以是 `TEXT` 或者 `REGEXP`，缺省时为 `TEXT`。
- `items.replacement`：替换内容

更多示例参考：resources/版本/*.yml
