import React, {Component} from 'react';

import { Table } from 'antd';
import '../ps/perfect-scrollbar.css';
import 'antd/lib/table/style/index.css'
import PerfectScrollbar from '../ps/perfect-scrollbar.esm';
import './table.css';

const columns = [
  {
    title: 'rowNum',
    width: 100,
    dataIndex: 'rowNum',
    key: 'rowNum',
    fixed: 'left',
    render: function(rowNum, record, index) {
      return index + 1;
    }
  },
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 150,
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
  
  {
    title: 'Column 15',
    dataIndex: 'address',
    key: '15',
    width: 150,
  },
  {
    title: 'Column 16',
    dataIndex: 'address',
    key: '16',
    width: 150,
  },
  {
    title: 'Column 17',
    dataIndex: 'address',
    key: '17',
    width: 150,
  },
  { title: 'Column 18', dataIndex: 'address', key: '18' },
  {
    title: 'Action',
    key: 'operation18',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];

const data = [];
for (let i = 0; i < 300; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}


class TestTable extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let myTable = document.querySelector('#myTable .ant-table-body');
    this.ps = new PerfectScrollbar(myTable, {

    });
  }
  render() {
    //scroll={{ x: 1500, y: 300 }}
    return <Table id="myTable" columns={columns} width={600} dataSource={data} scroll={{ y: 300 }} pagination={false}/>
  }
}
export default TestTable;
// export function TestTable () {
//   return <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
// }