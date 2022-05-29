// .commitlintrc.js
// type 指提交的类型
// subject 指提交的摘要信息
{/* <type>: <subject> */}
// feat: 添加新功能。
// fix: 修复 Bug。
// chore: 一些不影响功能的更改。
// docs: 专指文档的修改。
// perf: 性能方面的优化。
// refactor: 代码重构。
// test: 添加一些测试代码
module.exports = {
    extends: ["@commitlint/config-conventional"]
  };