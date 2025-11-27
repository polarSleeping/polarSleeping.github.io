+++
date = '2025-11-26T14:39:16+08:00'
draft = false
title = 'Lua_note'
tags = ["lua", "programming", "notes"]
+++

全局变量
```lua
a = 1
```
局部变量
```lua
local b = 2
```
同时赋值
```lua
local c, d = 0x11, 2e10
```
> 这里的c和d都是局部变量

没有被声明的变量都是`nil`

算术运算符
```lua
+ - * / ^ % << >>
```

字符串
```lua
local str = "hello world"
str1 = 'Lua is great!'
str2 = [[This is a
multi-line string.]]
print(#str) -- 11
print(string.len(str)) -- 11
print(string.sub(str, 1, 5)) -- hello
print(string.find(str, "world")) -- 7 11
print(string.format("Number: %.2f", 3.14159)) -- Number: 3.14

print(str .. " " .. str1) -- hello world Lua is great!
print(tostring(123)) -- "123"
print(tonumber("456")) -- 456
```


