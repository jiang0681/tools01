import lodash from 'lodash'
import plugin from '../../../lib/plugins/plugin.js'
import cards from '../data/feng.js'

export class djt extends plugin {
  constructor () {
    super({
      name: 'feng',
      dsc: '发疯',
      event: 'message',
      priority: 5000,
      rule: [
        {
          reg: '^#?(发疯)(\\s|$)',
          fnc: 'feng'
        }
      ]
    })
    this.prefix = 'L:other:feng:'
  }

  async feng () {
    const card = lodash.sample(cards)

    let msg = `${card?.dsc}`
    if (this.e.isGroup) {
      msg = '' + msg
    }
    await this.reply(msg, false, { at: false})
  }
}
