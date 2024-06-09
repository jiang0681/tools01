import plugin from '../../../lib/plugins/plugin.js'
import { execSync } from 'child_process'
import { update } from '../../other/update.js'
const Plugin_Name = 'wenan-plugin'


export class xianyu_update extends plugin {
	constructor() {
		super({
			/** 功能名称 */
			name: '文案插件_更新',
			/** 功能描述 */
			dsc: '调用Yunzai自带更新模块进行插件更新(已自定义化,建议不要更新)',
			/** https://oicqjs.github.io/oicq/#events */
			event: 'message',
			/** 优先级，数字越小等级越高 */
			priority: 2000,
			rule: [
				{
					/** 命令正则匹配 */
					reg: '^#?sdzgrsuyevytubvaulibyat',
					/**(文案|wenan)(插件)?(强制)?更新$*/
					/** 执行方法 */
					fnc: 'update_plugin',
					permission: 'master'
				},
			]
		});
	}

	async update_plugin() {
		let Update_Plugin = new update();
		Update_Plugin.e = this.e;
		Update_Plugin.reply = this.reply;

		if (Update_Plugin.getPlugin(Plugin_Name)) {
			if (this.e.msg.includes('强制')) {
				await execSync('git reset --hard', { cwd: `${process.cwd()}/plugins/${Plugin_Name}/` });
			}
			await Update_Plugin.runUpdate(Plugin_Name);
			if (Update_Plugin.isUp) {
				setTimeout(() => Update_Plugin.restart(), 2000)
			}
		}
		return true;
	}
}
