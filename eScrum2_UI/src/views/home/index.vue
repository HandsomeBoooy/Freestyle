<template>
  <div>
    <DxBox class="homepage-container">
      <DxItem :ratio="1">
        <template #default>
          <div class="left-side-container">
            <DxTreeList id="tasks"
              :data-source="customersTree"
              :show-borders="true"
              :column-auto-width="true"
              :word-wrap-enabled="true"
              :expanded-row-keys="expandedRowKeysOnLeft"
              :onRowClick="leftRowClick"
              key-expr="id" parent-id-expr="parent_id">
              <DxColumn :width="300" data-field="project_name" />
            </DxTreeList>
          </div>
        </template>
      </DxItem>
      <DxItem :ratio="4.4">
        <template #default>
          <div class="mid-container main-content-container">
            <DxToolbar>
              <DxItem>
                <div class="toolbar-item toolbar-selection">
                  <div class="dx-field-label toolbar-inner-item">With a custom placeholder</div>
                  <div class="selection-inner-container toolbar-inner-item">
                    <DxSelectBox
                      :items="customerList"
                      :show-clear-button="true"
                      placeholder="Choose Customer"
                    />
                  </div>
                </div>
                <div class="toolbar-item toolbar-divider"></div>
                <div class="toolbar-item toolbar-button">
                  <DxButton type="normal">
                    <img src="../../assets/icons/reload.svg" alt="">
                  </DxButton>
                </div>
              </DxItem>
            </DxToolbar>
            <div class="content-block">
              <div class="time-table-container"></div>
              <div class="vehicle-table-container"></div>
            </div>
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
  import { DxSelectBox, DxButton } from 'devextreme-vue';
  import DxToolbar from 'devextreme-vue/toolbar';
  import { DxBox, DxItem } from 'devextreme-vue/box';
  import { DxTreeList, DxColumn } from 'devextreme-vue/tree-list';
  import { Customers, tasks, CustomerList } from '../../mock/data';

  export default {
    data() {
      return {
        customersTree: Customers,
        tasks,
        currentProjectProperties: [],
        expandedRowKeysOnLeft: [],
        productTypes: [{
          id: 1,
          text: 'All'
        }, {
          id: 2,
          text: 'Video Players'
        }, {
          id: 3,
          text: 'Televisions'
        }, {
          id: 4,
          text: 'Monitors'
        }, {
          id: 5,
          text: 'Projectors'
        }],
        // selectBoxOptions: {
        //   width: 140,
        //   items: this.productTypes,
        //   valueExpr: 'id',
        //   displayExpr: 'text',
        //   value: this.productTypes[0].id,
        //   onValueChanged: (args) => {
        //     if (args.value > 1) {
        //       this.productsStore.filter('type', '=', args.value);
        //     } else {
        //       this.productsStore.filter(null);
        //     }
        //     this.productsStore.load();
        //   }
        // },
        simpleProducts: [],
        customerList: CustomerList
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
        Object.entries($e.data.data).map((entry) => {
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
      DxToolbar,
      DxSelectBox,
      DxButton
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