import lodash from 'lodash'
import plugin from '../../../lib/plugins/plugin.js'
import cards from '../data/eula.js'

export class Eula extends plugin {
  constructor () {
    super({
      name: 'eula',
      dsc: '优菈厨',
      event: 'message',
      priority: 5000,
      rule: [
        {
          reg: '^#?(优菈厨|小宝日记)(\\s|$)',
          fnc: 'eula'
        }
      ]
    })
    this.prefix = 'L:other:eula:'
  }

  async eula () {
    const card = lodash.sample(cards)

    let msg = `${card?.name}\n${card?.dsc}`
    if (this.e.isGroup) {
      msg = '\n' + msg
    }
    await this.reply(msg, false, { at: true })
  }
} 