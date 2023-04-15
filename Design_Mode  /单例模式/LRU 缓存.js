/*
lru-cache
	为LRU Cache设计一个数据结构，它支持两个操作
	1、get(key): 如果key 在cache中，则返回对应的value, 否则返回 -1
	2、set(key, value) 如果key 不在cache 中，则将 （key, value）插入cache 中（注意，如果cache已满，则必须把最近未使用的元素从cache中删除）
	如果key 在cache中，则重置value的值

*/



/*
	用一个数组来存储数据，给每一个数据项标记一个访问的时间戳
	每次插入新数据的时候，先把数组中存在的数据项的时间戳自增，并将新数据项的时间戳置0，并插入到数据中
	每次访问数据中的数据项的时候，将被访问的数据项的时间戳置为0
	当数组空间满时，将时间戳的最大数据项淘汰
*/


class LRUCache {

	constructor(capacity) {
		this.capacity = capacity // 容量
		this.members = []
	}

	put(key, value) {
		let oldestAge = -1
		let oldestIndex = -1
		let found = false
		for (let i = 0; i < this.members.length; i++) {
			let member = this.members[i]

			if (member.age > oldestAge) {
				oldestAge = member.age
				oldestIndex = i
			}

			if (member.key == key) {
				found = true
				this.members[i] = { key, value, age: 0 }
			} else {
				member.age++
			}
		}

		if (!found) {
			if (this.members.length >= this.capacity) {
				this.members.splice(oldestIndex, 1)
			}
			this.members.push({ key, value, age: 0 })
		}
	}

	get(key) {
		for (let i = 0; i < this.members.length; i++) {
			let member = this.members[i]
			if (member.key == key) {
				member.age = 0
				return member.value
			}
		}
		return -1;
	}

}

let cache = new LRUCache(3)
cache.put('1', '1')
cache.put('2', '2')
cache.put('3', '3')

console.log(cache.get('2'))
cache.put('4', '4')
console.log(cache.get('1'))



















