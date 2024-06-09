搬运过来的，自己又改动了一点而已，请支持原作者
如何安装：
*本教程适用于Ubuntu22.04桌面版,不适合windows

git clone https://github.com/jiang0681/tools01.git

必做
sudo apt update

安装node
sudo apt install apt-transport-https curl ca-certificates software-properties-common
curl -sL https://deb.nodesource.com/setup_18.12 | sudo -E bash -
sudo apt-get install -y nodejs

检查是否安装成功
node -v

安装redis服务
sudo apt install redis-server

查看服务状态
sudo systemctl status redis-server

新开一个控制台，安装npm
sudo apt install npm

安装n
sudo npm install -g n
n -V

用n升级npm
sudo n 18.12

安装pnpm依赖
sudo npm install pnpm -g

如果没有git要安装git
sudo apt-get install git

检查是否安装成功
git --version

从git仓库拉取内容
git clone --depth=1 https://github.com/yoimiya-kokomi/Miao-Yunzai.git

到Miao-Yunzai目录下安装喵喵插件
cd Miao-Yunzai 
git clone --depth=1 https://github.com/yoimiya-kokomi/miao-plugin.git ./plugins/miao-plugin/

安装依赖
pnpm install -P

安装jdk
sudo apt install openjdk-8-jdk

安装screen
sudo apt install screen

拉取签名程序
git clone https://gitee.com/summerwood6/qsxm.git

到qsxm目录下用控制台打开screen模式
cd qsxm && screen -S qsxm

运行脚本
sudo bash Qs.sh

获得默认地址
http://0.0.0.0:25000/sign?key=qsxm

回到Miao-Yunzai目录开控制台启动程序
node app

输入小号，回车选择扫码登录，模式用箭头选择apad

配置签名用上面的默认签名
http://0.0.0.0:25000/sign?key=qsxm

回车运行，成功。

可选插件（需cd Miao-Yunzai目录下）
锅巴
git clone --depth=1 https://github.com/guoba-yunzai/guoba-plugin.git ./plugins/Guoba-Plugin/
pnpm install --filter=guoba-plugin

梁氏
git clone --depth=1 https://github.com/liangshi233/liangshi-calc.git ./plugins/liangshi-calc/

Atlas图鉴
git clone --depth=1 https://github.com/Nwflower/atlas ./plugins/Atlas/
#图鉴升级

戏天脚本管理
git clone https://github.com/XiTianGame/xitian-plugin.git ./plugins/xitian-plugin/
#插件更新

状态
git clone https://github.com/erzaozi/neko-status-plugin.git ./plugins/neko-status-plugin
pnpm install --filter=neko-status-plugin

清凉图插件
git clone --depth 1 https://github.com/xwy231321/ql-plugin.git ./plugins/ql-plugin/
pnpm i
#清凉更新

闲心mihoyo图
git clone https://gitee.com/xianxincoder/xianxin-plugin.git ./plugins/xianxin-plugin/

鸢尾花表情包
git clone --depth=1 https://github.com/logier/logier-plugins.git ./plugins/logier-plugin/

逍遥原神图鉴（Atlas_alias）
git clone https://github.com/Ctrlcvs/xiaoyao-cvs-plugin.git ./plugins/xiaoyao-cvs-plugin/
#图鉴更新
#图鉴插件更新

文案插件
git clone --depth=1 https://gitee.com/white-night-fox/wenan-plugin.git ./plugins/wenan-plugin/
