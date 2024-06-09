import lodash from 'lodash'
import plugin from '../../../lib/plugins/plugin.js'
import cards from '../data/zao.js'

export class djt extends plugin {
  constructor () {
    super({
      name: 'zao',
      dsc: '早安',
      event: 'message',
      priority: 5000,
      rule: [
        {
          reg: '^#?(早安|早|早上好|早啊)(\\s|$)',
          fnc: 'zao'
        }
      ]
    })
    this.prefix = 'L:other:zao:'
  }

  async zao () {
    const card = lodash.sample(cards)

    let msg = `${card?.dsc}`
    if (this.e.isGroup) {
      msg = '' + msg
    }
    await this.reply(msg, false, { at: false})
  }
}
