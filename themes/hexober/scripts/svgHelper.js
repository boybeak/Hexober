const fs = require('fs');
const path = require('path');

// 注册名为 read_svg 的 helper
hexo.extend.helper.register('read_svg', function (svgPath) {
  try {
    // 拼接路径，确保相对路径指向 Hexo 项目的 source 目录
    const fullPath = path.join(hexo.source_dir, svgPath);
    // 读取 SVG 文件内容
    return fs.readFileSync(fullPath, 'utf-8');
  } catch (err) {
    console.error(`Error reading SVG file: ${svgPath}`, err);
    return ''; // 读取失败返回空
  }
});
