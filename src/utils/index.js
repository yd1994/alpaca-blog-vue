import Vue from 'vue'
import iView from 'iview'
Vue.use(iView.Message)
Vue.use(iView.Modal)

let utils = {}

utils.model = {}
/**
 * 确认删除model
 * @param config Object
 * config.title 标题
 * config.content 内容
 * config.ok 确定按钮回调函数
 * config.cancel 取消按钮回调函数
 */
utils.model.confirmDeletion = function (config) {
  iView.Modal.confirm({
    title: config.title === undefined ? '确认删除' : config.title,
    content: config.content === undefined ? '' : config.content,
    onOk: () => {
      iView.Message.info('Clicked ok')
      utils.runFunction(config.ok)
    },
    onCancel: () => {
      iView.Message.info('Clicked cancel')
      utils.runFunction(config.cancel)
    }
  })
}
/**
 * 运行function
 * @param f function
 */
utils.runFunction = function (f) {
  if (typeof f === 'function') {
    f.call()
  }
}

export default utils
