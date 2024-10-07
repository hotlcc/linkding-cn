本仓库提供 [Linkding](https://github.com/sissbruecker/linkding) 中文汉化资源。

### 1、如何使用

#### 1.1、下载对应版本的资源

根据 Linkding 版本下载 [resources](resources) 目录中对应版本的 templates 文件夹。

#### 1.2、开发环境使用

用上面的 templates 文件夹覆盖 Linkding 中的 templates 文件夹即可。

#### 1.3、Docker中使用

将上面的 templates 文件夹映射至容器的 `/etc/linkding/bookmarks/templates` 目录。

如果出现类似 `PermissionError: [Errno 13] Permission denied: '/etc/linkding/bookmarks/templates/500.html'` 权限不足的错误，需要给 templates 文件夹赋予完整的读权限。

### 2、自行汉化

如果需要自行汉化或者翻译为其他语言，可以使用 [text-replace](tools/text-replace) 工具。
