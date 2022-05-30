export default {
  preset: 'ts-jest',
  globals: {},
  testEnvironment: 'jsdom', // jest@28.x 以上需要手动安装 jest-environment-jsdom
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\js$': 'babel-jest'
  },
  // 忽略执行测试文件目录
  testPathIgnorePatterns: [
    "/getting-start/"
  ],
  // 识别 alias
  moduleNameMapper: {
    "^/@/(.*)$": "<rootDir>/src/$1"
  }
}