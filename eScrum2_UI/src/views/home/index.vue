<template>
  <div>
    <DxBox class="homepage-container">
      <DxItem :ratio="1">
        <template #default>
          <div class="left-side-container">
            <DxTreeList
            id="tasks"
            :data-source="customersTree"
            :show-borders="true"
            :column-auto-width="true"
            :word-wrap-enabled="true"
            :expanded-row-keys="expandedRowKeysOnLeft"
            :onRowClick="leftRowClick"
            key-expr="id"
            parent-id-expr="parent_id">
              <DxColumn
                :width="300"
                data-field="project_name" />
            </DxTreeList>
          </div>
        </template>
      </DxItem>
      <DxItem :ratio="4.4">
        <template #default>
          <div class="mid-container main-content-container">
            <DxToolbar>
              <DxItem
              :options="backButtonOptions"
              location="before"
              widget="dxButton"
              />
            </DxToolbar>
            <div class="content-block"></div>
          </div>
        </template>
      </DxItem>
      <DxItem :ratio="1">
        <template #default>
          <div class="right-side-container right-side-table">
            <div class="side-table-row">
              <p>Project Info</p>
            </div>
            <div class="side-table-row" v-for="(entry, index) in currentProjectProperties" :key="index">
              <div class="key-cell-in-row side-table-cell">
                {{ entry.key }}
              </div>
              <div class="value-cell-in-row side-table-cell">
                {{ entry.value }}
              </div>
            </div>
          </div>
        </template>
      </DxItem>
    </DxBox>
  </div>
</template>

<script>
import DxToolbar from 'devextreme-vue/toolbar';
import { DxBox, DxItem } from 'devextreme-vue/box';
import { DxTreeList, DxColumn } from 'devextreme-vue/tree-list';
import { Customers, tasks } from '../../mock/data';

export default {
  data() {
    return {
      customersTree: Customers,
      tasks,
      currentProjectProperties: [],
      expandedRowKeysOnLeft: []
    };
  },
  methods: {
    initPageData() {
      for (let i = 1; i <= Customers.length; i++) {
        this.expandedRowKeysOnLeft.push(i);
      }
    },
    leftRowClick($e) {
      let newArr = [];
      Object.entries($e.data.data).map((entry, idx) => {
        newArr.push({
          key: entry[0],
          value: entry[1]
        });
      });
      this.currentProjectProperties = [...newArr];
    }
  },
  components: {
    DxTreeList,
    DxColumn,
    DxBox,
    DxItem,
    DxToolbar
  },
  created() {
    this.initPageData();
  }
}
</script>

<style lang="scss">
@import "../../themes/generated/variables.base.scss";
@import "../../assets/global.scss";
@import "index.scss";


</style>
