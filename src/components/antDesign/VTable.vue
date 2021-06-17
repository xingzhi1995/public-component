<template>
  <a-table :columns="columns" :data-source="data" bordered>
    <template slot="name" slot-scope="text">
      <a>{{ text }}</a>
    </template>
  </a-table>
</template>

<script>
  const data = [
    {
      key: "1",
      name: "张三",
      age: 32,
      tel: "0571-22098909",
      phone: 18889898989,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "张三",
      tel: "0571-22098333",
      phone: 18889898888,
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "李四",
      age: 32,
      tel: "0575-22098909",
      phone: 18900010002,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "王五",
      age: 18,
      tel: "0575-22098909",
      phone: 18900010002,
      address: "London No. 2 Lake Park",
    },
    {
      key: "5",
      name: "赵六",
      age: 18,
      tel: "0575-22098909",
      phone: 18900010002,
      address: "Dublin No. 2 Lake Park",
    },
    {
      key: "6",
      name: "赵六",
      age: 18,
      tel: "0575-22098909",
      phone: 18900010002,
      address: "Dublin No. 2 Lake Park",
    },
  ];

  export default {
    data() {
      return {
        data,
        columns: [],
      };
    },
    created() {
      this.columns = [
        {
          title: "第一个",
          dataIndex: "phone",
          key: "phone",
        },
        {
          title: "第二个",
          dataIndex: "tel",
          key: "tel",
          customRender(text, row) {
            return {
              children: text,
              attrs: {
                rowSpan: row.nameRowSpan,
              },
            };
          },
        },
        {
          title: "第三个",
          dataIndex: "name",
          key: "name",
          width: 200,
          customRender(text, row) {
            return {
              children: text,
              attrs: {
                rowSpan: row.nameRowSpan,
              },
            };
          },
        },
        {
          title: "第四个",
          dataIndex: "key",
          key: "key",
        },
        {
          title: "第五个",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "第六个",
          dataIndex: "address",
          key: "address",
        },
      ];
      this.rowSpan("name");
      this.rowSpan("tel");
    },

    methods: {
      rowSpan(key) {
        let arr = this.data
          .reduce((result, item) => {
            if (result.indexOf(item[key]) < 0) {
              result.push(item[key]);
            }
            return result;
          }, [])
          .reduce((result, keys) => {
            const children = this.data.filter((item) => item[key] === keys);
            result = result.concat(
              children.map((item, index) => ({
                ...item,
                [`${key}RowSpan`]: index === 0 ? children.length : 0,
              }))
            );
            return result;
          }, []);

        this.data = arr;
      },
    },

    mounted() {
      this.rowSpan();
    },
  };
</script>
<style>
  th.column-money,
  td.column-money {
    text-align: right !important;
  }
</style>





















