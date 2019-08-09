<template>
    <div class="wrap">
        <header>导入导出demo</header>
        <div class="export">
            <input type="button" value="导出" @click="testfunc" />
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
import XLSX from 'xlsx'
export default {
    name: 'inOut',
    data() {
        return {
            exportData: [
            　　{
            　　　　"name": "张三",
            　　　　"jobNumber": "1001",
            　　　　"department": "技术部"
            　　}
            ],
            importData: [],
            file: null,
            colName: []
        }
    },
    methods: {
        testfunc(){
            var new_ws_name = "SheetJS";

            /* make worksheet */
            var ws_data = [
            [ "S", "h", "e", "e", "t", "J", "S" ],
            [  1 ,  2 ,  3 ,  4 ,  5 ]
            ];
            var ws = XLSX.utils.aoa_to_sheet(ws_data);

            /* Add the worksheet to the workbook */
            XLSX.utils.book_append_sheet(wb, ws, ws_name);
        },
        outputXlsxFile(data, wscols, xlsxName){ 
            /* convert state to workbook */ 　　
            var sheetNames = []; 
            var sheetsList= {}; 　　
            for(var key in data){ 　　　　
            　　sheetNames.push(key); 
            　　var temp = transferDataExcel(data[key]);//此函数是把数据处理成 [['字段（我是表头1）', '字段（我是表头2）'], ['（表头1对应的内容1）', '（表头1对应的内容2）']['内容1','内容2']...]  　　　　
            　　sheetsList[key] = XLSX.utils.aoa_to_sheet(temp); 　　　　
            　　sheetsList[key]['!cols'] = wscols; 　　
            } 
            const wb = XLSX.utils.book_new(); 
            wb['SheetNames']= sheetNames; 
            wb['Sheets']= sheetsList; 　　
            XLSX.writeFile(wb, xlsxName + ".xlsx");
        },
        transferDataExcel(data){
            var total = [];
            var temp = ['功能','功能描述','取值'];
            total.push(temp);
            data.forEach(function(item,index){
                var arr = [];
                arr.push(item.function_name)
                arr.push(item.description)
                arr.push(item.value)
                total.push(arr);
            })
            return total;
        },
        exportExcel() {　//兼容ie10哦！
        　　require.ensure([], () => {　　　　　　　　
                const { export_json_to_excel } = require('../excel/Export2Excel');　　//引入文件　　　　　　
                const tHeader = this.colName;　
                let filterVal = []
                this.colName.forEach((item, index) => {
                    filterVal.push('column' + (1 + index))
                })
                const list = this.importData;　　//想要导出的数据　　　　　　
                const data = this.formatJson(filterVal, list);　　　　　　
                export_json_to_excel(tHeader, data, '列表');
            })
        },
        templateDownload() {　//兼容ie10哦！
        　　require.ensure([], () => {　　　　　　　　
                const { export_json_to_excel } = require('../excel/Export2Excel');　　//引入文件　　　　　　
            　　const tHeader = ['姓名', '工号', '部门']; //将对应的属性名转换成中文
                const filterVal = ['name', 'jobNumber', 'department'];//table表格中对应的属性名　　　　　 　　　
                const list = this.exportData;　　//想要导出的数据　　　　　　
                const data = this.formatJson(filterVal, list);
                export_json_to_excel(tHeader, data, '列表');
            })
        },
        formatJson(filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => v[j]));
        },
        importExcel(obj){
            console.log(obj)
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
                    count ++
                }
                list.push(obj)
            }
            return {list: list, keys: keys}
        }
    }
}
</script>

<style lang="scss" scoped style="stylesheet/scss">
.wrap{
    header{
        text-align: left
    }
    .export{
        text-align: left
    }
}
</style>
