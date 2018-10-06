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
utils.model.confirm = function (config) {
  iView.Modal.confirm({
    title: config.title === undefined ? '确认删除' : config.title,
    content: config.content === undefined ? '' : config.content,
    onOk: () => {
      utils.runFunction(config.onOk)
    },
    onCancel: () => {
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
/**
 * 运行函数列的首个可运行函数
 * @param functionArray
 */
utils.runFirstFunctionArray = function (functionArray) {
  console.info('runFirstFunctionArray', functionArray)
  for (let i = 0; i < functionArray.length; i++) {
    let f = functionArray[i]
    if (typeof f === 'function') {
      f.call()
      break
    }
  }
  /*
  try {
    functionArray.forEach(f => {
      if (typeof f === 'function') {
        f.call()
        throw new Error('run finish')
      }
    })
  } catch (e) {
    // 循环结束
  }
  */
}

utils.httpResponsePostProcessing = function (response, methods) {
  switch (response.status) {
    case 200:
      utils.runFirstFunctionArray([methods.method200, () => {
        iView.Message.success('请求成功')
      }])
      break
    case 400:
      utils.runFirstFunctionArray([methods.method400, () => {
        iView.Message.error('参数有误')
      }])
      break
    case 401:
      utils.runFirstFunctionArray([methods.method401, () => {
        iView.Message.error('请先登录')
      }])
      break
    case 403:
      utils.runFirstFunctionArray([methods.method403, () => {
        iView.Message.error('没有此权限')
      }])
      break
    case 404:
      utils.runFirstFunctionArray([methods.method404, () => {
        iView.Message.error('无法连接服务器：消失在茫茫人海中')
      }])
      break
    case 500:
      utils.runFirstFunctionArray([methods.method500, () => {
        iView.Message.error('服务器：服务君不知哪儿去')
      }])
      break
  }
}

export default utils
