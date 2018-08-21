const fs = require('fs');
const { join } = require('path');

const mdPahList = (prefix, routes) => {
  const data = fs.readdirSync(join(__dirname, '../', prefix));

  return data.filter(item => item.endsWith('.md')).map(item => prefix + item);
}

class List {
	constructor() {
		this.l = [];
	}

	pushL1(t, p) {
		this.l.push([p, t]);
		return this;
	}

	pushL2(t, p) {
		this.l.push({
			title: t,
			children: mdPahList(p),
			collapsable: true
		});
		return this;
	}

	getList() {
		return this.l;
	}
}


exports.mdPahList = mdPahList;
exports.List = List;
