<template>
    <div class="wrap">
        <header>导入导出demo</header>
        <div class="export">
            <input type="button" value="导出" @click="exportExcel" />
            <input ref="inputer" id="upload" type="file" @change="importExcel"  value="导入"
             accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
        </div>
        <div class="showData">
            <el-table :data="importData" style="width: 100%" stripe>
                <el-table-column :prop="'column'+(index+1)" :label="item" width="180" v-for="(item, index) in colName" :key="index"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'inOut',
    data() {
        return {
            exportData: [
            　　{
            　　　　"name": "张三",
            　　　　"jobNumber": "1001",
            　　　　"department": "技术部"
            　　},
            　　{
            　　　　"name": "李四",
            　　　　"jobNumber": "1002",
            　　　　"department": "技术部"
            　　},
            　　{
            　　　　"name": "王五",
            　　　　"jobNumber": "1003",
            　　　　"department": "销售部"
            　　},
            　　{
            　　　　"name": "赵六",
            　　　　"jobNumber": "1004",
            　　　　"department": "财务部"
            　　}
            ],
            importData: [],
            file: null,
            colName: []
        }
    },
    methods: {
        exportExcel() {　//兼容ie10哦！
        　　require.ensure([], () => {　　　　　　　　
                const { export_json_to_excel } = require('../excel/Export2Excel');　　//引入文件　　　　　　
                // const tHeader = ['姓名', '工号', '部门']; //将对应的属性名转换成中文
                const tHeader = this.colName;　
                let filterVal = []
                this.colName.forEach((item, index) => {
                    filterVal.push('column' + (1 + index))
                })
                // console.log(filterVal)
                // const filterVal = ['name', 'jobNumber', 'department'];//table表格中对应的属性名　　　　　 　　　
                const list = this.importData;　　//想要导出的数据　　　　　　
                const data = this.formatJson(filterVal, list);　　　　　　　　
                export_json_to_excel(tHeader, data, '列表');
            })
        },
        formatJson(filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => v[j]));
        },
        importExcel(obj){
            // this.importData = []
            // this.colName = []
            let _this = this
            let inputDOM = this.$refs.inputer
            this.file = event.currentTarget.files[0]
            var rABS = false //是否将文件读取为二进制字符串
            var f = this.file
            var reader = new FileReader()
            FileReader.prototype.readAsBinaryString = function(f) {
                var binary = ""
                var rABS = false
                var pt = this
                var outdata, wb //读取完成的数据
                var reader = new FileReader()
                reader.onload = function(e){
                    var bytes = new Uint8Array(reader.result)
                    var length = bytes.byteLength
                    for (var i=0; i<length; i++){
                        binary += String.fromCharCode(bytes[i])
                    }
                    var XLSX = require('xlsx')
                    if(rABS) {
                        wb = XLSX.read(btoa(fixdata(binary)), {
                            type: 'base64'
                        })
                    }else{
                        wb = XLSX.read(binary, {
                            type: 'binary'
                        })
                    }
                    outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
                    let data = _this.dataTransition(outdata)
                    // console.log(data)
                    _this.importData = data.list
                    _this.colName = data.keys
                }
                reader.readAsArrayBuffer(f)
            }
            if(rABS){
                reader.readAsArrayBuffer(f)
            }else{
                reader.readAsBinaryString(f)
            }
        },
        dataTransition(outdata){
            let list =[]
            var keys = []
            var obj = {}
            for(var key in outdata[0]){
                keys.push(key)
            }
            for(var i=0; i<outdata.length; i++){
                obj = {}
                let count = 1
                for(var key in outdata[i]){
                    obj['column' + count] = outdata[i][key]
                    count++
                    // if(key == '工号'){
                    //     obj['jobNumber'] = outdata[i][key]
                    // }else if(key == '姓名'){
                    //     obj['name'] = outdata[i][key]
                    // }else if(key == '部门'){
                    //     obj['department'] = outdata[i][key]
                    // }
                }
                list.push(obj)
            }
            return {list: list, keys: keys}
        }
    }
}
</script>

<style>

</style>
