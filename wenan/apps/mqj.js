import lodash from 'lodash'
import plugin from '../../../lib/plugins/plugin.js'
import cards from '../data/mqj.js'

export class djt extends plugin {
  constructor () {
    super({
      name: 'mqj',
      dsc: '母亲节文案',
      event: 'message',
      priority: 5000,
      rule: [
        {
          reg: '^#?(母亲节文案|母亲节|妈妈快乐|妈妈节|母亲|妈妈|母亲节快乐)(\\s|$)',
          fnc: 'mqj'
        }
      ]
    })
    this.prefix = 'L:other:mqj:'
  }

  async mqj () {
    const card = lodash.sample(cards)

    let msg = `${card?.dsc}`
    if (this.e.isGroup) {
      msg = '祝您母亲节快乐！' + msg
    }
    await this.reply(msg, false, { at: false})
  }
}
