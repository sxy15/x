export default {
  extends: ['@commitlint/config-conventional'],
  prompt: {
    questions: {
      type: '选择提交类型:',
      enum: {
        feat: {
          description: '新功能',
          title: 'Features',
          emoji: '✨',
        },
        fix: {
          description: '修复问题',
          title: 'Bug Fixes',
          emoji: '🐛',
        },
        perf: {
          description: '性能优化',
          title: 'Performance Improvements',
          emoji: '⚡️',
        },
        docs: {
          description: '文档更新',
          title: 'Documentation',
          emoji: '📚',
        },
        style: {
          description: '代码格式',
          title: 'Styles',
          emoji: '💄',
        },
        refactor: {
          description: '重构代码',
          title: 'Code Refactoring',
          emoji: '💡',
        },
        test: {
          description: '测试',
          title: 'Tests',
          emoji: '🚨',
        },
        chore: {
          description: '构建过程或辅助工具的变动',
          title: 'Chores',
          emoji: '🤖',
        },
        ci: {
          description: 'CI/CD 配置',
          title: 'Continuous Integrations',
          emoji: '🎡',
        },
        build: {
          description: '构建',
          title: 'Builds',
          emoji: '🏗️',
        },
        revert: {
          description: '回滚',
          title: 'Reverts',
          emoji: '⏪',
        },
      },
      scope: {
        description: '影响范围',
      },
      subject: {
        description: '简短描述',
      },
      body: {
        description: '详细描述',
      },
      footer: {
        description: '关联的 ISSUE',
      },
      issues: {
        description: '关联的 ISSUE',
      },
    },
  },
}
