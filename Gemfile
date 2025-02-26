source "https://rubygems.org"

# 添加 JSON gem 的版本约束
gem "json", "~> 2.6.3"

group :jekyll_plugins do
  # 锁定 Jekyll 版本（兼容 Ruby 3.1）
  gem "jekyll", "~> 4.4.1"
  
  # 其他插件（保持原样）
  gem "jekyll-email-protect"
  gem "jekyll-github-metadata"
  gem "jekyll-paginate-v2"
  gem "jekyll-scholar"
  gem "jekyll-twitter-plugin"
  gem "jemoji"
  gem "unicode_utils"
  gem "webrick"

  # 强制指定 sass-embedded 的兼容版本
  gem "sass-embedded", "~> 1.64.2"
end

# 添加 Ruby 3.1+ 对 webrick 的显式依赖（避免兼容性错误）
gem "webrick", "~> 1.7" if RUBY_VERSION >= "3.0.0"