#!/usr/bin/env bash

# 整理信息
node ./optimize-package.js

npm publish --access=public --registry=https://registry.npmjs.org/

# 等待操作完成
wait
# 打印输出
echo "发布完成"

exit 0