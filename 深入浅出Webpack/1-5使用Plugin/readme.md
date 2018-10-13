报错： Use Chunks.groupsIterable and filter by instanceof EntryPoint
错误出现原因：
extract-text-webpack-plugin还不能支持webpack4.0.0以上的版本。
解决

npm install --save-dev extract-webpack-plugin@next
npm install --save-dev extract-text-webpack-plugin@next