// 存档系统：所有数据都存在 localStorage

function saveData(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

function loadData(key, defaultValue){
    let data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
}

function saveAll(){
    saveData("coins", coins);
    saveData("playerLevel", playerLevel);
    saveData("robots", robots);
}

function loadAll(){
    coins = loadData("coins", 100);
    playerLevel = loadData("playerLevel", 1);
    robots = loadData("robots", {
        A: { count: 0, level: 1, base: 1 },
        B: { count: 0, level: 1, base: 5 }
    });
}
