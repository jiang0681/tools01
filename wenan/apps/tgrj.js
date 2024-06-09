import plugin from '../../../lib/plugins/plugin.js';  
import fetch from 'node-fetch';  
  
export class wenan extends plugin {  
    constructor() {  
        super({  
            /** 功能名称 */  
            name: '文案舔狗日记',  
            /** 功能描述 */  
            dsc: '舔狗日记',  
            /** https://oicqjs.github.io/oicq/#events */  
            event: 'message',  
            /** 优先级，数字越小等级越高 */  
            priority: 5000,  
            rule: [  
                {  
                    reg: /#舔狗日记/,  // 更改为正则表达式  
                    fnc: 'tgrj'  
                }  
            ]  
        });  
    }  
  
    async tgrj(e) {  
        /** e.msg 用户的命令消息 */  
        logger.info('[用户命令]', e.msg);  
        let url = 'https://api.lolimi.cn/API/tgrj/api.php';  // 更新为单一的URL  
        /** 调用接口获取数据 */  
        let res = await fetch(url).catch((err) => logger.error(err));  
        if (!res) {  
            logger.error('[舔狗日记] 接口请求失败');  
            return await this.reply('舔狗日记接口请求失败');  
        } else {  
            try {  
                res = await res.text();  
                res = await res.replace("舔狗日记","").trim();  
                logger.info(`[接口结果] 舔狗日记：${res}`);  
                await this.reply(`${res}`);  
            } catch (error) {  
                logger.error(`[舔狗日记] 解析接口失败: ${error}`);  
                await this.reply('接口响应解析失败');  
            }  
        }  
    }  
}