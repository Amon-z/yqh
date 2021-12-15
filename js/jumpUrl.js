function jumpUrl()
{
	var name = document.getElementById("in").value;
	if (name == "吴敏瑶" || name == "郑芊芊" || name == "欧梓娜" || name == "陈月燕"
		||name == "方雪蓉" || name == "郑柯瑶" || name == "徐锦豪" || name == "马宇博"
		|| name == "吴国伟" || name == "黄贤杰" || name == "沈伟涛" || name == "黎明泽"
		|| name == "凌陈旭" || name == "郭祖豪" || name == "欧炳丰")
	{
		window.location.href="./home.html?name="+name;
	}
	else
	{
		alert("你的输入有误");
	}
}
