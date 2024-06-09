import plugin from '../../../lib/plugins/plugin.js'
import puppeteer from "../../../lib/puppeteer/puppeteer.js";

export class wenanhelp extends plugin {
  constructor() {
    super({
      name: '文案帮助',
      dsc: '文案帮助',
      event: 'message',
      priority: 5000,
      rule: [
        {
          reg: "^#?(文案|wenan|影)(插件)?(帮助|help)",
          fnc: 'help'
        },
      ]
    })
  }
	async help(e) {
    let cwd = `${process.cwd()}/plugins/wenan-plugin/resources/html/`
    cwd = cwd.replace(/\\/g,'/')

    let data = {
      quality:100,
      tplFile:`./plugins/wenan-plugin/resources/html/help.html`,
      鸡鸡地址:cwd
    }
    let img = await puppeteer.screenshot("wenan", {
      ...data,
    })
    e.reply(img)
	}

}