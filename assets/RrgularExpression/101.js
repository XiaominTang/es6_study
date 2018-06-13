  正则语法：
  /正则表达式主题/修饰符（可选）

  修饰符：
  i:不区分大小写
  u:使用Unicode模式 / UTF-16编码
  （能把四个字节的UTF-16编码识别为一个字符）


  正则表达式常用于四个字符串方法：
  search();//返回正则表达式在字符串中的起始位置
  replace("正则表达式"，"要替换成的字符串");//返回替换后的字符串
  match();
  split();
  test();//RegExpObject.test(string);如果 string 中能匹配到正则表达式则返回true，否则返回false
  用法：

 